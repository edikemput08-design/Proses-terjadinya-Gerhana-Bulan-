import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { PageOverview } from './components/PageOverview';
import { PageSimulation } from './components/PageSimulation';
import { PageProcessSteps } from './components/PageProcessSteps';
import { PageExplanationText } from './components/PageExplanationText';
import { PageQuiz } from './components/PageQuiz';
import { Sparkles, BookOpen, GraduationCap } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('beranda');

  // Scroll to top when page changes
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Bar Navigation */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {currentPage === 'beranda' && (
          <PageOverview onNavigate={handleNavigate} />
        )}
        {currentPage === 'simulasi' && (
          <PageSimulation onNavigate={handleNavigate} />
        )}
        {currentPage === 'urutan' && (
          <PageProcessSteps onNavigate={handleNavigate} />
        )}
        {currentPage === 'teks-eksplanasi' && (
          <PageExplanationText onNavigate={handleNavigate} />
        )}
        {currentPage === 'kuis' && (
          <PageQuiz onNavigate={handleNavigate} />
        )}
      </main>

      {/* Educational Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/80 px-4 py-8 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400 font-medium">
              Media Pembelajaran Interaktif IPA & Bahasa Indonesia · Siswa Kelas VI SD
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Tema 9: Menjelajah Angkasa Luar</span>
            <span aria-hidden="true">·</span>
            <span>Tata Surya & Fenomena Gerhana</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
