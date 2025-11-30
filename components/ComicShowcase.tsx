"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ComicStrip {
  id: string;
  title: string;
  images: string[];
  description?: string;
}

interface ComicShowcaseProps {
  comics: ComicStrip[];
}

export default function ComicShowcase({ comics }: ComicShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComic = () => {
    setCurrentIndex((prev) => (prev + 1) % comics.length);
  };

  const prevComic = () => {
    setCurrentIndex((prev) => (prev - 1 + comics.length) % comics.length);
  };

  const currentComic = comics[currentIndex];

  return (
    <>
      <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-purple-600 to-purple-800 text-white p-3">
          <h3 className="text-lg font-bold text-center">Comic Showcase</h3>
        </div>

        {/* Main Content */}
        <div className="pt-16 p-6 h-full flex flex-col">
          {comics.length === 0 ? (
            /* Empty State */
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-full max-w-md aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">
                  <div className="text-6xl mb-4">📖</div>
                  <h4 className="text-lg font-semibold mb-2">Coming Soon!</h4>
                  <p className="text-sm">Comic strips will appear here once published</p>
                </div>
              </div>
            </div>
          ) : (
            /* Comic Display */
            <>
              <div className="flex-1 flex flex-col items-center justify-center min-h-0">
                <Link href="https://jeffreythemonster.com/comics" target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center">
                  <div
                    className="relative w-full max-w-md h-full bg-white dark:bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                  >
                    <Image
                      src={currentComic.images[0]}
                      alt={currentComic.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    {/* Overlay info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h4 className="text-white font-semibold text-sm">{currentComic.title}</h4>
                      {currentComic.description && (
                        <p className="text-white/90 text-xs mt-1">{currentComic.description}</p>
                      )}
                      <p className="text-white/90 text-xs mt-2 font-semibold">Click to read on jeffreythemonster.com →</p>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prevComic}
              className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
              disabled={comics.length <= 1}
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            {/* Comic indicator */}
            <div className="flex items-center gap-2">
              {comics.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-purple-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextComic}
              className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
              disabled={comics.length <= 1}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Comic counter */}
          <div className="text-center mt-2">
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Comic {currentIndex + 1} of {comics.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
