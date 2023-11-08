/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function FooterComponent() {
  const tyre = require("../../../../public/images/tyre-bgno.png").default.src;
  const tyreReverse = require("../../../../public/images/tyre-bgno_reverse.png").default.src;

  const isMobile = window.innerWidth <= 640;

  const rightFooterStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-15px",
    right: isMobile ? "-15px" : "-90px",
    zIndex: "1", 
  };

  const leftFooterStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-15px",
    left: isMobile ? "-15px" : "-90px",
    zIndex: "1", 
  };
  return (
    <div className='mt-20'>
      <footer className="rounded-lg shadow m-4 relative">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex items-center justify-center mb-10">
            <p className='text-3xl sm:text-4xl'>Tyre</p>
              <p className="font-bold text4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Ai</p>
          </div>
          <img src={tyre} className="h-20 sm:h-64 " alt="footerImg" style={rightFooterStyle} />
          <img src={tyreReverse} className="h-20 sm:h-64" alt="footerImg" style={leftFooterStyle} />
          <span className="flex justify-center block text-sm mb-20 sm:mb-2 text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">tyreai™</a>. All Rights Reserved.</span>
          
        </div>
      </footer>
    </div>
  );
}
