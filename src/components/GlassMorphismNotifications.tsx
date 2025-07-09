import React, { useState, useEffect } from 'react';
import { MessageCircle, Heart, Star, Clock, MapPin, Briefcase, TrendingUp, User, Bell } from 'lucide-react';

interface Notification {
  id: string;
  type: 'message' | 'like' | 'comment' | 'job' | 'earnings';
  content: string;
  user: {
    name: string;
    avatar: string;
    initials: string;
  };
  time: string;
  side: 'left' | 'right';
  index: number;
}

const avatarColors = [
  '#F6A961', '#6366F1', '#EF4444', '#10B981', '#F59E0B', 
  '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16', '#F97316'
];

const users = [
  { name: 'Sarah Chen', initials: 'SC' },
  { name: 'Mike Johnson', initials: 'MJ' },
  { name: 'Emma Wilson', initials: 'EW' },
  { name: 'James Brown', initials: 'JB' },
  { name: 'Lucy Davis', initials: 'LD' },
  { name: 'Tom Miller', initials: 'TM' },
  { name: 'Sophie Taylor', initials: 'ST' },
  { name: 'Alex Garcia', initials: 'AG' },
  { name: 'Maya Patel', initials: 'MP' },
  { name: 'Ben Clark', initials: 'BC' }
];

const notificationTemplates = {
  message: [
    "Hey! Are you available for a shift tomorrow?",
    "Great job on your last shift! 🎉",
    "New opportunity at downtown location",
    "Thanks for covering my shift yesterday!",
    "Coffee shop needs help this weekend"
  ],
  like: [
    "liked your profile",
    "liked your work review",
    "liked your availability update",
    "liked your shift completion",
    "liked your professional photo"
  ],
  comment: [
    "commented on your shift: 'Excellent work!'",
    "commented: 'Very reliable worker'",
    "commented: 'Always on time and professional'",
    "commented: 'Would hire again!'",
    "commented: 'Great attitude and skills'"
  ],
  job: [
    "New barista position at Urban Coffee",
    "Event staff needed this weekend",
    "Retail assistant - immediate start",
    "Kitchen helper for busy restaurant",
    "Delivery driver - flexible hours"
  ],
  earnings: [
    "earned £85 from weekend shift",
    "completed 6-hour shift - £72 earned",
    "received £95 for event work",
    "earned £60 from retail shift",
    "completed delivery shift - £78 earned"
  ]
};

const generateNotification = (side: 'left' | 'right', index: number): Notification => {
  const types: (keyof typeof notificationTemplates)[] = ['message', 'like', 'comment', 'job', 'earnings'];
  const type = types[Math.floor(Math.random() * types.length)];
  const user = users[Math.floor(Math.random() * users.length)];
  const content = notificationTemplates[type][Math.floor(Math.random() * notificationTemplates[type].length)];
  
  const times = ['2m ago', '5m ago', '1h ago', '3h ago', 'now'];
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    type,
    content,
    user: {
      ...user,
      avatar: avatarColors[Math.floor(Math.random() * avatarColors.length)]
    },
    time: times[Math.floor(Math.random() * times.length)],
    side,
    index
  };
};

