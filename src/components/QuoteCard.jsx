import React from 'react';

const QuoteCard = ({ quote }) => {
  return (
    <div className="bg-white/60 backdrop-blur-md shadow-lg border border-white/20 rounded-2xl px-6 py-5 m-3 w-full max-w-md mx-auto transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl">
      <p className="text-gray-800 text-base md:text-lg font-medium italic leading-relaxed">
        “{quote.text}”
      </p>
    </div>
  );
};

export default QuoteCard;
