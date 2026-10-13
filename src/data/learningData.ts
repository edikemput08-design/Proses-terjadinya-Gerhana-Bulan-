import { PageInfo, QuizQuestion, ExplanationTextSection } from '../types';

export const PAGES: PageInfo[] = [
  {
    id: 'beranda',
    title: 'Pengenalan Gerhana Bulan',
    shortLabel: '1. Pengenalan',
    description: 'Pengertian dasar dan fakta penting gerhana bulan',
    iconName: 'Sparkles',
    stepNumber: 1,
  },
  {
    id: 'simulasi',
    title: 'Posisi Matahari, Bumi & Bulan',
    shortLabel: '2. Gambar & Simulasi',
    description: 'Visualisasi posisi benda langit dan bayangan umbra-penumbra',
    iconName: 'Orbit',
    stepNumber: 2,
  },
  {
    id: 'urutan',
    title: 'Urutan Proses Terjadinya',
    shortLabel: '3. Urutan Proses',
    description: 'Tahapan kronologis dari awal hingga selesai',
    iconName: 'ListOrdered',
    stepNumber: 3,
  },
  {
    id: 'teks-eksplanasi',
    title: 'Teks Eksplanasi Ilmiah',
    shortLabel: '4. Teks Eksplanasi',
    description: 'Struktur teks: Pernyataan Umum, Deretan Penjelas, dan Penutup',
    iconName: 'BookOpen',
    stepNumber: 4,
  },
  {
    id: 'kuis',
    title: 'Kuis Pintar Kelas VI SD',
    shortLabel: '5. Kuis Pintar',
    description: 'Tiga soal uji pemahaman beserta kunci dan pembahasannya',
    iconName: 'CheckCircle2',
    stepNumber: 5,
  },
];

