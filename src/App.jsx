import React, { useState, useEffect } from 'react';
import { quotes } from './data/quotes';
import QuoteCard from './components/QuoteCard';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const ITEMS_PER_PAGE = 6;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const totalPages = Math.ceil(quotes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentQuotes = quotes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage(page);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Header />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 flex flex-col items-center px-2 md:px-8 py-6">
        {loading ? (
          <div className="flex items-center justify-center w-full h-40">
            <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-500"></span>
            <span className="ml-4 text-purple-700 dark:text-purple-300 font-semibold">Loading...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 w-full justify-center">
            {currentQuotes.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>
        )}
        {/* Pagination controls */}
        <div className="flex justify-center flex-wrap gap-2 text-sm mb-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className="px-3 py-1 rounded bg-purple-200 dark:bg-gray-700 text-purple-800 dark:text-white hover:bg-purple-300 dark:hover:bg-gray-600 disabled:opacity-50 transition-colors flex items-center"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {(() => {
            let start = Math.max(1, currentPage - 2);
            let end = Math.min(totalPages, start + 4);
            if (end - start < 4) start = Math.max(1, end - 4);
            return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                disabled={loading}
                className={`px-3 py-1 rounded font-semibold transition-colors ${
                  currentPage === pageNum
                    ? 'bg-purple-600 dark:bg-indigo-700 text-white shadow-md'
                    : 'bg-purple-100 dark:bg-gray-700 text-purple-800 dark:text-white hover:bg-purple-300 dark:hover:bg-gray-600'
                }`}
              >
                {pageNum}
              </button>
            ));
          })()}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
            className="px-3 py-1 rounded bg-purple-200 dark:bg-gray-700 text-purple-800 dark:text-white hover:bg-purple-300 dark:hover:bg-gray-600 disabled:opacity-50 transition-colors flex items-center"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