const NotificationPill: React.FC<{ 
  notification: Notification; 
  onRemove: () => void;
  isMobile: boolean;
}> = ({ notification, onRemove, isMobile }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRemoving(true);
      setTimeout(onRemove, 600);
    }, 15000); // 15 seconds display time
    return () => clearTimeout(timer);
  }, [onRemove]);

  const getIcon = () => {
    switch (notification.type) {
      case 'message': return <MessageCircle className="h-3 w-3" />;
      case 'like': return <Heart className="h-3 w-3 text-red-400" />;
      case 'comment': return <MessageCircle className="h-3 w-3" />;
      case 'job': return <Briefcase className="h-3 w-3" />;
      case 'earnings': return <TrendingUp className="h-3 w-3 text-green-400" />;
      default: return <Bell className="h-3 w-3" />;
    }
  };

  const getNotificationText = () => {
    switch (notification.type) {
      case 'like':
        return `${notification.user.name} ${notification.content}`;
      case 'earnings':
        return `${notification.user.name} ${notification.content}`;
      default:
        return notification.content;
    }
  };

  // Calculate position based on side and index
  const getPositionStyles = () => {
    const baseTop = 120 + (notification.index * 90); // Stack vertically with 90px spacing
    const horizontalOffset = isMobile ? 10 : 20;
    
    if (notification.side === 'left') {
      return {
        left: `${horizontalOffset}px`,
        top: `${baseTop}px`,
      };
    } else {
      return {
        right: `${horizontalOffset}px`,
        top: `${baseTop}px`,
      };
    }
  };

  return (
    <div
      className={`fixed transition-all duration-700 ease-out transform pointer-events-none ${
        isVisible && !isRemoving 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      } ${isHovered ? 'scale-105' : ''}`}
      style={{
        ...getPositionStyles(),
        zIndex: 5, // Lower z-index to stay behind main content
        maxWidth: isMobile ? '160px' : '200px',
        minWidth: isMobile ? '140px' : '180px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="backdrop-blur-md bg-white/12 border border-white/20 rounded-xl shadow-lg p-2.5 transition-all duration-300"
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: 'rgba(255, 255, 255, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
        }}
      >
        <div className="flex items-start space-x-2">
          {/* Profile Picture - Smaller */}
          <div 
            className="w-6 h-6 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0 shadow-md"
            style={{
              backgroundColor: notification.user.avatar,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)'
            }}
          >
            {notification.user.initials}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-1">
                <div className="text-white/80">
                  {getIcon()}
                </div>
                <span className="text-xs font-medium text-white/70">
                  {notification.time}
                </span>
              </div>
            </div>
            
            <p className="text-xs font-medium text-white leading-relaxed line-clamp-2">
              {getNotificationText()}
            </p>
            
            {notification.type === 'job' && (
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center space-x-1 text-xs text-white/60">
                  <MapPin className="h-2 w-2" />
                  <span>Nearby</span>
                </div>
              </div>
            )}
            
            {notification.type === 'earnings' && (
              <div className="flex items-center space-x-1 mt-1">
                <Star className="h-2 w-2 text-yellow-400 fill-current" />
                <span className="text-xs text-white/60">5.0</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const GlassMorphismNotifications: React.FC = () => {
  const [leftNotifications, setLeftNotifications] = useState<Notification[]>([]);
  const [rightNotifications, setRightNotifications] = useState<Notification[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const addNotification = () => {
    const side = Math.random() > 0.5 ? 'left' : 'right';
    
    if (side === 'left') {
      setLeftNotifications(prev => {
        if (prev.length >= 3) {
          // Remove oldest notification
          const newNotifications = prev.slice(1);
          // Update indices
          const updatedNotifications = newNotifications.map((notif, index) => ({
            ...notif,
            index
          }));
          // Add new notification
          const newNotification = generateNotification('left', updatedNotifications.length);
          return [...updatedNotifications, newNotification];
        } else {
          const newNotification = generateNotification('left', prev.length);
          return [...prev, newNotification];
        }
      });
    } else {
      setRightNotifications(prev => {
        if (prev.length >= 3) {
          // Remove oldest notification
          const newNotifications = prev.slice(1);
          // Update indices
          const updatedNotifications = newNotifications.map((notif, index) => ({
            ...notif,
            index
          }));
          // Add new notification
          const newNotification = generateNotification('right', updatedNotifications.length);
          return [...updatedNotifications, newNotification];
        } else {
          const newNotification = generateNotification('right', prev.length);
          return [...prev, newNotification];
        }
      });
    }
  };

  useEffect(() => {
    // Initial notifications with staggered timing
    const timeouts = [
      setTimeout(() => addNotification(), 2000),
      setTimeout(() => addNotification(), 4000),
      setTimeout(() => addNotification(), 6000)
    ];

    // Regular interval for new notifications every 15 seconds
    const interval = setInterval(addNotification, 15000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  const removeLeftNotification = (id: string) => {
    setLeftNotifications(prev => {
      const filtered = prev.filter(n => n.id !== id);
      // Update indices after removal
      return filtered.map((notif, index) => ({
        ...notif,
        index
      }));
    });
  };

  const removeRightNotification = (id: string) => {
    setRightNotifications(prev => {
      const filtered = prev.filter(n => n.id !== id);
      // Update indices after removal
      return filtered.map((notif, index) => ({
        ...notif,
        index
      }));
    });
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left side notifications */}
      {leftNotifications.map(notification => (
        <NotificationPill
          key={notification.id}
          notification={notification}
          onRemove={() => removeLeftNotification(notification.id)}
          isMobile={isMobile}
        />
      ))}
      
      {/* Right side notifications */}
      {rightNotifications.map(notification => (
        <NotificationPill
          key={notification.id}
          notification={notification}
          onRemove={() => removeRightNotification(notification.id)}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default GlassMorphismNotifications;