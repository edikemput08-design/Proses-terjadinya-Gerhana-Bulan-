import React from 'react';
import { PageId } from '../types';
import { PAGES } from '../data/learningData';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line */}
        <button
          onClick={() => onNavigate('beranda')}
          className="text-left flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <span>Gerhana Bulan SD VI</span>
        </button>

        {/* Zone 2: 5 clean nav links, 1-2 words, single line */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {PAGES.map((page) => {
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => onNavigate(page.id)}
                className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 text-xs lg:text-sm ${
                  isActive
                    ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {page.shortLabel}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('kuis')}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-amber-400/20 cursor-pointer"
          >
            Mulai Kuis Pintar
          </button>
        </div>
      </div>

      {/* Mobile navigation bar */}
      <div className="md:hidden flex items-center gap-2 overflow-x-auto pt-3 pb-1 border-t border-slate-800/50 mt-3 no-scrollbar">
        {PAGES.map((page) => {
          const isActive = currentPage === page.id;
          return (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {page.shortLabel}
            </button>
          );
        })}
      </div>
    </header>
  );
};
