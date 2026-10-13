import React, { useState } from 'react';
import { PageId } from '../types';
import { NavigationButtons } from './NavigationButtons';
import { QUIZ_QUESTIONS } from '../data/learningData';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Award, 
  Sparkles,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface PageQuizProps {
  onNavigate: (page: PageId) => void;
}

export const PageQuiz: React.FC<PageQuizProps> = ({ onNavigate }) => {
  // Store student answers for each question: { [questionId]: 'A' | 'B' | 'C' | 'D' }
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: 'A' | 'B' | 'C' | 'D' }>({});
  // Track whether answer has been checked
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  // Track hint open states
  const [openHints, setOpenHints] = useState<{ [key: number]: boolean }>({});

  const handleSelectOption = (questionId: number, optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return; // locked once checked until reset
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const toggleHint = (questionId: number) => {
    setOpenHints((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setOpenHints({});
  };

  // Calculate score
  const totalQuestions = QUIZ_QUESTIONS.length;
  const correctCount = QUIZ_QUESTIONS.filter(
    (q) => selectedAnswers[q.id] === q.correctAnswer
  ).length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  const allAnswered = QUIZ_QUESTIONS.every((q) => selectedAnswers[q.id]);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="pb-2 border-b border-slate-800">
        <div className="text-xs font-semibold text-amber-400 tracking-wider">
          HALAMAN 5 DARI 5 · EVALUASI & UJI PEMAHAMAN
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-1">
          Kuis Pintar Gerhana Bulan
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Uji pemahamanmu tentang materi gerhana bulan melalui 3 soal pilihan ganda berikut ini.
        </p>
      </div>

      {/* Score Summary Banner if Submitted */}
      {isSubmitted && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/40 shadow-xl space-y-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-400/20 text-amber-400 mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {scorePercent === 100
                ? 'Luar Biasa! Nilai Sempurna! 🌟'
                : scorePercent >= 66
                ? 'Bagus Sekali! Kamu Sudah Paham! 👍'
                : 'Tetap Semangat! Ayo Pelajari Lagi! 💪'}
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Kamu berhasil menjawab benar <span className="font-bold text-amber-400">{correctCount}</span> dari <span className="font-bold text-slate-200">{totalQuestions}</span> soal.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="text-3xl font-black text-amber-400 font-mono">
              Nilai: {scorePercent} / 100
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleResetQuiz}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>Ulangi Kuis</span>
            </button>
            <button
              onClick={() => onNavigate('beranda')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-md shadow-amber-400/20"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ulas Kembali Materi Beranda</span>
            </button>
          </div>
        </div>
      )}

      {/* Quiz Questions List */}
      <div className="space-y-6">
        {QUIZ_QUESTIONS.map((q, index) => {
          const userAnswer = selectedAnswers[q.id];
          const isCorrect = isSubmitted && userAnswer === q.correctAnswer;
          const isWrong = isSubmitted && userAnswer && userAnswer !== q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`rounded-3xl border p-6 sm:p-8 transition-all ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-500/50 bg-slate-900/80 ring-1 ring-emerald-500/20'
                    : 'border-rose-500/50 bg-slate-900/80 ring-1 ring-rose-500/20'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950">
                    Soal Nomor {index + 1}
                  </span>
                  <span className="text-xs text-slate-400">Pilihan Ganda</span>
                </div>

                {/* Hint Toggle */}
                {!isSubmitted && (
                  <button
                    onClick={() => toggleHint(q.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors cursor-pointer font-medium"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{openHints[q.id] ? 'Tutup Petunjuk' : 'Lihat Petunjuk'}</span>
                  </button>
                )}
              </div>

              {/* Hint Box */}
              {openHints[q.id] && !isSubmitted && (
                <div className="mb-4 p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Petunjuk untukmu: </strong>
                    <span>{q.hint}</span>
                  </div>
                </div>
              )}

              {/* Question Text */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-5 leading-snug">
                {q.question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {q.options.map((opt) => {
                  const isOptSelected = userAnswer === opt.key;
                  const isCorrectOpt = isSubmitted && opt.key === q.correctAnswer;
                  const isWrongOpt = isSubmitted && isOptSelected && opt.key !== q.correctAnswer;

                  let optStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900';

                  if (isSubmitted) {
                    if (isCorrectOpt) {
                      optStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-100 font-semibold shadow-sm';
                    } else if (isWrongOpt) {
                      optStyle = 'bg-rose-950/60 border-rose-500 text-rose-200 line-through';
                    } else {
                      optStyle = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60';
                    }
                  } else if (isOptSelected) {
                    optStyle = 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold ring-1 ring-amber-400/40';
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(q.id, opt.key)}
                      disabled={isSubmitted}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between gap-3 text-xs sm:text-sm cursor-pointer ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isOptSelected && !isSubmitted
                            ? 'bg-amber-400 text-slate-950'
                            : isSubmitted && isCorrectOpt
                            ? 'bg-emerald-500 text-slate-950'
                            : isSubmitted && isWrongOpt
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {opt.key}
                        </span>
                        <span>{opt.text}</span>
                      </div>

                      {/* Status Glyphs */}
                      {isSubmitted && isCorrectOpt && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                      {isSubmitted && isWrongOpt && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation (Pembahasan) Box */}
              {isSubmitted && (
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Jawaban Kamu Benar! (Kunci: {q.correctAnswer})
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Jawaban Kurang Tepat. Kunci Jawaban: {q.correctAnswer}
                      </span>
                    )}
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-amber-300">Pembahasan: </strong>
                    <span>{q.explanation}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Submit Button */}
      {!isSubmitted && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            {allAnswered ? (
              <span className="text-emerald-400 font-medium">
                ✓ Semua {totalQuestions} soal sudah kamu jawab! Klik tombol di samping untuk memeriksa jawabanmu.
              </span>
            ) : (
              <span>
                Pilihlah salah satu jawaban (A, B, C, atau D) untuk setiap soal di atas.
              </span>
            )}
          </div>

          <button
            onClick={handleSubmitQuiz}
            disabled={!allAnswered}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer whitespace-nowrap shadow-lg ${
              allAnswered
                ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-400/20'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-60'
            }`}
          >
            Periksa Jawaban & Lihat Nilai
          </button>
        </div>
      )}

      {/* Navigation */}
      <NavigationButtons currentPage="kuis" onNavigate={onNavigate} />
    </div>
  );
};
