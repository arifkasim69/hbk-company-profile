
import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'id' | 'en';

interface Translation {
  [key: string]: {
    id: string;
    en: string;
  };
}

export const translations: Translation = {
  // Navbar
  nav_home: { id: 'Beranda', en: 'Home' },
  nav_about: { id: 'Tentang', en: 'About' },
  nav_services: { id: 'Layanan', en: 'Services' },
  nav_portfolio: { id: 'Portfolio', en: 'Portfolio' },
  nav_team: { id: 'Tim', en: 'Team' },
  nav_contact: { id: 'Kontak', en: 'Contact' },
  nav_consult: { id: 'KONSULTASI', en: 'CONSULTATION' },

  // Hero
  hero_tag: { id: 'PREMIUM ARCHITECTURAL ENGINEERING', en: 'PREMIUM ARCHITECTURAL ENGINEERING' },
  hero_title_part1: { id: 'Membangun Masa Depan dengan', en: 'Building the Future with' },
  hero_title_accent: { id: 'Presisi & Integritas', en: 'Precision & Integrity' },
  hero_desc: { 
    id: 'Hutama Bangun Karya menghadirkan standar teknik sipil kelas dunia ke Mataram, Lombok. Kami memadukan inovasi digital dengan konstruksi fisik untuk hasil yang abadi.', 
    en: 'Hutama Bangun Karya brings world-class civil engineering standards to Mataram, Lombok. We blend digital innovation with physical construction for enduring results.' 
  },
  hero_cta_consult: { id: 'Konsultasi', en: 'Consultation' },
  hero_cta_projects: { id: 'Lihat Proyek', en: 'View Projects' },
  hero_stat_mataram: { id: 'Pusat Operasional', en: 'Operational Hub' },
  hero_stat_mataram_val: { id: 'Mataram', en: 'Mataram' },
  hero_stat_100days: { id: 'Garansi Kualitas', en: 'Quality Guarantee' },
  hero_stat_100days_val: { id: '100 Hari', en: '100 Days' },
  hero_stat_realtime: { id: 'Laporan Berkala', en: 'Periodic Reports' },
  hero_stat_realtime_val: { id: 'Real-time', en: 'Real-time' },
  hero_stat_legal: { id: 'Legalitas Hukum', en: 'Legal Legitimacy' },
  hero_stat_legal_val: { id: 'Lengkap', en: 'Complete' },

  // About
  about_tag: { id: 'OUR IDENTITY', en: 'OUR IDENTITY' },
  about_title_part1: { id: 'Inovasi di Setiap', en: 'Innovation at Every' },
  about_title_accent: { id: 'Titik Koordinat.', en: 'Coordinate Point.' },
  about_desc: { 
    id: 'Kami adalah firma konstruksi dan desain yang berfokus pada ketepatan struktur dan estetika modern. Sejak awal, kami berkomitmen untuk melayani wilayah Mataram dan sekitarnya dengan integritas tanpa kompromi, memastikan setiap proyek menjadi investasi yang berharga.',
    en: 'We are a construction and design firm focused on structural precision and modern aesthetics. From the beginning, we have been committed to serving the Mataram region and its surroundings with uncompromising integrity, ensuring every project becomes a valuable investment.'
  },
  about_visi_title: { id: 'Visi Kami', en: 'Our Vision' },
  about_visi_desc: { id: 'Menjadi tolok ukur nasional dalam presisi konstruksi yang berkelanjutan dan berbasis teknologi digital.', en: 'To be a national benchmark in sustainable construction precision based on digital technology.' },
  about_misi_title: { id: 'Misi Kami', en: 'Our Mission' },
  about_misi_desc: { id: 'Menghasilkan karya yang aman, efisien, dan bernilai investasi tinggi bagi setiap klien.', en: 'To produce work that is safe, efficient, and of high investment value for every client.' },

  // Services
  services_tag: { id: 'DISCIPLINES & EXPERTISE', en: 'DISCIPLINES & EXPERTISE' },
  services_title: { id: 'Layanan Spesialis Kami.', en: 'Our Specialist Services.' },
  service_residential_title: { id: 'Rumah Tinggal', en: 'Residential' },
  service_residential_desc: { id: 'Desain hunian mewah dengan pendekatan bioklimatik dan struktural yang kokoh untuk kenyamanan jangka panjang.', en: 'Luxury residential design with bioclimatic approach and solid structural integrity for long-term comfort.' },
  service_commercial_title: { id: 'Komersial', en: 'Commercial' },
  service_commercial_desc: { id: 'Pembangunan gedung perkantoran, ruko, dan fasilitas publik dengan efisiensi ruang maksimal dan desain ikonik.', en: 'Construction of office buildings, shops, and public facilities with maximum space efficiency and iconic design.' },
  service_renovation_title: { id: 'Renovasi', en: 'Renovation' },
  service_renovation_desc: { id: 'Transformasi bangunan lama menjadi ruang modern tanpa mengabaikan integritas struktur lama dan nilai sejarahnya.', en: 'Transformation of old buildings into modern spaces without neglecting old structural integrity and historical value.' },
  service_interior_title: { id: 'Desain Interior', en: 'Interior Design' },
  service_interior_desc: { id: 'Estetika ruang dalam yang harmonis dengan detail teknis pencahayaan, material premium, dan akustik ruang.', en: 'Harmonious interior aesthetics with technical lighting details, premium materials, and room acoustics.' },
  service_more: { id: 'SELENGKAPNYA', en: 'LEARN MORE' },

  // Advantages
  advantages_tag: { id: 'ADVANTAGES', en: 'ADVANTAGES' },
  advantages_title: { id: 'Kenapa Memilih Kami.', en: 'Why Choose Us.' },
  adv_1_title: { id: 'Garansi 100 Hari', en: '100-Day Warranty' },
  adv_1_desc: { id: 'Kami memberikan jaminan kualitas penuh pasca-konstruksi untuk ketenangan pikiran.', en: 'We provide full post-construction quality assurance for your peace of mind.' },
  adv_2_title: { id: 'Laporan Proyek', en: 'Project Reports' },
  adv_2_desc: { id: 'Pantau perkembangan pembangunan secara transparan melalui sistem pelaporan digital.', en: 'Monitor construction progress transparently through our digital reporting system.' },
  adv_3_title: { id: 'Jaminan Pasti Bersih', en: 'Guaranteed Clean' },
  adv_3_desc: { id: 'Area proyek kami tertata rapi. Kami menyerahkan unit dalam kondisi steril sempurna.', en: 'Our project areas are well-organized. We handover units in perfectly sterile condition.' },
  adv_4_title: { id: 'Garansi Uang Kembali', en: 'Money Back Guarantee' },
  adv_4_desc: { id: 'Komitmen integritas mencakup jaminan keamanan dana jika terjadi ketidaksesuaian.', en: 'Our integrity commitment includes fund security guarantee if fundamental discrepancies occur.' },

  // Portfolio
  portfolio_tag: { id: 'SELECTED WORKS', en: 'SELECTED WORKS' },
  portfolio_title: { id: 'Jejak Karya Presisi.', en: 'Traces of Precision.' },
  portfolio_view_all: { id: 'LIHAT SEMUA PROYEK', en: 'VIEW ALL PROJECTS' },

  // Payment
  payment_tag: { id: 'FINANCIAL WORKFLOW', en: 'FINANCIAL WORKFLOW' },
  payment_title: { id: 'Sistem Pembayaran Terstruktur.', en: 'Structured Payment System.' },
  payment_desc: { 
    id: 'Keamanan finansial klien adalah prioritas kami. Sistem termin berbasis progress memastikan investasi Anda terkelola dengan aman.', 
    en: 'Client financial security is our priority. A progress-based milestone system ensures your investment is managed safely.' 
  },
  payment_step_1_title: { id: 'Down Payment', en: 'Down Payment' },
  payment_step_1_desc: { id: 'Tanda jadi, inisiasi proyek & survey lokasi awal.', en: 'Down payment, project initiation & initial site survey.' },
  payment_step_2_title: { id: 'Tahap Desain', en: 'Design Phase' },
  payment_step_2_desc: { id: 'Pengerjaan Blueprint, 3D Render & IMB/PBG.', en: 'Blueprint work, 3D Render & permits acquisition.' },
  payment_step_3_title: { id: 'Progress 50%', en: '50% Progress' },
  payment_step_3_desc: { id: 'Struktur utama terbangun hingga atap tertutup.', en: 'Main structure built up to roof completion.' },
  payment_step_4_title: { id: 'Progress 85%', en: '85% Progress' },
  payment_step_4_desc: { id: 'Pengerjaan finishing, instalasi utilitas & interior.', en: 'Finishing work, utility installation & interior work.' },
  payment_step_5_title: { id: 'Pelunasan', en: 'Final Payment' },
  payment_step_5_desc: { id: 'Serah terima kunci, pembersihan & masa garansi.', en: 'Key handover, cleaning & warranty period.' },

  // CTA
  cta_title: { id: 'Siap Membangun', en: 'Ready to Build' },
  cta_title_accent: { id: 'Cerita Baru Anda?', en: 'Your New Story?' },
  cta_desc: { id: 'Ambil langkah pertama menuju pembangunan yang berkualitas tinggi, terukur, dan bergaransi bersama tim ahli kami.', en: 'Take the first step towards high-quality, measurable, and guaranteed construction with our expert team.' },
  cta_whatsapp: { id: 'Konsultasi via WhatsApp', en: 'Consult via WhatsApp' },
  cta_portfolio: { id: 'Lihat Portfolio', en: 'View Portfolio' },

  // Footer
  footer_tagline: { 
    id: 'Precise engineering solutions for modern architectural challenges. Based in Mataram, Lombok. Dedikasi pada kualitas dan integritas struktural.', 
    en: 'Precise engineering solutions for modern architectural challenges. Based in Mataram, Lombok. Dedication to quality and structural integrity.' 
  },
  footer_services: { id: 'Layanan Utama', en: 'Main Services' },
  footer_legal: { id: 'Legalitas', en: 'Legal' },
  footer_contact: { id: 'Kontak', en: 'Contact' },
  footer_address: { id: 'Jl. Pariwisata Mataram,\nNusa Tenggara Barat', en: 'Pariwisata Street, Mataram,\nWest Nusa Tenggara' },

  // Project Detail
  project_back: { id: 'Kembali ke Beranda', en: 'Back to Home' },
  project_location: { id: 'Location', en: 'Location' },
  project_year: { id: 'Year', en: 'Year' },
  project_area: { id: 'Area', en: 'Area' },
  project_client: { id: 'Client', en: 'Client' },
  project_cta_title: { id: 'Ingin Bangun Seperti Ini?', en: 'Want to Build Something Like This?' },
  project_cta_desc: { id: 'Konsultasikan ide pembangunan Anda bersama tim engineering kami yang berpengalaman.', en: 'Consult your building ideas with our experienced engineering team.' },
  project_cta_btn: { id: 'Mulai Konsultasi', en: 'Start Consultation' },
  project_cta_pdf: { id: 'Simpan PDF Brosur', en: 'Save PDF Brochure' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string) => {
    return translations[key] ? translations[key][language] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
