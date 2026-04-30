import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, MapPin, Calendar, Ruler, Users } from 'lucide-react';
import { useLanguage } from '@/src/lib/i18n';

const projectData = {
  'resort-living-asia': {
    title: { id: 'Resort Living Asia', en: 'Resort Living Asia' },
    category: { id: 'Hospitality', en: 'Hospitality' },
    location: { id: 'Senggigi, Lombok Barat', en: 'Senggigi, West Lombok' },
    year: '2023',
    area: '2,500 m2',
    client: 'Living Asia Group',
    desc: { 
      id: 'Proyek resort mewah yang mengintegrasikan struktur beton presisi dengan elemen kayu tropis. Fokus utama pada efisiensi sirkulasi udara dan pemaksimalan view laut lepas.',
      en: 'Luxury resort project integrating precision concrete structures with tropical wood elements. Main focus on air circulation efficiency and ocean view maximization.'
    },
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2000',
  },
  'dinas-perikanan': {
    title: { id: 'Kantor Dinas Perikanan', en: 'Fisheries Department Office' },
    category: { id: 'Civic', en: 'Civic' },
    location: { id: 'Mataram', en: 'Mataram' },
    year: '2022',
    area: '1,800 m2',
    client: 'Pemerintah Kota Mataram',
    desc: {
      id: 'Gedung perkantoran modern dengan standar keamanan struktural tinggi. Menggunakan konsep smart office untuk efisiensi operasional harian.',
      en: 'Modern office building with high structural safety standards. Utilizing smart office concepts for daily operational efficiency.'
    },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
  }
};

export function ProjectDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const projectRaw = projectData[id as keyof typeof projectData] || projectData['resort-living-asia'];

  const project = {
    ...projectRaw,
    title: projectRaw.title[language],
    category: projectRaw.category[language],
    location: projectRaw.location[language],
    desc: projectRaw.desc[language],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-surface"
    >
      <div className="max-w-[1440px] mx-auto px-8 pb-32">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-display text-[10px] font-bold tracking-[0.2em] mb-12 hover:translate-x-[-4px] transition-transform uppercase">
          <ArrowLeft className="w-3 h-3" /> {t('project_back')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <motion.div 
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="aspect-[16/9] overflow-hidden rounded-xl border border-white/10"
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>
            
            <div className="mt-12 space-y-8">
               <h1 className="font-display text-5xl md:text-7xl text-white font-bold">{project.title}</h1>
               <div className="w-24 h-1 bg-primary"></div>
               <p className="font-sans text-xl text-on-surface-variant leading-relaxed max-w-3xl">
                  {project.desc}
               </p>
               
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-white/5">
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-primary">
                        <MapPin className="w-4 h-4" />
                        <span className="font-display text-[10px] font-bold tracking-widest uppercase">{t('project_location')}</span>
                     </div>
                     <p className="text-white text-sm">{project.location}</p>
                  </div>
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-primary">
                        <Calendar className="w-4 h-4" />
                        <span className="font-display text-[10px] font-bold tracking-widest uppercase">{t('project_year')}</span>
                     </div>
                     <p className="text-white text-sm">{project.year}</p>
                  </div>
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-primary">
                        <Ruler className="w-4 h-4" />
                        <span className="font-display text-[10px] font-bold tracking-widest uppercase">{t('project_area')}</span>
                     </div>
                     <p className="text-white text-sm">{project.area}</p>
                  </div>
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-primary">
                        <Users className="w-4 h-4" />
                        <span className="font-display text-[10px] font-bold tracking-widest uppercase">{t('project_client')}</span>
                     </div>
                     <p className="text-white text-sm">{project.client}</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-4">
             <div className="glass-card p-10 space-y-8 sticky top-32">
                <h3 className="font-display text-lg text-white font-bold uppercase tracking-widest">{t('project_cta_title')}</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                   {t('project_cta_desc')}
                </p>
                <div className="space-y-4">
                   <button className="w-full bg-primary text-on-primary py-5 font-display text-xs font-bold tracking-widest uppercase rounded-full">
                      {t('project_cta_btn')}
                   </button>
                   <button className="w-full border border-white/20 text-white py-5 font-display text-xs font-bold tracking-widest uppercase rounded-full">
                      {t('project_cta_pdf')}
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
