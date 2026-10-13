export type PageId = 'beranda' | 'simulasi' | 'urutan' | 'teks-eksplanasi' | 'kuis';

export interface PageInfo {
  id: PageId;
  title: string;
  shortLabel: string;
  description: string;
  iconName: string;
  stepNumber: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  hint: string;
}

export interface ExplanationTextSection {
  id: 'pernyataan-umum' | 'deretan-penjelas' | 'penutup';
  title: string;
  badge: string;
  roleDescription: string;
  paragraphs: string[];
  keyPoints: string[];
}
