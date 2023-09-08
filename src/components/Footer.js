import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-6  bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <img src="./logo.png" alt="Netflix Logo" className="h-12 mr-4" />
            <p className="text-gray-400 text-sm">© 2023 Netflix, Inc.</p>
          </div>
          <div className="flex items-center">
            <a href=".." className="text-gray-400 hover:text-white text-sm mr-4">Privacy</a>
            <a href="." className="text-gray-400 hover:text-white text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
