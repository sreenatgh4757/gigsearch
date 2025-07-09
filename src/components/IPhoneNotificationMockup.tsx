import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, MapPin, Star, Briefcase, TrendingUp, Bell, Clock } from 'lucide-react';

interface Notification {
  id: string;
  type: 'message' | 'job' | 'earnings' | 'reminder' | 'update';
  title: string;
  subtitle: string;
  time: string;
  icon: string;
  iconBg: string;
  avatar?: string;
  initials?: string;
}

const notificationData: Omit<Notification, 'id' | 'time'>[] = [
  {
    type: 'message',
    title: 'Sarah Chen',
    subtitle: 'Can you cover my shift tomorrow? Coffee shop downtown.',
    icon: '💬',
    iconBg: '#007AFF',
    initials: 'SC',
    avatar: '#F6A961'
  },
  {
    type: 'job',
    title: 'Urban Coffee Co.',
    subtitle: 'New barista position available - immediate start',
    icon: '☕',
    iconBg: '#34C759',
    initials: 'UC',
    avatar: '#8B5CF6'
  },
  {
    type: 'earnings',
    title: 'Payment Received',
    subtitle: 'You earned £85 from your weekend shift at Downtown Books',
    icon: '💰',
    iconBg: '#30D158',
    initials: '£',
    avatar: '#10B981'
  },
  {
    type: 'reminder',
    title: 'Shift Reminder',
    subtitle: 'Your shift at Urban Coffee starts in 2 hours',
    icon: '⏰',
    iconBg: '#FF9500',
    initials: '⏰',
    avatar: '#F59E0B'
  },
  {
    type: 'job',
    title: 'Event Staff Needed',
    subtitle: 'Weekend event at Convention Center - £15/hour',
    icon: '🎉',
    iconBg: '#AF52DE',
    initials: 'ES',
    avatar: '#EC4899'
  },
  {
    type: 'message',
    title: 'Mike Johnson',
    subtitle: 'Great job on your last shift! Would love to have you back.',
    icon: '👍',
    iconBg: '#007AFF',
    initials: 'MJ',
    avatar: '#06B6D4'
  },
  {
    type: 'earnings',
    title: 'Weekly Summary',
    subtitle: 'You completed 3 shifts this week and earned £245',
    icon: '📊',
    iconBg: '#30D158',
    initials: '📊',
    avatar: '#84CC16'
  },
  {
    type: 'job',
    title: 'Retail Assistant',
    subtitle: 'Fashion store needs help during sale weekend',
    icon: '🛍️',
    iconBg: '#FF2D92',
    initials: 'RA',
    avatar: '#EF4444'
  }
];

const generateTimeAgo = () => {
  const times = ['now', '2m ago', '5m ago', '1h ago', '2h ago', '3h ago'];
  return times[Math.floor(Math.random() * times.length)];
};

const IPhoneNotificationMockup: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const addNotification = () => {
      const template = notificationData[Math.floor(Math.random() * notificationData.length)];
      const newNotification: Notification = {
        ...template,
        id: Math.random().toString(36).substr(2, 9),
        time: generateTimeAgo()
      };

      setNotifications(prev => {
        const updated = [newNotification, ...prev];
        // Keep only the latest 4 notifications
        return updated.slice(0, 4);
      });
    };

    // Add initial notifications with staggered timing
    const timeouts = [
      setTimeout(() => addNotification(), 1000),
      setTimeout(() => addNotification(), 2500),
      setTimeout(() => addNotification(), 4000)
    ];

    // Add new notifications every 3 seconds
    const interval = setInterval(addNotification, 3000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="flex justify-start items-center h-full">
      <div className="relative">
        {/* iPhone Frame */}
        <div 
          className="relative bg-black rounded-[3rem] p-2 shadow-2xl"
          style={{
            width: '220px',
            height: '450px',
            background: 'linear-gradient(145deg, #1a1a1a, #000000)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Screen */}
          <div 
            className="relative w-full h-full rounded-[2rem] overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 50%, #4ecdc4 100%)',
            }}
          >
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 pt-3 pb-2">
              <div className="text-white font-semibold text-sm">
                {formatTime(currentTime)}
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                </div>
                <div className="ml-1 text-white text-xs">100%</div>
                <div className="w-5 h-2.5 border border-white rounded-sm">
                  <div className="w-full h-full bg-white rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="text-center text-white/90 text-xs font-medium mb-6">
              {formatDate(currentTime)}
            </div>

            {/* Notifications Container */}
            <div className="px-3 space-y-2 relative">
              {notifications.map((notification, index) => (
                <div
                  key={notification.id}
                  className="transform transition-all duration-1500 ease-out"
                  style={{
                    animation: `slideUpFadeIn 1.5s ease-out ${index * 0.2}s both`,
                    zIndex: notifications.length - index
                  }}
                >
                  <div 
                    className="backdrop-blur-xl bg-white/15 border border-white/20 rounded-xl p-3 shadow-lg"
                    style={{
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      background: 'rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <div className="flex items-start space-x-2">
                      {/* App Icon/Avatar */}
                      <div className="flex-shrink-0">
                        {notification.avatar ? (
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md"
                            style={{ backgroundColor: notification.avatar }}
                          >
                            {notification.initials}
                          </div>
                        ) : (
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm shadow-md"
                            style={{ backgroundColor: notification.iconBg }}
                          >
                            {notification.icon}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-white font-semibold text-xs truncate">
                            {notification.title}
                          </h4>
                          <span className="text-white/70 text-xs ml-1 flex-shrink-0">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-white/90 text-xs leading-relaxed line-clamp-2">
                          {notification.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Indicator */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-0.5 bg-white/30 rounded-full"></div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-0.5 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUpFadeIn {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default IPhoneNotificationMockup;