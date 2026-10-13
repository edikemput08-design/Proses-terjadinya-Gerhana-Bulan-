import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageId } from '../types';
import { PAGES } from '../data/learningData';

interface NavigationButtonsProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentPage,
  onNavigate,
}) => {
  const currentIndex = PAGES.findIndex((p) => p.id === currentPage);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Previous button */}
      <div>
        {prevPage ? (
          <button
            onClick={() => onNavigate(prevPage.id)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-amber-400/50 hover:bg-slate-800 text-slate-200 text-sm font-medium transition-all group cursor-pointer whitespace-nowrap"
          >
            <ChevronLeft className="w-4 h-4 text-amber-400 transition-transform group-hover:-translate-x-0.5" />
            <span>Halaman Sebelumnya ({prevPage.stepNumber}. {prevPage.title.split(' ')[0]})</span>
          </button>
        ) : (
          <div className="text-xs text-slate-500 font-medium">Halaman Awal Modul</div>
        )}
      </div>

      {/* Progress pill indicator */}
      <div className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>Halaman</span>
        <span className="font-semibold text-amber-400 tabular-nums">{currentIndex + 1}</span>
        <span>dari</span>
        <span className="font-semibold text-slate-300 tabular-nums">{PAGES.length}</span>
        <span className="mx-2 text-slate-700">·</span>
        <span className="text-slate-400 hidden md:inline">{PAGES[currentIndex].title}</span>
      </div>

      {/* Next button */}
      <div>
        {nextPage ? (
          <button
            onClick={() => onNavigate(nextPage.id)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-500/20 transition-all group cursor-pointer whitespace-nowrap"
          >
            <span>Halaman Selanjutnya ({nextPage.stepNumber}. {nextPage.title.split(' ')[0]})</span>
            <ChevronRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-0.5" />
          </button>
        ) : (
          <button
            onClick={() => onNavigate('beranda')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-sm font-semibold transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Kembali ke Beranda</span>
          </button>
        )}
      </div>
    </div>
  );
};
