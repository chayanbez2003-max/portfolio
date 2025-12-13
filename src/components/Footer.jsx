import React from "react";

const Footer = () => {
  return (
    <>
      
      <div className="w-full flex justify-center">
        <hr className="w-1/2 border-[2px] border-gray-600" />
      </div>

      <footer className="py-10 px-4 md:px-8 bg-white">
        <div className="text-center space-y-2">
          <p className="text-sm md:text-base">
            © 2025 <span className="font-semibold">chayanbez2003-max</span>. All rights reserved.
          </p>

          <p className="text-xs md:text-sm text-gray-600">
            Designed & Developed by <span className="font-semibold">Chayan Bez</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
