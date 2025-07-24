import React, { useState } from 'react'
import { quotes } from './data/quotes'
import QuoteCard from './components/QuoteCard'

const ITEMS_PER_PAGE = 10

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(quotes.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentQuotes = quotes.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' }) // Optional: Scroll to top
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-4">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-6 text-purple-800">
        Kata Bijak Pendidikan
      </h1>

      <div className="flex flex-col items-center space-y-4 mb-6">
        {currentQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center flex-wrap gap-2 text-sm">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-purple-200 text-purple-800 hover:bg-purple-300 disabled:opacity-50"
        >
          Sebelumnya
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 text-purple-800 hover:bg-purple-300'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-purple-200 text-purple-800 hover:bg-purple-300 disabled:opacity-50"
        >
          Berikutnya
        </button>
      </div>
    </div>
  )
}

export default App
