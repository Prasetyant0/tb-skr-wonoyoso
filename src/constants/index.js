import semenImg from '../assets/katalog/semendanpasir.webp';
import bataImg from '../assets/katalog/batubata.webp';
import catImg from '../assets/katalog/catpelapis.webp';
import pipaImg from '../assets/katalog/pipa.webp';
import besiImg from '../assets/katalog/besibaja.webp';
import toolsImg from '../assets/katalog/tools.webp';

export const NAV_LINKS = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Produk', href: '#products' },
  { name: 'Keunggulan', href: '#why-us' },
  { name: 'Konsultasi', href: '#consultation' },
];

export const HERO_CONTENT = {
  title: "Membangun Masa Depan dengan Material Berkualitas",
  subtitle: "Mitra terpercaya solusi bahan bangunan terlengkap di Wonoyoso. Harga kompetitif untuk setiap kebutuhan proyek Anda.",
  cta: "Lihat Katalog Produk"
};

export const PRODUCTS = [
  {
    id: 1,
    title: "Semen & Pasir",
    desc: "Material dasar kualitas tinggi",
    image: semenImg // Pakai variabel import tadi
  },
  {
    id: 2,
    title: "Batu Bata & Hebel",
    desc: "Berbagai jenis dan ukuran",
    image: bataImg
  },
  {
    id: 3,
    title: "Cat & Pelapis",
    desc: "Warna lengkap tahan cuaca",
    image: catImg
  },
  {
    id: 4,
    title: "Pipa & Fitting",
    desc: "Instalasi air anti bocor",
    image: pipaImg
  },
  {
    id: 5,
    title: "Besi & Baja",
    desc: "Konstruksi tulang beton kuat",
    image: besiImg
  },
  {
    id: 6,
    title: "Tools & Peralatan",
    desc: "Alat tukang profesional",
    image: toolsImg
  }
];

export const ABOUT_CONTENT = {
  title: "Tentang TB. SKR",
  desc1: "TB. SKR Wonoyoso adalah toko bahan bangunan terpercaya yang telah melayani masyarakat Wonoyoso dan sekitarnya selama bertahun-tahun. Kami menyediakan berbagai material konstruksi berkualitas tinggi dengan harga kompetitif.",
  desc2: "Komitmen kami adalah memberikan produk asli, layanan profesional, dan solusi terbaik untuk setiap kebutuhan proyek konstruksi Anda, dari renovasi rumah hingga pembangunan skala besar.",
  stats: "15+ Tahun",
  statsLabel: "Pengalaman Melayani"
};

export const FEATURES = [
  {
    title: "Harga Kompetitif",
    desc: "Harga terbaik dengan kualitas terjamin untuk semua produk kami.",
    icon: "DollarSign"
  },
  {
    title: "Pengiriman Cepat",
    desc: "Layanan pengiriman cepat dan aman ke seluruh area Wonoyoso.",
    icon: "Zap"
  },
  {
    title: "Produk Asli",
    desc: "Semua produk dijamin 100% original dari distributor resmi.",
    icon: "ShieldCheck"
  }
];

export const FAQ_CONTENT = [
  {
    question: "Apakah ada layanan pengiriman?",
    answer: "Ya, kami menyediakan layanan pengiriman cepat dan aman ke seluruh area Wonoyoso dan sekitarnya (Radius 20KM). Biaya pengiriman gratis untuk pembelian di atas nominal tertentu."
  },
  {
    question: "Bagaimana cara melakukan pemesanan?",
    answer: "Anda bisa memesan langsung melalui WhatsApp kami, telepon, atau datang langsung ke toko. Tim kami siap membantu menghitung kebutuhan material Anda."
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima pembayaran Tunai (Cash), Transfer Bank (BCA, BRI, Mandiri), dan pembayaran Digital (QRIS)."
  },
  {
    question: "Apakah produk bergaransi?",
    answer: "Tentu, semua produk elektronik (seperti pompa air, alat listrik) memiliki garansi resmi pabrik. Untuk material alam, kami menjamin kualitas sesuai standar."
  },
  {
    question: "Apakah bisa konsultasi RAB (Rencana Anggaran Biaya)?",
    answer: "Sangat bisa! Silakan bawa denah atau ukuran bangunan Anda, tim kami akan membantu estimasi kebutuhan material secara GRATIS."
  }
];
