import React from 'react';

const gradients = [
  'bg-gradient-to-br from-indigo-300/60 via-purple-300/40 to-pink-300/30',
  'bg-gradient-to-br from-green-200/60 via-blue-300/40 to-cyan-300/30',
  'bg-gradient-to-br from-yellow-200/60 via-orange-300/40 to-red-300/30',
  'bg-gradient-to-br from-pink-200/60 via-fuchsia-300/40 to-purple-300/30',
  'bg-gradient-to-br from-teal-200/60 via-emerald-300/40 to-lime-300/30',
  'bg-gradient-to-br from-gray-200/60 via-slate-300/40 to-zinc-300/30',
  'bg-gradient-to-br from-blue-200/60 via-indigo-300/40 to-purple-300/30',
];

function getRandomGradient() {
  return gradients[Math.floor(Math.random() * gradients.length)];
}

const QuoteCard = ({ quote }) => {
  const gradientClass = getRandomGradient();
  return (
    <div
      className={`${gradientClass} dark:from-gray-800/60 dark:via-gray-700/40 dark:to-gray-900/30 backdrop-blur-md shadow-xl px-6 py-5 mb-[30px] mx-auto border transition-all duration-700 ease-out hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-1 group flex flex-col items-center animate-cardIn`}
      style={{ width: '400px', minWidth: '220px', maxWidth: '100%', borderRadius: '20px', border: '1px solid #e5e7eb', height: 'auto' }}
    >
      <p className="text-gray-800 dark:text-gray-100 text-base md:text-lg font-medium italic leading-relaxed transition-colors duration-500 text-center mb-2">
        <span className="inline-block group-hover:animate-pulse">“{quote.text}”</span>
      </p>
      {quote.author && (
        <div className="w-full flex justify-center mt-2">
          <span className="text-sm text-purple-700 dark:text-purple-300 font-semibold text-center">— {quote.author}</span>
        </div>
      )}
    </div>
  );
};

export default QuoteCard;