export const EXPLANATION_SECTIONS: ExplanationTextSection[] = [
  {
    id: 'pernyataan-umum',
    title: '1. Pernyataan Umum (Pembuka)',
    badge: 'Struktur Awal',
    roleDescription: 'Berisi pengenalan singkat tentang fenomena gerhana bulan dan latar belakang terjadinya.',
    paragraphs: [
      'Gerhana bulan merupakan salah satu fenomena alam tata surya yang sangat menakjubkan. Peristiwa ini terjadi ketika posisi Matahari, Bumi, dan Bulan berada pada satu garis lurus di ruang angkasa.',
      'Pada saat itu, Bumi berada tepat di antara Matahari dan Bulan. Akibatnya, cahaya dari Matahari yang seharusnya sampai ke permukaan Bulan menjadi terhalang oleh badan Bumi. Gerhana bulan hanya dapat terjadi pada waktu malam hari saat fase Bulan Purnama (Full Moon).'
    ],
    keyPoints: [
      'Mengenalkan apa itu gerhana bulan',
      'Menyebutkan posisi tiga benda langit: Matahari, Bumi, dan Bulan sejajar',
      'Terjadi saat fase Bulan Purnama di malam hari'
    ]
  },
  {
    id: 'deretan-penjelas',
    title: '2. Deretan Penjelas (Sebab - Akibat)',
    badge: 'Struktur Inti',
    roleDescription: 'Menjelaskan secara berurutan bagaimana proses terbentuknya bayangan dan tahapan gerhana terjadi.',
    paragraphs: [
      'Proses terjadinya gerhana bulan berawal dari pancaran sinar Matahari ke arah Bumi. Karena Bumi merupakan benda angkasa yang tidak tembus cahaya (benda gelap), maka di bagian belakang Bumi yang membelakangi Matahari akan terbentuk daerah bayangan panjang.',
      'Bayangan Bumi terbagi menjadi dua daerah utama, yaitu Umbra dan Penumbra. Umbra adalah daerah bayangan inti yang sangat gelap dan pekat karena sama sekali tidak terkena cahaya matahari langsung. Sementara itu, Penumbra adalah daerah bayangan kabur atau samar-samar yang berada di sekeliling bayangan umbra.',
      'Saat Bulan bergerak mengelilingi Bumi (berevolusi), Bulan akan masuk terlebih dahulu ke daerah penumbra sehingga cahaya bulan mulai sedikit meredup. Selanjutnya, jika Bulan terus melintas masuk ke daerah umbra, maka sebagian permukaan bulan akan tampak tertutup bayangan hitam pekat yang disebut Gerhana Bulan Sebagian.',
      'Ketika seluruh permukaan Bulan masuk seutuhnya ke dalam bayangan umbra Bumi, terjadilah Gerhana Bulan Total. Pada fase total ini, Bulan tidak menjadi gelap gulita, melainkan sering kali tampak bersinar kemerahan tembaga yang dijuluki "Blood Moon". Warna merah ini terjadi karena atmosfer Bumi membiasakan cahaya matahari bergelombang merah ke permukaan Bulan, sedangkan gelombang cahaya lainnya terhambur di angkasa.'
    ],
    keyPoints: [
      'Bumi menghalangi cahaya matahari sehingga membentuk bayangan',
      'Bayangan Umbra = bayangan inti yang sangat gelap pekat',
      'Bayangan Penumbra = bayangan samar di sekeliling umbra',
      'Tahap gerhana: Penumbra ➔ Gerhana Sebagian ➔ Gerhana Total (Blood Moon)'
    ]
  },
  {
    id: 'penutup',
    title: '3. Penutup (Interpretasi / Kesimpulan)',
    badge: 'Struktur Akhir',
    roleDescription: 'Berisi kesimpulan akhir dari penulis mengenai dampak, keamanan, dan makna fenomena ini.',
    paragraphs: [
      'Berdasarkan penjelasan tersebut, dapat disimpulkan bahwa gerhana bulan adalah peristiwa alamiah yang terjadi secara teratur dan dapat diprediksi oleh para ilmuwan astronomi dengan sangat tepat. Fenomena ini bukan merupakan pertanda buruk atau kejadian mistis sebagaimana mitos zaman dahulu.',
      'Gerhana bulan sangat aman untuk disaksikan langsung dengan mata telanjang tanpa memerlukan kacamata pelindung khusus. Mempelajari proses terjadinya gerhana bulan membantu kita menyadari betapa teratur dan luar biasanya pergerakan benda-benda langit di alam semesta.'
    ],
    keyPoints: [
      'Gerhana bulan adalah fenomena alam ilmiah yang teratur',
      'Aman dilihat langsung dengan mata telanjang',
      'Mengajak siswa mengagumi keteraturan ciptaan alam semesta'
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Fase Bulan Purnama',
    subtitle: 'Kondisi Awal Sebelum Gerhana',
    desc: 'Bulan berada pada posisi yang berlawanan dengan Matahari terhadap Bumi. Di malam hari, Bulan biasanya memantulkan cahaya matahari penuh dan bersinar terang di langit malam.',
    highlight: 'Posisi awal: Bulan bersinar terang penuh.',
    icon: 'Moon'
  },
  {
    step: 2,
    title: 'Benda Langit Berada Sejajar',
    subtitle: 'Matahari - Bumi - Bulan Dalam Satu Garis Lurus',
    desc: 'Karena pergerakan revolusi Bulan dan Bumi, pada waktu tertentu posisi Matahari, Bumi, dan Bulan sejajar tepat dalam satu garis lurus di bidang orbit.',
    highlight: 'Bumi berada di tengah di antara Matahari dan Bulan.',
    icon: 'Maximize2'
  },
  {
    step: 3,
    title: 'Bulan Masuk ke Daerah Penumbra',
    subtitle: 'Awal Mula Gerhana Penumbra',
    desc: 'Bulan perlahan bergerak memasuki bayangan terluar Bumi (Penumbra). Pada tahap ini, cahaya Bulan hanya sedikit meredup secara halus dan sering kali sulit dibedakan dengan mata telanjang.',
    highlight: 'Cahaya Bulan sedikit meredup di bayangan kabur.',
    icon: 'SunDim'
  },
  {
    step: 4,
    title: 'Bulan Memasuki Daerah Umbra',
    subtitle: 'Terjadinya Gerhana Bulan Sebagian',
    desc: 'Tepi Bulan mulai bersentuhan dan masuk ke dalam bayangan inti Bumi yang gelap pekat (Umbra). Sebagian permukaan Bulan tampak terpotong atau hilang tertutup bayangan hitam Bumi.',
    highlight: 'Sebagian piringan Bulan tertutup bayangan gelap umbra.',
    icon: 'PieChart'
  },
  {
    step: 5,
    title: 'Puncak Gerhana: Masuk Umbra Total',
    subtitle: 'Gerhana Bulan Total (Bulan Merah Darah)',
    desc: 'Seluruh piringan Bulan berada di dalam bayangan umbra Bumi. Bulan tidak padam total, melainkan memancarkan pendar warna merah tembaga yang indah karena pembiasan cahaya merah oleh atmosfer Bumi.',
    highlight: 'Seluruh Bulan tampak berwarna merah tembaga (Blood Moon).',
    icon: 'Flame'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Bagaimanakah urutan posisi tiga benda langit saat terjadi gerhana bulan?',
    options: [
      { key: 'A', text: 'Matahari – Bulan – Bumi' },
      { key: 'B', text: 'Matahari – Bumi – Bulan' },
      { key: 'C', text: 'Bumi – Matahari – Bulan' },
      { key: 'D', text: 'Bulan – Matahari – Bumi' },
    ],
    correctAnswer: 'B',
    explanation: 'Benar sekali! Saat gerhana bulan, Bumi berada tepat di tengah-tengah antara Matahari dan Bulan dalam satu garis lurus. Akibatnya, Bumi menghalangi cahaya matahari yang menuju ke Bulan.',
    hint: 'Ingat kuncinya: Planet tempat kita tinggal (Bumi) berada persis di tengah-tengah menghalangi sinar matahari!'
  },
  {
    id: 2,
    question: 'Bagian bayangan Bumi yang paling gelap dan pekat saat peristiwa gerhana dinamakan...',
    options: [
      { key: 'A', text: 'Penumbra' },
      { key: 'B', text: 'Umbra' },
      { key: 'C', text: 'Korona' },
      { key: 'D', text: 'Kromosfer' },
    ],
    correctAnswer: 'B',
    explanation: 'Tepat sekali! Umbra adalah daerah bayangan inti yang paling gelap dan tidak terkena cahaya matahari langsung sama sekali. Sedangkan Penumbra adalah daerah bayangan kabur atau samar yang berada di sekeliling umbra.',
    hint: 'Kata ini memiliki arti bayangan inti atau pusat yang sangat gelap gulita.'
  },
  {
    id: 3,
    question: 'Pada fase bulan apakah peristiwa gerhana bulan selalu terjadi?',
    options: [
      { key: 'A', text: 'Bulan Sabit' },
      { key: 'B', text: 'Bulan Baru (Mati)' },
      { key: 'C', text: 'Bulan Purnama' },
      { key: 'D', text: 'Bulan Separuh (Kuartir)' },
    ],
    correctAnswer: 'C',
    explanation: 'Hebat! Gerhana bulan hanya bisa terjadi pada saat fase Bulan Purnama di malam hari, yaitu ketika posisi Bulan berada di sisi berlawanan dari Matahari dilihat dari Bumi.',
    hint: 'Fase ini adalah saat malam hari di mana Bulan biasanya tampak bulat penuh dan bersinar terang benderang.'
  }
];
