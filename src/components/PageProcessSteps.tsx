import React, { useState } from 'react';
import { PageId } from '../types';
import { NavigationButtons } from './NavigationButtons';
import { PROCESS_STEPS } from '../data/learningData';
import { 
  ChevronRight, 
  ChevronLeft, 
  Clock, 
  Sparkles, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface PageProcessStepsProps {
  onNavigate: (page: PageId) => void;
}

export const PageProcessSteps: React.FC<PageProcessStepsProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStepData = PROCESS_STEPS.find((s) => s.step === activeStep) || PROCESS_STEPS[0];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="pb-2 border-b border-slate-800">
        <div className="text-xs font-semibold text-amber-400 tracking-wider">
          HALAMAN 3 DARI 5 · PROSES KRONOLOGIS
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-1">
          Urutan Proses Terjadinya Gerhana Bulan
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Pelajari 5 langkah urutan kejadian mulai dari fase bulan purnama hingga puncak gerhana total.
        </p>
      </div>

      {/* Step Selector Horizontal Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
        {PROCESS_STEPS.map((stepItem) => {
          const isSelected = activeStep === stepItem.step;
          return (
            <button
              key={stepItem.step}
              onClick={() => setActiveStep(stepItem.step)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-lg shadow-amber-400/20'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                  isSelected ? 'bg-slate-950 text-amber-300' : 'bg-slate-800 text-slate-400'
                }`}>
                  Tahap {stepItem.step}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold line-clamp-2">
                {stepItem.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Feature Box */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-10 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                Langkah {currentStepData.step} dari 5
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-xs text-slate-400">{currentStepData.subtitle}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {currentStepData.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {currentStepData.desc}
            </p>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30 text-sm text-amber-200 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>Poin Penting untuk Siswa: </strong>
                <span>{currentStepData.highlight}</span>
              </div>
            </div>
          </div>

          {/* Stepper Navigation Controls */}
          <div className="flex lg:flex-col items-center gap-3 w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800">
            <button
              onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
              disabled={activeStep === 1}
              className={`w-full lg:w-44 py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeStep === 1
                  ? 'opacity-40 border-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Tahap Sebelumnya</span>
            </button>

            <button
              onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
              disabled={activeStep === 5}
              className={`w-full lg:w-44 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeStep === 5
                  ? 'opacity-40 bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-400/20'
              }`}
            >
              <span>Tahap Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Rangkuman 5 Langkah Berurutan (Timeline View) */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white font-display">
          Rangkuman Runtut Alur Terjadinya Gerhana Bulan
        </h3>

        <div className="space-y-4">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              onClick={() => setActiveStep(stepItem.step)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                activeStep === stepItem.step
                  ? 'bg-slate-950 border-amber-400/60'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                activeStep === stepItem.step
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-slate-800 text-slate-400'
              }`}>
                {stepItem.step}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {stepItem.title}
                  </h4>
                  <span className="text-xs text-slate-500 hidden sm:inline">· {stepItem.subtitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Durasi & Mengapa Aman */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
          <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300">
            <strong className="text-white block mb-1">Berapa Lama Gerhana Bulan Berlangsung?</strong>
            Gerhana bulan bisa berlangsung beberapa jam (biasanya 3 hingga 5 jam), dengan fase gerhana total berlangsung sekitar 1 hingga 1,5 jam karena ukuran bayangan Bumi yang jauh lebih besar daripada ukuran Bulan.
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300">
            <strong className="text-white block mb-1">Aman Diamati Bersama Teman & Guru</strong>
            Kamu tidak perlu takut menatap gerhana bulan. Cahayanya tidak membahayakan kornea mata dan tidak memerlukan alat khusus, sehingga sangat mengasyikkan untuk diamati dari halaman sekolah atau rumah!
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NavigationButtons currentPage="urutan" onNavigate={onNavigate} />
    </div>
  );
};
