import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    onClick={() => setDarkMode(!darkMode)}
    className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300"
  >
    {darkMode ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-12.34l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.05l-.71-.71M6.34 4.05l-.71-.71" />
        <circle cx="12" cy="12" r="5" fill="currentColor" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    )}
  </button>
);

export default ThemeToggle;
