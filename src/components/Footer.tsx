import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Youtube, 
  Linkedin,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const TGSLogo = () => (
    <svg width="32" height="35" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.312 2.196C6.44 2.18 6.552 2.216 6.648 2.304C6.744 2.384 6.792 2.492 6.792 2.628C6.792 2.756 6.744 2.868 6.648 2.964C6.552 3.052 6.44 3.088 6.312 3.072C6.232 3.056 6.148 3.044 6.06 3.036C5.98 3.028 5.896 3.02 5.808 3.012H5.784C5.728 3.012 5.7 3.044 5.7 3.108V8.076C5.7 8.412 5.644 8.772 5.532 9.156C5.42 9.548 5.248 9.916 5.016 10.26C4.784 10.604 4.484 10.884 4.116 11.1C3.756 11.324 3.32 11.436 2.808 11.436C2.344 11.436 1.948 11.36 1.62 11.208C1.292 11.056 1.02 10.848 0.804 10.584C0.676 10.432 0.58 10.272 0.516 10.104C0.46 9.936 0.432 9.776 0.432 9.624C0.432 9.392 0.496 9.192 0.624 9.024C0.752 8.864 0.936 8.784 1.176 8.784C1.408 8.784 1.588 8.86 1.716 9.012C1.852 9.172 1.92 9.348 1.92 9.54C1.92 9.756 1.836 9.936 1.668 10.08C1.612 10.136 1.6 10.184 1.632 10.224C1.728 10.36 1.868 10.464 2.052 10.536C2.236 10.608 2.488 10.644 2.808 10.644C3.152 10.644 3.448 10.568 3.696 10.416C3.952 10.264 4.16 10.06 4.32 9.804C4.48 9.556 4.6 9.28 4.68 8.976C4.76 8.672 4.8 8.372 4.8 8.076V7.788C4.8 7.74 4.788 7.712 4.764 7.704C4.74 7.688 4.708 7.696 4.668 7.728C4.452 7.944 4.204 8.116 3.924 8.244C3.652 8.372 3.352 8.436 3.024 8.436C2.52 8.436 2.076 8.344 1.692 8.16C1.316 7.976 1 7.736 0.744 7.44C0.496 7.136 0.308 6.8 0.18 6.432C0.06 6.056 0 5.684 0 5.316C0 4.956 0.06 4.592 0.18 4.224C0.3 3.856 0.476 3.52 0.708 3.216C0.948 2.904 1.252 2.656 1.62 2.472C1.988 2.288 2.416 2.196 2.904 2.196C3.28 2.196 3.612 2.256 3.9 2.376C4.188 2.496 4.444 2.66 4.668 2.868C4.692 2.892 4.716 2.904 4.74 2.904C4.78 2.904 4.8 2.876 4.8 2.82V2.724C4.8 2.596 4.844 2.488 4.932 2.4C5.02 2.312 5.128 2.268 5.256 2.268H5.7C5.724 2.268 5.78 2.264 5.868 2.256C5.964 2.24 6.056 2.228 6.144 2.22C6.232 2.204 6.288 2.196 6.312 2.196ZM3.012 7.56C3.412 7.56 3.756 7.484 4.044 7.332C4.34 7.18 4.576 6.988 4.752 6.756C4.784 6.716 4.8 6.672 4.8 6.624V3.948C4.8 3.9 4.784 3.856 4.752 3.816C4.528 3.576 4.264 3.388 3.96 3.252C3.656 3.116 3.336 3.048 3 3.048C2.584 3.048 2.22 3.148 1.908 3.348C1.604 3.548 1.364 3.82 1.188 4.164C1.02 4.5 0.936 4.88 0.936 5.304C0.936 5.72 1.024 6.1 1.2 6.444C1.384 6.788 1.632 7.06 1.944 7.26C2.264 7.46 2.62 7.56 3.012 7.56Z" fill="#F7A961"/>
      <path d="M4.488 2.196C4.36 2.18 4.248 2.216 4.152 2.304C4.056 2.384 4.008 2.492 4.008 2.628C4.008 2.756 4.056 2.868 4.152 2.964C4.248 3.052 4.36 3.088 4.488 3.072C4.568 3.056 4.652 3.044 4.74 3.036C4.82 3.028 4.904 3.02 4.992 3.012H5.016C5.072 3.012 5.1 3.044 5.1 3.108V8.076C5.1 8.412 5.156 8.772 5.268 9.156C5.38 9.548 5.552 9.916 5.784 10.26C6.016 10.604 6.316 10.884 6.684 11.1C7.044 11.324 7.48 11.436 7.992 11.436C8.456 11.436 8.852 11.36 9.18 11.208C9.508 11.056 9.78 10.848 9.996 10.584C10.124 10.432 10.22 10.272 10.284 10.104C10.34 9.936 10.368 9.776 10.368 9.624C10.368 9.392 10.304 9.192 10.176 9.024C10.048 8.864 9.864 8.784 9.624 8.784C9.392 8.784 9.212 8.86 9.084 9.012C8.948 9.172 8.88 9.348 8.88 9.54C8.88 9.756 8.964 9.936 9.132 10.08C9.188 10.136 9.2 10.184 9.168 10.224C9.072 10.36 8.932 10.464 8.748 10.536C8.564 10.608 8.312 10.644 7.992 10.644C7.648 10.644 7.352 10.568 7.104 10.416C6.848 10.264 6.64 10.06 6.48 9.804C6.32 9.556 6.2 9.28 6.12 8.976C6.04 8.672 6 8.372 6 8.076V7.788C6 7.74 6.012 7.712 6.036 7.704C6.06 7.688 6.092 7.696 6.132 7.728C6.348 7.944 6.596 8.116 6.876 8.244C7.148 8.372 7.448 8.436 7.776 8.436C8.28 8.436 8.724 8.344 9.108 8.16C9.484 7.976 9.8 7.736 10.056 7.44C10.304 7.136 10.492 6.8 10.62 6.432C10.74 6.056 10.8 5.684 10.8 5.316C10.8 4.956 10.74 4.592 10.62 4.224C10.5 3.856 10.324 3.52 10.092 3.216C9.852 2.904 9.548 2.656 9.18 2.472C8.812 2.288 8.384 2.196 7.896 2.196C7.52 2.196 7.188 2.256 6.9 2.376C6.612 2.496 6.356 2.66 6.132 2.868C6.108 2.892 6.084 2.904 6.06 2.904C6.02 2.904 6 2.876 6 2.82V2.724C6 2.596 5.956 2.488 5.868 2.4C5.78 2.312 5.672 2.268 5.544 2.268H5.1C5.076 2.268 5.02 2.264 4.932 2.256C4.836 2.24 4.744 2.228 4.656 2.22C4.568 2.204 4.512 2.196 4.488 2.196ZM7.788 7.56C7.388 7.56 7.044 7.484 6.756 7.332C6.46 7.18 6.224 6.988 6.048 6.756C6.016 6.716 6 6.672 6 6.624V3.948C6 3.9 6.016 3.856 6.048 3.816C6.272 3.576 6.536 3.388 6.84 3.252C7.144 3.116 7.464 3.048 7.8 3.048C8.216 3.048 8.58 3.148 8.892 3.348C9.196 3.548 9.436 3.82 9.612 4.164C9.78 4.5 9.864 4.88 9.864 5.304C9.864 5.72 9.776 6.1 9.6 6.444C9.416 6.788 9.168 7.06 8.856 7.26C8.536 7.46 8.18 7.56 7.788 7.56Z" fill="#F7A961"/>
      <path d="M5.348 1.608C5.124 1.608 4.932 1.528 4.772 1.368C4.62 1.216 4.544 1.028 4.544 0.804C4.544 0.58 4.62 0.392 4.772 0.24C4.932 0.0799997 5.124 0 5.348 0C5.572 0 5.76 0.0799997 5.912 0.24C6.072 0.392 6.152 0.58 6.152 0.804C6.152 1.028 6.072 1.216 5.912 1.368C5.76 1.528 5.572 1.608 5.348 1.608Z" fill="#F7A961"/>
    </svg>
  );

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <TGSLogo />
              <span className="text-2xl font-bold">The Gig Search</span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Connecting university students with flexible work opportunities. 
              Build your career while earning money on your own schedule.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-orange-400 mb-4" style={{color: '#F6A961'}}>
                Contact Information
              </h4>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" style={{color: '#F6A961'}} />
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    123 Innovation Street<br />
                    Tech Quarter, London<br />
                    SW1A 1AA, United Kingdom
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" style={{color: '#F6A961'}} />
                <a 
                  href="tel:+442071234567" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +44 (0) 20 7123 4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" style={{color: '#F6A961'}} />
                <a 
                  href="mailto:info@thegigsearch.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@thegigsearch.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-orange-400 mb-6" style={{color: '#F6A961'}}>
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  Terms and Conditions
                  <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <button 
                  onClick={() => {
                    // This would trigger the FAQ page navigation
                    const event = new CustomEvent('navigate-to-faq');
                    window.dispatchEvent(event);
                  }}
                  className="text-gray-300 hover:text-white transition-colors flex items-center group text-left"
                >
                  FAQs
                  <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  Privacy Policy
                  <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-orange-400 mb-6" style={{color: '#F6A961'}}>
              Follow Us
            </h4>
            <div className="space-y-4">
              <a 
                href="https://instagram.com/thegigsearch" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-400 transition-colors" style={{'--hover-bg': '#F6A961'} as React.CSSProperties}>
                  <Instagram className="h-5 w-5" />
                </div>
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://youtube.com/@thegigsearch" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-400 transition-colors" style={{'--hover-bg': '#F6A961'} as React.CSSProperties}>
                  <Youtube className="h-5 w-5" />
                </div>
                <span>YouTube</span>
              </a>
              
              <a 
                href="https://linkedin.com/company/thegigsearch" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-400 transition-colors" style={{'--hover-bg': '#F6A961'} as React.CSSProperties}>
                  <Linkedin className="h-5 w-5" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 The Gig Search. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for university students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;