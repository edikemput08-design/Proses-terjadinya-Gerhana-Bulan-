import React, { useState } from 'react';
import { PageId } from '../types';
import { NavigationButtons } from './NavigationButtons';
import { EXPLANATION_SECTIONS } from '../data/learningData';
import { 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  BookmarkCheck,
  HelpCircle
} from 'lucide-react';

interface PageExplanationTextProps {
  onNavigate: (page: PageId) => void;
}

export const PageExplanationText: React.FC<PageExplanationTextProps> = ({ onNavigate }) => {
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Text to speech helper
  const handleToggleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert('Browser Anda belum mendukung fitur suara bacaan (Text-to-Speech).');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Assemble text to speak
    const fullText = EXPLANATION_SECTIONS.map(
      (sec) => `${sec.title}. ${sec.paragraphs.join(' ')}`
    ).join(' ');

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="pb-2 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-amber-400 tracking-wider">
            HALAMAN 4 DARI 5 · BAHASA INDONESIA TEMATIK KELAS VI SD
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-1">
            Contoh Teks Eksplanasi: Gerhana Bulan
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Teks eksplanasi ilmiah yang tersusun dari 3 struktur utama: Pernyataan Umum, Deretan Penjelas, dan Penutup.
          </p>
        </div>

        {/* Audio Narration Button */}
        <div className="self-start">
          <button
            onClick={handleToggleSpeak}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              isSpeaking
                ? 'bg-rose-500 border-rose-400 text-white animate-pulse'
                : 'bg-slate-900 border-slate-700/80 hover:border-amber-400/50 text-amber-300 hover:bg-slate-800'
            }`}
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span>Hentikan Suara Bacaan</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                <span>Dengarkan Bacaan (Suara)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info Banner: Apa itu Teks Eksplanasi untuk Siswa Kelas VI? */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
          <BookOpen className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 text-xs sm:text-sm">
          <h3 className="font-bold text-amber-300">
            Materi Pelajaran Bahasa Indonesia: Mengenal Teks Eksplanasi
          </h3>
          <p className="text-slate-300 leading-relaxed">
            <strong>Teks Eksplanasi</strong> adalah teks yang berisi penjelasan tentang <em>"mengapa"</em> dan <em>"bagaimana"</em> suatu peristiwa alam atau sosial dapat terjadi. Strukturnya selalu terdiri dari 3 bagian berurutan:
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1 font-semibold text-xs">
            <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
              1. Pernyataan Umum
            </span>
            <span className="text-slate-500">➔</span>
            <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
              2. Deretan Penjelas
            </span>
            <span className="text-slate-500">➔</span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              3. Penutup (Interpretasi)
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Highlight Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-400 font-medium whitespace-nowrap">Sorot Bagian:</span>
        <button
          onClick={() => setHighlightedSection(null)}
          className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
            highlightedSection === null
              ? 'bg-white text-slate-950 font-bold border-white'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
          }`}
        >
          Tampilkan Semua
        </button>
        {EXPLANATION_SECTIONS.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setHighlightedSection(sec.id)}
            className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
              highlightedSection === sec.id
                ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {/* Main Text Content: 3 Structured Cards */}
      <div className="space-y-6">
        {EXPLANATION_SECTIONS.map((section) => {
          const isHighlighted = highlightedSection === section.id;
          const isFaded = highlightedSection !== null && !isHighlighted;

          return (
            <div
              key={section.id}
              className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                isHighlighted
                  ? 'border-amber-400 bg-slate-900/90 shadow-xl shadow-amber-400/5 ring-1 ring-amber-400/30'
                  : isFaded
                  ? 'opacity-40 border-slate-800 bg-slate-950'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              {/* Card Header & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                    section.id === 'pernyataan-umum'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : section.id === 'deretan-penjelas'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {section.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {section.title}
                  </h2>
                </div>

                <div className="text-xs text-slate-400 italic">
                  {section.roleDescription}
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="indent-6 sm:indent-8 text-justify sm:text-left">
                    {p}
                  </p>
                ))}
              </div>

              {/* Key takeaways bullet box */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 bg-slate-950/50 p-4 rounded-xl">
                <div className="text-xs font-bold text-slate-400 mb-2 flex items-center gap-1.5">
                  <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Unsur yang termuat dalam bagian ini:</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                  {section.keyPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vocabulary box for Grade 6 SD */}
      <div className="rounded-2xl p-6 bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Kamus Kata Ilmiah Teks Eksplanasi (Kosakata IPA Kelas VI)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-bold text-amber-400 block mb-1">Revolusi Bulan</span>
            <p className="text-slate-400">Gerakan perputaran Bulan mengelilingi planet Bumi.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-bold text-rose-400 block mb-1">Umbra</span>
            <p className="text-slate-400">Daerah bayangan inti yang paling pekat dan gelap.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-bold text-sky-400 block mb-1">Penumbra</span>
            <p className="text-slate-400">Daerah bayangan kabur di sekeliling bayangan umbra.</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-bold text-emerald-400 block mb-1">Blood Moon</span>
            <p className="text-slate-400">Pendaran warna merah tembaga Bulan akibat pembiasan atmosfer.</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NavigationButtons currentPage="teks-eksplanasi" onNavigate={onNavigate} />
    </div>
  );
};
