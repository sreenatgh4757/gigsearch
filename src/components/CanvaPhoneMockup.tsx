import React from 'react';

const CanvaPhoneMockup: React.FC = () => {
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
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent">
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

            {/* Canva Presentation Container */}
            <div className="absolute inset-0 flex items-center justify-center pt-12 pb-4">
              <div className="w-full h-full relative bg-white rounded-t-[2rem]">
                <iframe
                  src="https://www.canva.com/design/DAGswhHMwSA/jDnZlTr_RT-IPFSjLztCOw/watch?utm_content=DAGswhHMwSA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8476cc52e5&embed"
                  title="The Gig Search Portfolio Presentation"
                  className="absolute inset-0 w-full h-full"
                  style={{
                    borderRadius: '2rem 2rem 2.5rem 2.5rem',
                  }}
                  frameBorder="0"
                  allow="fullscreen"
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

        {/* Floating decorative elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-20 animate-pulse" style={{backgroundColor: '#F6A961'}}></div>
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-400 rounded-full opacity-10 animate-pulse" style={{backgroundColor: '#F6A961', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 -left-8 w-6 h-6 bg-black rounded-full opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

export default CanvaPhoneMockup;