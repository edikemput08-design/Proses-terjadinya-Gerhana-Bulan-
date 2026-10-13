import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { NavigationButtons } from './NavigationButtons';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Info, 
  Sparkles, 
  Layers, 
  CheckCircle,
  Eye
} from 'lucide-react';

interface PageSimulationProps {
  onNavigate: (page: PageId) => void;
}

export const PageSimulation: React.FC<PageSimulationProps> = ({ onNavigate }) => {
  // Slider position from -100 to 100
  // -100: Normal Full Moon before entering
  // -60: Entering Penumbra
  // -25: Entering Umbra (Partial)
  // 0: Total Eclipse (Center of Umbra - Blood Moon)
  // +25: Leaving Umbra (Partial)
  // +60: Leaving Penumbra
  // +100: Normal Full Moon after exiting
  const [moonPos, setMoonPos] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'simulasi' | 'diagram' | 'jenis'>('simulasi');

  // Animation loop
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setMoonPos((prev) => {
          if (prev >= 95) {
            return -95;
          }
          return prev + 1.2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Determine current eclipse status based on moon position
  const getEclipseStatus = () => {
    const absPos = Math.abs(moonPos);
    if (absPos < 18) {
      return {
        type: 'Gerhana Bulan Total (Blood Moon)',
        colorText: 'text-rose-400',
        bgColor: 'bg-rose-500/10 border-rose-500/30',
        description: 'Bulan berada sepenuhnya di dalam bayangan UMBRA Bumi. Seluruh permukaan Bulan tampak memancarkan cahaya merah tembaga yang eksotis!',
        zone: 'Umbra Penuh',
        moonColor: '#b91c1c', // deep blood red
        moonGlow: '#f87171',
        shadowOverlayPercent: 100,
        isBloodMoon: true,
      };
    } else if (absPos < 46) {
      return {
        type: 'Gerhana Bulan Sebagian',
        colorText: 'text-amber-400',
        bgColor: 'bg-amber-500/10 border-amber-500/30',
        description: 'Sebagian permukaan Bulan berada di dalam UMBRA, sedangkan sebagian lainnya masih di PENUMBRA. Bulan tampak seperti terpotong!',
        zone: 'Batas Umbra & Penumbra',
        moonColor: '#78716c',
        moonGlow: '#f59e0b',
        shadowOverlayPercent: Math.round(100 - (absPos - 18) * 3),
        isBloodMoon: false,
      };
    } else if (absPos < 78) {
      return {
        type: 'Gerhana Bulan Penumbra',
        colorText: 'text-sky-400',
        bgColor: 'bg-sky-500/10 border-sky-500/30',
        description: 'Bulan berada di dalam bayangan kabur PENUMBRA Bumi. Bulan tampak hanya sedikit meredup namun bentuknya tetap bulat.',
        zone: 'Penumbra (Samar)',
        moonColor: '#d6d3d1',
        moonGlow: '#94a3b8',
        shadowOverlayPercent: 25,
        isBloodMoon: false,
      };
    } else {
      return {
        type: 'Bulan Purnama Normal (Sebelum/Sesudah Gerhana)',
        colorText: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10 border-emerald-500/30',
        description: 'Bulan berada di luar bayangan Bumi. Sinar Matahari menyinari permukaan Bulan secara penuh, tampak putih kekuningan terang.',
        zone: 'Di Luar Bayangan Bumi',
        moonColor: '#fef08a',
        moonGlow: '#fde047',
        shadowOverlayPercent: 0,
        isBloodMoon: false,
      };
    }
  };

  const status = getEclipseStatus();

  // Calculated SVG coordinates
  // Earth is at (380, 160)
  // Umbra cone extends from Earth (380, 160) to right (760, 160)
  // Moon orbits along a vertical/curved arc on the right of Earth
  // Moon X coordinate: around 640
  // Moon Y coordinate varies with moonPos: center is 160, ranges from 40 to 280
  const moonX = 640;
  const moonY = 160 + (moonPos / 100) * 110;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-800">
        <div>
          <div className="text-xs font-semibold text-amber-400 tracking-wider">
            HALAMAN 2 DARI 5 · MEDIA VISUAL & SIMULASI
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Posisi Matahari, Bumi, dan Bulan
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Amati bagaimana garis lurus ketiga benda langit membentuk bayangan Umbra dan Penumbra.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start">
          <button
            onClick={() => setActiveTab('simulasi')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'simulasi'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Simulasi Interaktif
          </button>
          <button
            onClick={() => setActiveTab('diagram')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'diagram'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Gambar Diagram Lengkap
          </button>
          <button
            onClick={() => setActiveTab('jenis')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'jenis'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            3 Jenis Gerhana
          </button>
        </div>
      </div>

      {/* Main View Area */}
      {activeTab === 'simulasi' && (
        <div className="space-y-6">
          {/* Interactive Simulation Sandbox Canvas */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            {/* Background stars */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400">LAB SIMULASI IPA</span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-300">Geser slider atau tekan Play untuk menggerakkan Bulan</span>
              </div>

              {/* Status Badge */}
              <div className={`px-3 py-1 rounded-lg border text-xs font-semibold flex items-center gap-2 ${status.bgColor} ${status.colorText}`}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                <span>{status.type}</span>
              </div>
            </div>

            {/* SVG Visual Stage */}
            <div className="w-full bg-[#070b14] rounded-2xl border border-slate-800/80 p-2 sm:p-4 overflow-x-auto relative">
              <svg
                viewBox="0 0 800 320"
                className="w-full h-auto min-w-[700px] select-none"
              >
                <defs>
                  {/* Sun Glow */}
                  <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffedd5" />
                    <stop offset="40%" stopColor="#f59e0b" />
                    <stop offset="90%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#b45309" />
                  </radialGradient>

                  {/* Earth Gradient */}
                  <radialGradient id="earthGradient" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="35%" stopColor="#3b82f6" />
                    <stop offset="70%" stopColor="#1d4ed8" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </radialGradient>

                  {/* Penumbra Gradient */}
                  <linearGradient id="penumbraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(30, 41, 59, 0.7)" />
                    <stop offset="100%" stopColor="rgba(15, 23, 42, 0.45)" />
                  </linearGradient>

                  {/* Umbra Dark Gradient */}
                  <linearGradient id="umbraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#020617" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#020617" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* 1. Sunlight Rays from Sun to Earth and Shadows */}
                {/* Sunlight cone upper & lower direct */}
                <polygon
                  points="110,90 380,132 380,188 110,230"
                  fill="rgba(245, 158, 11, 0.08)"
                />

                {/* PENUMBRA Cone (Upper & Lower shadow lobes) */}
                {/* Upper Penumbra Shadow */}
                <polygon
                  points="380,132 780,50 780,125 380,160"
                  fill="url(#penumbraGradient)"
                  stroke="rgba(148, 163, 184, 0.25)"
                  strokeDasharray="4 4"
                />
                {/* Lower Penumbra Shadow */}
                <polygon
                  points="380,188 780,270 780,195 380,160"
                  fill="url(#penumbraGradient)"
                  stroke="rgba(148, 163, 184, 0.25)"
                  strokeDasharray="4 4"
                />

                {/* UMBRA Cone (Center darkest cone) */}
                <polygon
                  points="380,132 780,125 780,195 380,188"
                  fill="url(#umbraGradient)"
                  stroke="rgba(239, 68, 68, 0.3)"
                />

                {/* Center alignment guideline (One Straight Line) */}
                <line
                  x1="110"
                  y1="160"
                  x2="780"
                  y2="160"
                  stroke="rgba(245, 158, 11, 0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />

                {/* Moon Orbit Path (Vertical curve) */}
                <path
                  d="M 640 40 Q 655 160 640 280"
                  fill="none"
                  stroke="rgba(203, 213, 225, 0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />

                {/* Sunlight guide rays from Sun edges passing Earth edges to form Umbra */}
                <line x1="110" y1="80" x2="780" y2="125" stroke="rgba(251, 191, 36, 0.25)" strokeWidth="1" />
                <line x1="110" y1="240" x2="780" y2="195" stroke="rgba(251, 191, 36, 0.25)" strokeWidth="1" />
                <line x1="110" y1="80" x2="780" y2="270" stroke="rgba(251, 191, 36, 0.15)" strokeWidth="1" />
                <line x1="110" y1="240" x2="780" y2="50" stroke="rgba(251, 191, 36, 0.15)" strokeWidth="1" />

                {/* 2. THE SUN (MATAHARI) */}
                <circle cx="110" cy="160" r="65" fill="url(#sunGradient)" />
                <circle cx="110" cy="160" r="75" fill="none" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" strokeDasharray="3 3" />
                
                {/* Sun label */}
                <text x="110" y="165" textAnchor="middle" fill="#0f172a" fontWeight="800" fontSize="14" fontFamily="sans-serif">
                  MATAHARI
                </text>
                <text x="110" y="245" textAnchor="middle" fill="#f59e0b" fontWeight="600" fontSize="11" fontFamily="sans-serif">
                  (Sumber Cahaya)
                </text>

                {/* 3. THE EARTH (BUMI) */}
                {/* Earth Day/Night boundary */}
                <circle cx="380" cy="160" r="30" fill="url(#earthGradient)" stroke="#60a5fa" strokeWidth="1.5" />
                {/* Continents stylized */}
                <path d="M 370 148 Q 380 140 388 152 Q 382 165 375 160 Z" fill="#22c55e" opacity="0.8" />
                <path d="M 382 165 Q 390 170 385 180 Q 375 178 382 165 Z" fill="#22c55e" opacity="0.8" />
                
                {/* Earth label */}
                <text x="380" y="130" textAnchor="middle" fill="#93c5fd" fontWeight="700" fontSize="13" fontFamily="sans-serif">
                  BUMI
                </text>
                <text x="380" y="208" textAnchor="middle" fill="#94a3b8" fontWeight="500" fontSize="11" fontFamily="sans-serif">
                  (Penghalang)
                </text>

                {/* 4. SHADOW LABELS */}
                {/* Umbra Label */}
                <rect x="520" y="146" width="70" height="26" rx="6" fill="#020617" stroke="#ef4444" strokeWidth="1.5" />
                <text x="555" y="163" textAnchor="middle" fill="#fca5a5" fontWeight="700" fontSize="11" fontFamily="sans-serif">
                  UMBRA
                </text>

                {/* Penumbra Upper Label */}
                <rect x="510" y="82" width="90" height="24" rx="6" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
                <text x="555" y="98" textAnchor="middle" fill="#94a3b8" fontWeight="600" fontSize="10" fontFamily="sans-serif">
                  PENUMBRA (Atas)
                </text>

                {/* Penumbra Lower Label */}
                <rect x="510" y="214" width="90" height="24" rx="6" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
                <text x="555" y="230" textAnchor="middle" fill="#94a3b8" fontWeight="600" fontSize="10" fontFamily="sans-serif">
                  PENUMBRA (Bawah)
                </text>

                {/* 5. THE MOON (BULAN) - Interactive & Moving */}
                {/* Moon Glow */}
                <circle
                  cx={moonX}
                  cy={moonY}
                  r="20"
                  fill="none"
                  stroke={status.moonGlow}
                  strokeWidth="2"
                  opacity="0.6"
                />
                {/* Moon Body */}
                <circle
                  cx={moonX}
                  cy={moonY}
                  r="15"
                  fill={status.moonColor}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />

                {/* Moon label */}
                <text
                  x={moonX + 26}
                  y={moonY + 4}
                  fill="#ffffff"
                  fontWeight="700"
                  fontSize="12"
                  fontFamily="sans-serif"
                >
                  BULAN
                </text>
              </svg>
            </div>

            {/* Interactive Control Deck */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              {/* Slider & Play button (8 cols) */}
              <div className="md:col-span-8 space-y-4 bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between">
                  <label htmlFor="orbit-slider" className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <span>Geser Orbit Bulan:</span>
                    <span className="font-mono text-amber-400">
                      {moonPos > 0 ? `+${Math.round(moonPos)}` : Math.round(moonPos)}°
                    </span>
                  </label>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isPlaying
                          ? 'bg-rose-500 hover:bg-rose-400 text-white'
                          : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                      }`}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isPlaying ? 'Jeda' : 'Otomatis'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsPlaying(false);
                        setMoonPos(0);
                      }}
                      title="Reset ke Posisi Gerhana Total"
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* The Slider */}
                <input
                  id="orbit-slider"
                  type="range"
                  min="-95"
                  max="95"
                  step="1"
                  value={moonPos}
                  onChange={(e) => {
                    setIsPlaying(false);
                    setMoonPos(parseFloat(e.target.value));
                  }}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
                />

                {/* Shortcut Presets */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1 text-[11px]">
                  <button
                    onClick={() => { setIsPlaying(false); setMoonPos(-90); }}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  >
                    Bulan Normal
                  </button>
                  <button
                    onClick={() => { setIsPlaying(false); setMoonPos(-60); }}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-sky-300 transition-colors cursor-pointer"
                  >
                    Masuk Penumbra
                  </button>
                  <button
                    onClick={() => { setIsPlaying(false); setMoonPos(-30); }}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 transition-colors cursor-pointer"
                  >
                    Gerhana Sebagian
                  </button>
                  <button
                    onClick={() => { setIsPlaying(false); setMoonPos(0); }}
                    className="px-2.5 py-1 rounded bg-rose-900/40 border border-rose-500/40 text-rose-300 hover:bg-rose-900/60 transition-colors cursor-pointer font-bold"
                  >
                    Gerhana Total (0°)
                  </button>
                  <button
                    onClick={() => { setIsPlaying(false); setMoonPos(90); }}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  >
                    Keluar Bayangan
                  </button>
                </div>
              </div>

              {/* Viewfinder: Penampakan Bulan dari Bumi (4 cols) */}
              <div className="md:col-span-4 bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-between">
                <div className="text-xs font-bold text-slate-400 mb-2 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dilihat Anak dari Bumi:</span>
                </div>

                {/* Mini Moon View Window */}
                <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-slate-700 shadow-inner flex items-center justify-center my-1 relative overflow-hidden">
                  <div
                    className="w-16 h-16 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: status.moonColor,
                      boxShadow: `0 0 20px ${status.moonGlow}`,
                    }}
                  />
                  {/* Partial shadow clip */}
                  {!status.isBloodMoon && status.shadowOverlayPercent > 0 && (
                    <div
                      className="absolute inset-0 bg-slate-950/80 transition-all duration-200"
                      style={{
                        clipPath: `inset(0 0 0 ${100 - status.shadowOverlayPercent}%)`,
                      }}
                    />
                  )}
                </div>

                <div className="mt-2">
                  <div className={`text-xs font-bold ${status.colorText}`}>
                    {status.type}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Zona: {status.zone}
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time status explanation text box */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Keterangan Posisi Saat Ini: </strong>
              {status.description}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Diagram Ilmiah Lengkap (Gambar Permintaan Poin 4) */}
      {activeTab === 'diagram' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-wider">ILUSTRASI UTAMA</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                Gambar Posisi Matahari, Bumi, dan Bulan
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Perhatikan bagaimana Matahari menyinari Bumi dan bayangan panjang yang terbentuk di belakang Bumi.
              </p>
            </div>

            {/* Generated Image Asset */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
              <img
                src="/src/assets/images/lunar_eclipse_space_1791908809149.jpg"
                alt="Gambar Posisi Matahari, Bumi, dan Bulan saat Gerhana Bulan menunjukkan Umbra dan Penumbra"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Keterangan Gambar untuk Siswa SD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="font-bold text-amber-400 mb-1">1. Matahari di Kiri</div>
                <p className="text-slate-300">
                  Bertindak sebagai lampu penerang raksasa. Cahaya merambat lurus ke arah Bumi.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="font-bold text-blue-400 mb-1">2. Bumi di Tengah</div>
                <p className="text-slate-300">
                  Bumi menghalangi cahaya matahari sehingga menciptakan kerucut bayangan gelap ke belakang.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="font-bold text-rose-400 mb-1">3. Bulan di Kanan</div>
                <p className="text-slate-300">
                  Bulan bergerak memasuki bayangan Bumi (Umbra dan Penumbra) sehingga terjadi gerhana.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: 3 Jenis Gerhana Bulan */}
      {activeTab === 'jenis' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-wider">MATERI TAMBAHAN PENTING</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                Tiga Jenis Gerhana Bulan
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Berdasarkan bagian bayangan Bumi yang dilewati Bulan, gerhana bulan dibedakan menjadi 3 jenis.
              </p>
            </div>

            {/* Generated Image Asset 2 */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
              <img
                src="/src/assets/images/phases_lunar_eclipse_1791908834341.jpg"
                alt="Diagram Tiga Jenis Gerhana Bulan: Gerhana Bulan Total, Sebagian, dan Penumbra"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 3 Penjelasan Rinci */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-2">
                <div className="text-xs font-bold text-rose-400">JENIS 1</div>
                <h3 className="text-lg font-bold text-white">Gerhana Bulan Total</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Terjadi jika <strong>seluruh bagian Bulan</strong> masuk ke dalam bayangan <strong>Umbra Bumi</strong>. Bulan akan tampak memancarkan cahaya merah tembaga (Blood Moon).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-900/40 space-y-2">
                <div className="text-xs font-bold text-amber-400">JENIS 2</div>
                <h3 className="text-lg font-bold text-white">Gerhana Bulan Sebagian</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Terjadi jika hanya <strong>sebagian Bulan</strong> yang masuk ke dalam bayangan <strong>Umbra</strong>, sedangkan bagian lainnya masih berada di Penumbra.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-900/40 space-y-2">
                <div className="text-xs font-bold text-sky-400">JENIS 3</div>
                <h3 className="text-lg font-bold text-white">Gerhana Bulan Penumbra</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Terjadi jika seluruh Bulan hanya berada di daerah bayangan <strong>Penumbra Bumi</strong>. Bulan tetap utuh bulat namun sinarnya sedikit meredup.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <NavigationButtons currentPage="simulasi" onNavigate={onNavigate} />
    </div>
  );
};
