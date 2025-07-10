import React, { useState } from 'react';
import { 
  Users, 
  Building2, 
  UserPlus, 
  User, 
  Zap, 
  Briefcase, 
  Star, 
  CreditCard,
  Calendar,
  MessageCircle,
  BarChart3,
  Shield,
  Clock,
  Target,
  Award,
  TrendingUp,
  ChevronRight,
  CheckCircle,
  MapPin,
  Menu,
  X,
  Search,
  FileText,
  Settings,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ExternalLink,
  Send
} from 'lucide-react';
import GlassMorphismNotifications from './components/GlassMorphismNotifications';
import CanvaPhoneMockup from './components/CanvaPhoneMockup';
import FloatingContactForm from './components/FloatingContactForm';
import FAQPage from './components/FAQPage';

function App() {
  const [activeTab, setActiveTab] = useState<'workers' | 'employers'>('workers');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [currentPage, setCurrentPage] = useState<'home' | 'faq'>('home');

  const TGSLogo = () => (
    <svg width="32" height="35" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.312 2.196C6.44 2.18 6.552 2.216 6.648 2.304C6.744 2.384 6.792 2.492 6.792 2.628C6.792 2.756 6.744 2.868 6.648 2.964C6.552 3.052 6.44 3.088 6.312 3.072C6.232 3.056 6.148 3.044 6.06 3.036C5.98 3.028 5.896 3.02 5.808 3.012H5.784C5.728 3.012 5.7 3.044 5.7 3.108V8.076C5.7 8.412 5.644 8.772 5.532 9.156C5.42 9.548 5.248 9.916 5.016 10.26C4.784 10.604 4.484 10.884 4.116 11.1C3.756 11.324 3.32 11.436 2.808 11.436C2.344 11.436 1.948 11.36 1.62 11.208C1.292 11.056 1.02 10.848 0.804 10.584C0.676 10.432 0.58 10.272 0.516 10.104C0.46 9.936 0.432 9.776 0.432 9.624C0.432 9.392 0.496 9.192 0.624 9.024C0.752 8.864 0.936 8.784 1.176 8.784C1.408 8.784 1.588 8.86 1.716 9.012C1.852 9.172 1.92 9.348 1.92 9.54C1.92 9.756 1.836 9.936 1.668 10.08C1.612 10.136 1.6 10.184 1.632 10.224C1.728 10.36 1.868 10.464 2.052 10.536C2.236 10.608 2.488 10.644 2.808 10.644C3.152 10.644 3.448 10.568 3.696 10.416C3.952 10.264 4.16 10.06 4.32 9.804C4.48 9.556 4.6 9.28 4.68 8.976C4.76 8.672 4.8 8.372 4.8 8.076V7.788C4.8 7.74 4.788 7.712 4.764 7.704C4.74 7.688 4.708 7.696 4.668 7.728C4.452 7.944 4.204 8.116 3.924 8.244C3.652 8.372 3.352 8.436 3.024 8.436C2.52 8.436 2.076 8.344 1.692 8.16C1.316 7.976 1 7.736 0.744 7.44C0.496 7.136 0.308 6.8 0.18 6.432C0.06 6.056 0 5.684 0 5.316C0 4.956 0.06 4.592 0.18 4.224C0.3 3.856 0.476 3.52 0.708 3.216C0.948 2.904 1.252 2.656 1.62 2.472C1.988 2.288 2.416 2.196 2.904 2.196C3.28 2.196 3.612 2.256 3.9 2.376C4.188 2.496 4.444 2.66 4.668 2.868C4.692 2.892 4.716 2.904 4.74 2.904C4.78 2.904 4.8 2.876 4.8 2.82V2.724C4.8 2.596 4.844 2.488 4.932 2.4C5.02 2.312 5.128 2.268 5.256 2.268H5.7C5.724 2.268 5.78 2.264 5.868 2.256C5.964 2.24 6.056 2.228 6.144 2.22C6.232 2.204 6.288 2.196 6.312 2.196ZM3.012 7.56C3.412 7.56 3.756 7.484 4.044 7.332C4.34 7.18 4.576 6.988 4.752 6.756C4.784 6.716 4.8 6.672 4.8 6.624V3.948C4.8 3.9 4.784 3.856 4.752 3.816C4.528 3.576 4.264 3.388 3.96 3.252C3.656 3.116 3.336 3.048 3 3.048C2.584 3.048 2.22 3.148 1.908 3.348C1.604 3.548 1.364 3.82 1.188 4.164C1.02 4.5 0.936 4.88 0.936 5.304C0.936 5.72 1.024 6.1 1.2 6.444C1.384 6.788 1.632 7.06 1.944 7.26C2.264 7.46 2.62 7.56 3.012 7.56Z" fill="#F7A961"/>
      <path d="M4.488 2.196C4.36 2.18 4.248 2.216 4.152 2.304C4.056 2.384 4.008 2.492 4.008 2.628C4.008 2.756 4.056 2.868 4.152 2.964C4.248 3.052 4.36 3.088 4.488 3.072C4.568 3.056 4.652 3.044 4.74 3.036C4.82 3.028 4.904 3.02 4.992 3.012H5.016C5.072 3.012 5.1 3.044 5.1 3.108V8.076C5.1 8.412 5.156 8.772 5.268 9.156C5.38 9.548 5.552 9.916 5.784 10.26C6.016 10.604 6.316 10.884 6.684 11.1C7.044 11.324 7.48 11.436 7.992 11.436C8.456 11.436 8.852 11.36 9.18 11.208C9.508 11.056 9.78 10.848 9.996 10.584C10.124 10.432 10.22 10.272 10.284 10.104C10.34 9.936 10.368 9.776 10.368 9.624C10.368 9.392 10.304 9.192 10.176 9.024C10.048 8.864 9.864 8.784 9.624 8.784C9.392 8.784 9.212 8.86 9.084 9.012C8.948 9.172 8.88 9.348 8.88 9.54C8.88 9.756 8.964 9.936 9.132 10.08C9.188 10.136 9.2 10.184 9.168 10.224C9.072 10.36 8.932 10.464 8.748 10.536C8.564 10.608 8.312 10.644 7.992 10.644C7.648 10.644 7.352 10.568 7.104 10.416C6.848 10.264 6.64 10.06 6.48 9.804C6.32 9.556 6.2 9.28 6.12 8.976C6.04 8.672 6 8.372 6 8.076V7.788C6 7.74 6.012 7.712 6.036 7.704C6.06 7.688 6.092 7.696 6.132 7.728C6.348 7.944 6.596 8.116 6.876 8.244C7.148 8.372 7.448 8.436 7.776 8.436C8.28 8.436 8.724 8.344 9.108 8.16C9.484 7.976 9.8 7.736 10.056 7.44C10.304 7.136 10.492 6.8 10.62 6.432C10.74 6.056 10.8 5.684 10.8 5.316C10.8 4.956 10.74 4.592 10.62 4.224C10.5 3.856 10.324 3.52 10.092 3.216C9.852 2.904 9.548 2.656 9.18 2.472C8.812 2.288 8.384 2.196 7.896 2.196C7.52 2.196 7.188 2.256 6.9 2.376C6.612 2.496 6.356 2.66 6.132 2.868C6.108 2.892 6.084 2.904 6.06 2.904C6.02 2.904 6 2.876 6 2.82V2.724C6 2.596 5.956 2.488 5.868 2.4C5.78 2.312 5.672 2.268 5.544 2.268H5.1C5.076 2.268 5.02 2.264 4.932 2.256C4.836 2.24 4.744 2.228 4.656 2.22C4.568 2.204 4.512 2.196 4.488 2.196ZM7.788 7.56C7.388 7.56 7.044 7.484 6.756 7.332C6.46 7.18 6.224 6.988 6.048 6.756C6.016 6.716 6 6.672 6 6.624V3.948C6 3.9 6.016 3.856 6.048 3.816C6.272 3.576 6.536 3.388 6.84 3.252C7.144 3.116 7.464 3.048 7.8 3.048C8.216 3.048 8.58 3.148 8.892 3.348C9.196 3.548 9.436 3.82 9.612 4.164C9.78 4.5 9.864 4.88 9.864 5.304C9.864 5.72 9.776 6.1 9.6 6.444C9.416 6.788 9.168 7.06 8.856 7.26C8.536 7.46 8.18 7.56 7.788 7.56Z" fill="#F7A961"/>
      <path d="M5.348 1.608C5.124 1.608 4.932 1.528 4.772 1.368C4.62 1.216 4.544 1.028 4.544 0.804C4.544 0.58 4.62 0.392 4.772 0.24C4.932 0.0799997 5.124 0 5.348 0C5.572 0 5.76 0.0799997 5.912 0.24C6.072 0.392 6.152 0.58 6.152 0.804C6.152 1.028 6.072 1.216 5.912 1.368C5.76 1.528 5.572 1.608 5.348 1.608Z" fill="#F7A961"/>
    </svg>
  );

  const AppStoreButtons = () => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
      <a 
        href="#" 
        className="app-store-button flex items-center text-white px-6 py-3 rounded-xl shadow-lg group"
      >
        <div className="mr-3">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-300">Download on the</div>
          <div className="text-lg font-semibold">App Store</div>
        </div>
      </a>
      
      <a 
        href="#" 
        className="play-store-button flex items-center text-white px-6 py-3 rounded-xl shadow-lg group"
      >
        <div className="mr-3">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-300">Get it on</div>
          <div className="text-lg font-semibold">Google Play</div>
        </div>
      </a>
    </div>
  );

  const WorkersPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-800 text-white" data-hero-section>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and CTAs */}
            <div className="text-left">
              <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                Flexible Gigs.<br />
                <span className="text-orange-400" style={{color: '#F6A961'}}>Real Experience.</span><br />
                Fast Pay.
              </h2>
              <p className="text-xl sm:text-2xl mb-8 leading-relaxed">
                Turn your free time into earning time! Connect with local businesses, gain valuable experience, and get paid quickly for work that fits your schedule.
              </p>
              
              <AppStoreButtons />
            </div>
            
            {/* Right side - iPhone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <CanvaPhoneMockup />
            </div>
          </div>
          
          {/* Fallback for mobile - centered layout */}
          <div className="lg:hidden text-center mt-12">
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Flexible Gigs.<br />
              <span className="text-orange-400" style={{color: '#F6A961'}}>Real Experience.</span><br />
              Fast Pay.
            </h2>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Turn your free time into earning time! Connect with local businesses, gain valuable experience, and get paid quickly for work that fits your schedule.
            </p>
            
            <AppStoreButtons />
          </div>
        </div>
      </div>

      {/* Worker Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-black mb-4">Find Your Perfect Gig</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover opportunities that match your skills, schedule, and location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Smart Job Matching",
                description: "Our AI algorithm finds gigs that perfectly match your skills, availability, and preferences.",
                features: ["Skill-based matching", "Location filtering", "Schedule compatibility"]
              },
              {
                icon: User,
                title: "Build Your Profile",
                description: "Create a compelling profile that showcases your skills and attracts top employers.",
                features: ["Portfolio showcase", "Skill verification", "Reference system"]
              },
              {
                icon: CreditCard,
                title: "Fast Payments",
                description: "Get paid within 24 hours of completing your work through our secure payment system.",
                features: ["Instant notifications", "Multiple payment methods", "Payment protection"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
                <div className="bg-orange-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{backgroundColor: '#F6A961'}}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-black mb-4">{feature.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Steps */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-black mb-4">Your Journey to Success</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From signup to your first paycheck in just 5 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                icon: UserPlus,
                title: "Sign Up",
                description: "Create your account in under 2 minutes with your student email",
                color: "bg-orange-400"
              },
              {
                icon: User,
                title: "Build Profile",
                description: "Showcase your skills, availability, and work preferences",
                color: "bg-black"
              },
              {
                icon: Zap,
                title: "Get Matched",
                description: "Our AI finds perfect gigs based on your profile and location",
                color: "bg-orange-400"
              },
              {
                icon: Briefcase,
                title: "Work Shifts",
                description: "Show up, do great work, and build your professional reputation",
                color: "bg-black"
              },
              {
                icon: CreditCard,
                title: "Get Paid",
                description: "Receive payment within 24 hours of completing your shift",
                color: "bg-orange-400"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`} style={step.color === 'bg-orange-400' ? {backgroundColor: '#F6A961'} : {}}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  {index < 4 && (
                    <ChevronRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-400" />
                  )}
                </div>
                <h4 className="text-xl font-semibold text-black mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const EmployersPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and CTAs */}
            <div className="text-left">
              <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                Hire On-Demand.<br />
                <span className="text-orange-400" style={{color: '#F6A961'}}>Scale Without Stress.</span>
              </h2>
              <p className="text-xl sm:text-2xl mb-8 leading-relaxed">
                Access a pool of motivated university students ready to help your business thrive during peak times, events, and staffing shortages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://employer.thegigsearch.com/login"
                  className="bg-orange-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-300 transform hover:scale-105 transition-all duration-200 shadow-lg" 
                  style={{backgroundColor: '#F6A961'}}
                >
                  Post Your First Gig Free
                  <ChevronRight className="inline-block ml-2 h-5 w-5" />
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-200">
                  Schedule a Demo
                </button>
              </div>
              
              <AppStoreButtons />
            </div>
            
            {/* Right side - Video */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/xJHy4oxeDfY?si=KjQXvYOSoXTIjXpL&rel=0&modestbranding=1&showinfo=0"
                    title="The Gig Search - How It Works for Employers"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video overlay with play button effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
                
                {/* Video caption */}
                <div className="mt-4 text-center">
                  <p className="text-white/80 text-sm">
                    See how The Gig Search transforms your hiring process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Employer Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-black mb-4">Powerful Tools for Employers</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to find, hire, and manage temporary workers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Easy Job Posting",
                description: "Create detailed job postings with requirements, schedules, and compensation in minutes.",
                features: ["Template library", "Bulk posting", "Auto-renewal options"]
              },
              {
                icon: Users,
                title: "Candidate Management",
                description: "Review applications, conduct interviews, and select the best candidates for your needs.",
                features: ["Application tracking", "Rating system", "Background checks"]
              },
              {
                icon: Settings,
                title: "Business Dashboard",
                description: "Monitor all your gigs, track worker performance, and manage payments from one place.",
                features: ["Real-time analytics", "Performance metrics", "Automated reporting"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
                <div className="bg-orange-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{backgroundColor: '#F6A961'}}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-black mb-4">{feature.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-black mb-4">Why Businesses Choose The Gig Search</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible staffing solutions that grow with your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Flexible Staffing",
                description: "Scale your workforce up or down based on seasonal demands and business peaks",
                color: "bg-orange-400"
              },
              {
                icon: Target,
                title: "Cost-Effective",
                description: "Save on recruitment costs and long-term commitments with our temporary staffing solution",
                color: "bg-black"
              },
              {
                icon: Zap,
                title: "AI Job Matching",
                description: "Our smart algorithm matches you with the most qualified and available students instantly",
                color: "bg-orange-400"
              },
              {
                icon: Shield,
                title: "Compliance & Payroll",
                description: "We handle all the paperwork, compliance, and payroll processing for you",
                color: "bg-black"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`${benefit.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`} style={benefit.color === 'bg-orange-400' ? {backgroundColor: '#F6A961'} : {}}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-black mb-3">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-black mb-4">Success Stories</h3>
            <p className="text-xl text-gray-600">See how businesses are thriving with The Gig Search</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-orange-50 to-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-current" style={{color: '#F6A961'}} />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "During our holiday rush, The Gig Search helped us find reliable student workers within hours. Our revenue increased by 35% while maintaining excellent customer service."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4" style={{backgroundColor: '#F6A961'}}>
                  S
                </div>
                <div>
                  <p className="font-semibold text-black">Sarah Chen</p>
                  <p className="text-gray-600">Manager, Urban Coffee Co.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-current" style={{color: '#F6A961'}} />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "The quality of students we get through The Gig Search is outstanding. They're motivated, professional, and many have become part-time regulars at our store."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <p className="font-semibold text-black">Marcus Rodriguez</p>
                  <p className="text-gray-600">Owner, Downtown Books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'faq' ? (
        <div>
          {/* Navigation for FAQ page */}
          <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                  <TGSLogo />
                  <span className="text-xl font-bold text-black">The Gig Search</span>
                </button>

                {/* Back to Home */}
                <button
                  onClick={() => setCurrentPage('home')}
                  className="bg-orange-400 text-black px-6 py-2 rounded-full font-medium hover:bg-orange-300 transition-all duration-200 shadow-lg"
                  style={{backgroundColor: '#F6A961'}}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </nav>
          
          <FAQPage />
          
          {/* Floating Contact Form */}
          <FloatingContactForm />
        </div>
      ) : (
        <>
          {/* Navigation */}
          <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <TGSLogo />
                  <span className="text-xl font-bold text-black">The Gig Search</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <button
                    onClick={() => setActiveTab('workers')}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      activeTab === 'workers'
                        ? 'bg-orange-400 text-black shadow-lg'
                        : 'text-gray-700 hover:text-black hover:bg-gray-100'
                    }`}
                    style={activeTab === 'workers' ? {backgroundColor: '#F6A961'} : {}}
                  >
                    <Users className="inline-block w-4 h-4 mr-2" />
                    For Workers
                  </button>
                  <button
                    onClick={() => setActiveTab('employers')}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      activeTab === 'employers'
                        ? 'bg-orange-400 text-black shadow-lg'
                        : 'text-gray-700 hover:text-black hover:bg-gray-100'
                    }`}
                    style={activeTab === 'employers' ? {backgroundColor: '#F6A961'} : {}}
                  >
                    <Building2 className="inline-block w-4 h-4 mr-2" />
                    For Employers
                  </button>
                  <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg">
                    Sign In
                  </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-700 hover:text-black focus:outline-none"
                  >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              {isMobileMenuOpen && (
                <div className="md:hidden py-4 border-t border-gray-200">
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={() => {
                        setActiveTab('workers');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 ${
                        activeTab === 'workers'
                          ? 'bg-orange-400 text-black'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={activeTab === 'workers' ? {backgroundColor: '#F6A961'} : {}}
                    >
                      <Users className="inline-block w-4 h-4 mr-2" />
                      For Workers
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('employers');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 ${
                        activeTab === 'employers'
                          ? 'bg-orange-400 text-black'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={activeTab === 'employers' ? {backgroundColor: '#F6A961'} : {}}
                    >
                      <Building2 className="inline-block w-4 h-4 mr-2" />
                      For Employers
                    </button>
                    <button className="bg-black text-white px-4 py-3 rounded-lg font-medium text-left">
                      Sign In
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Main Content */}
          {activeTab === 'workers' ? <WorkersPage /> : <EmployersPage />}

          {/* Floating Contact Form */}
          <FloatingContactForm />
        </>
      )}
    </div>
  );
}

export default App;