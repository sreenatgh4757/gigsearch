import React from 'react';

const VideoPhoneMockup: React.FC = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* iPhone Frame */}
        <div 
          className="relative bg-black rounded-[3rem] p-2 shadow-2xl"
          style={{
            width: '280px',
            height: '580px',
            background: 'linear-gradient(145deg, #1a1a1a, #000000)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Screen */}
          <div 
            className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black"
          >
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-black/20 backdrop-blur-sm">
              <div className="flex justify-between items-center px-6 pt-4 pb-2">
                <div className="text-white font-semibold text-sm">
                  9:41
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                  </div>
                  <div className="ml-1 text-white text-xs">100%</div>
                  <div className="w-6 h-3 border border-white rounded-sm">
                    <div className="w-full h-full bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                <iframe
                  src="https://www.youtube.com/embed/63Z_fnViJaA?si=6vWuxkrbWMyVxzQT&autoplay=1&mute=1&loop=1&playlist=63Z_fnViJaA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                  title="The Gig Search App Demo"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    borderRadius: '2.5rem',
                  }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-32 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-20 animate-pulse" style={{backgroundColor: '#F6A961'}}></div>
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-400 rounded-full opacity-10 animate-pulse" style={{backgroundColor: '#F6A961', animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default VideoPhoneMockup;