import React from 'react';

const Footer = () => (
  <footer className="w-full py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-center text-white text-xs md:text-sm mt-10 shadow-inner">
    &copy; {new Date().getFullYear()} Quotes Education. Dibuat dengan ❤️ untuk edukasi.
  </footer>
);

export default Footer;
