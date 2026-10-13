import React from 'react';
import { PageId } from '../types';
import { NavigationButtons } from './NavigationButtons';
import { 
  Sun, 
  Globe, 
  Moon, 
  Eye, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight,
  Flame
} from 'lucide-react';

interface PageOverviewProps {
  onNavigate: (page: PageId) => void;
}

export const PageOverview: React.FC<PageOverviewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Hero Header Section */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 sm:p-10">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wide">
            <span>MODUL IPA & BAHASA INDONESIA</span>
            <span aria-hidden="true">·</span>
            <span>KELAS VI SEKOLAH DASAR</span>
            <span aria-hidden="true">·</span>
            <span>TEMA 9: MENJELAJAH ANGKASA LUAR</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight font-display">
            Proses Terjadinya <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">Gerhana Bulan</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
            Pernahkah kamu melihat bulan purnama yang tiba-tiba meredup dan berubah warna menjadi merah tembaga di malam hari?
            Itulah peristiwa <strong className="text-amber-300">gerhana bulan</strong>! Mari kita pelajari bagaimana tiga sahabat langit—Matahari, Bumi, dan Bulan—bekerja sama menciptakan peristiwa alam yang luar biasa ini.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('simulasi')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-400/20 cursor-pointer"
            >
              <span>Buka Simulasi & Posisi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('teks-eksplanasi')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Pelajari Teks Eksplanasi</span>
            </button>
            <button
              onClick={() => onNavigate('kuis')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-amber-400 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Uji Pemahaman (Kuis)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bagian Penjelasan Singkat (Sesuai Permintaan Poin 2) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight font-display">
              Apa Itu Gerhana Bulan?
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Penjelasan ringkas dan mudah dipahami siswa kelas VI SD
            </p>
          </div>
        </div>

        {/* 3 Kartu Pokok Konsep */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl p-6 bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">1. Posisi Sejajar Sempurna</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Gerhana bulan terjadi ketika <strong className="text-amber-300">Matahari, Bumi, dan Bulan</strong> berada tepat pada satu garis lurus. Posisi <span className="underline decoration-amber-400 underline-offset-2">Bumi berada di tengah</span> di antara Matahari dan Bulan.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Moon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">2. Terjadi Saat Bulan Purnama</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Gerhana bulan hanya terjadi pada <strong className="text-blue-300">malam hari</strong> saat fase <strong>Bulan Purnama</strong>. Karena bumi menghalangi cahaya matahari, bulan tidak memantulkan cahaya seperti malam purnama biasanya.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">3. Aman Dilihat Langsung</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Berbeda dengan gerhana matahari yang silau dan butuh kacamata filter khusus, gerhana bulan <strong className="text-emerald-300">100% aman disaksikan langsung dengan mata telanjang</strong> tanpa alat pelindung apa pun!
            </p>
          </div>
        </div>

        {/* Kotak Analogi Sederhana untuk Anak SD */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/90 border border-amber-500/30">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-amber-300">
                Analogi Sederhana: Bayangkan Permainan Lampu Senter & Bola!
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Bayangkan kamu menyalakan <strong>lampu senter</strong> (sebagai Matahari), lalu meletakkan sebuah <strong>bola basket</strong> (sebagai Bumi) di depannya. Di dinding belakang bola basket akan terbentuk bayangan gelap. Jika ada <strong>bola tenis</strong> (sebagai Bulan) masuk ke dalam bayangan bola basket itu, maka bola tenis tidak akan terkena cahaya senter.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center gap-2.5">
                  <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Senter</strong> = Matahari (Sumber cahaya)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>Bola Basket</strong> = Bumi (Penghalang)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center gap-2.5">
                  <Moon className="w-4 h-4 text-slate-300 shrink-0" />
                  <span><strong>Bola Tenis</strong> = Bulan (Tertutup bayangan)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mengenal 2 Jenis Bayangan Bumi: Umbra & Penumbra */}
      <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            Mengenal Dua Bayangan Bumi: Umbra dan Penumbra
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Dua istilah penting yang sering keluar pada ujian IPA Kelas VI SD!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Umbra */}
          <div className="rounded-2xl p-5 bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-rose-400 tracking-wider">BAYANGAN INTI PEKAT</span>
                <span className="text-xs text-slate-500 font-mono">Daerah Gelap Total</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Umbra (Bayangan Inti)</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Daerah bayangan di belakang Bumi yang <strong className="text-rose-300">paling gelap dan pekat</strong> karena sama sekali tidak ada cahaya matahari yang bisa menjangkaunya.
              </p>
              <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-900/40 text-xs text-rose-200">
                📌 <strong>Hasilnya:</strong> Jika seluruh Bulan masuk ke dalam umbra, terjadilah <strong>Gerhana Bulan Total</strong>.
              </div>
            </div>
          </div>

          {/* Penumbra */}
          <div className="rounded-2xl p-5 bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-sky-400 tracking-wider">BAYANGAN SAMAR / KABUR</span>
                <span className="text-xs text-slate-500 font-mono">Daerah Remang-remang</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Penumbra (Bayangan Tambahan)</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Daerah bayangan yang berada di sekeliling umbra yang <strong className="text-sky-300">agak terang atau kabur</strong> karena masih menerima sebagian kecil berkas sinar matahari.
              </p>
              <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-900/40 text-xs text-sky-200">
                📌 <strong>Hasilnya:</strong> Jika Bulan berada di penumbra, Bulan hanya tampak sedikit meredup (<strong>Gerhana Penumbra</strong>).
              </div>
            </div>
          </div>
        </div>

        {/* Mengapa Bulan Merah / Blood Moon? */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/40 via-orange-950/30 to-slate-950 border border-red-900/40 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Tahukah Kamu: Mengapa Bulan Jadi Merah Saat Gerhana Total?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Saat terjadi gerhana bulan total, Bulan tidak hilang menjadi hitam, melainkan berwarna merah tembaga yang cantik (dijuluki <em>Blood Moon</em>). Hal ini terjadi karena <strong>atmosfer Bumi</strong> membelokkan berkas cahaya merah dari Matahari ke arah Bulan, sedangkan warna biru dan lainnya terhambur di udara Bumi.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation to next page */}
      <NavigationButtons currentPage="beranda" onNavigate={onNavigate} />
    </div>
  );
};
