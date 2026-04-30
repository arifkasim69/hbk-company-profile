import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/src/lib/i18n';

const projects = [
  {
    id: 'resort-living-asia',
    title: 'Resort Living Asia',
    category: 'HOSPITALITY | 2023',
    location: 'Senggigi, Lombok Barat',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'dinas-perikanan',
    title: 'Kantor Dinas Perikanan',
    category: 'CIVIC | 2022',
    location: 'Mataram',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'puskesmas-sigerongan',
    title: 'Puskesmas Sigerongan',
    category: 'HEALTHCARE | 2024',
    location: 'Lombok Barat',
    status: 'Final Phase',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'cliff-villa',
    title: 'Cliff Villa',
    category: 'RESIDENTIAL | 2023',
    location: 'Malimbu, Lombok Utara',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
  },
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-surface overflow-hidden" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-primary tracking-[0.3em] uppercase text-xs font-bold"
            >
              {t('portfolio_tag')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-5xl text-white mt-4 font-bold"
            >
              {t('portfolio_title')}
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-primary border-b border-primary pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest text-[10px] font-bold"
          >
            {t('portfolio_view_all')}
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/proyek/${project.id}`} className="block relative overflow-hidden bg-surface-container-high border border-white/5">
                <div className="aspect-video overflow-hidden">
                  <img 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    src={project.image} 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-display text-primary text-[10px] font-bold uppercase tracking-wider">{project.category}</span>
                    <span className={`px-2 py-0.5 font-display text-[8px] border uppercase font-bold ${
                      project.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    }`}>
                      {project.status === 'Completed' ? (useLanguage().language === 'id' ? 'Selesai' : 'Completed') : (useLanguage().language === 'id' ? 'Tahap Akhir' : 'Final Phase')}
                    </span>
                  </div>
                  <h4 className="text-white font-display text-xl mb-1 group-hover:text-primary transition-colors font-semibold">{project.title}</h4>
                  <p className="text-on-surface-variant text-xs font-sans">{project.location}</p>
                </div>
                <div className="absolute top-4 right-4 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                   <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-on-primary">
                      <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
