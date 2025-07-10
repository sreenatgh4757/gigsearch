import React from 'react';

const LaptopMockup: React.FC = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* Laptop Base */}
        <div 
          className="relative"
          style={{
            width: '480px',
            height: '320px',
          }}
        >
          {/* Screen */}
          <div 
            className="relative bg-black rounded-t-2xl p-4 shadow-2xl"
            style={{
              width: '480px',
              height: '300px',
              background: 'linear-gradient(145deg, #1a1a1a, #000000)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Screen Bezel */}
            <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
              {/* Menu Bar */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gray-800/90 backdrop-blur-sm h-6 flex items-center px-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-white text-xs font-medium">YouTube - The Gig Search</div>
                </div>
              </div>

              {/* Video Container */}
              <div className="absolute inset-0 pt-6">
                <iframe
                  src="https://www.youtube.com/embed/xJHy4oxeDfY?si=KjQXvYOSoXTIjXpL&autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0"
                  title="The Gig Search - How It Works for Employers"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Laptop Base/Keyboard */}
          <div 
            className="relative bg-gray-300 rounded-b-2xl shadow-lg"
            style={{
              width: '480px',
              height: '20px',
              background: 'linear-gradient(145deg, #e5e5e5, #d1d1d1)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Trackpad */}
            <div 
              className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-gray-400 rounded-sm"
              style={{
                width: '60px',
                height: '8px',
                background: 'linear-gradient(145deg, #d1d1d1, #b8b8b8)'
              }}
            ></div>
          </div>

          {/* Laptop Stand/Hinge */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-400 rounded-b-lg"
            style={{
              width: '40px',
              height: '8px',
              background: 'linear-gradient(145deg, #d1d1d1, #b8b8b8)'
            }}
          ></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -top-6 -right-6 w-10 h-10 bg-orange-400 rounded-full opacity-20 animate-pulse" style={{backgroundColor: '#F6A961'}}></div>
        <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-orange-400 rounded-full opacity-10 animate-pulse" style={{backgroundColor: '#F6A961', animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 -left-4 w-8 h-8 bg-black rounded-full opacity-15 animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>
    </div>
  );
};

export default LaptopMockup;