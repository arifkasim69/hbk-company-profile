import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/src/lib/i18n';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          alt="Hero Background" 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        <div className="absolute inset-0 blueprint-bg opacity-20 animate-blueprint"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10 xl:col-span-9">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 md:mb-8 flex items-center gap-4"
            >
              <span className="w-8 md:w-12 h-[1px] bg-primary"></span>
              <span className="font-display text-primary tracking-[0.25em] uppercase text-[10px] md:text-xs">{t('hero_tag')}</span>
            </motion.div>

            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1] max-w-5xl font-bold tracking-tight"
            >
              {t('hero_title_part1')} <span className="text-secondary italic font-light">{t('hero_title_accent')}</span>.
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="font-sans text-base md:text-lg lg:text-xl text-on-surface-variant mb-10 md:mb-12 max-w-2xl leading-relaxed"
            >
              {t('hero_desc')}
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-16 md:mb-20"
            >
              <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-primary text-on-primary font-display text-sm font-bold tracking-widest hover:shadow-[0_0_30px_rgba(173,198,255,0.4)] transition-all uppercase rounded-full">
                {t('hero_cta_consult')}
              </button>
              <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 border border-outline text-white font-display text-sm font-bold tracking-widest hover:bg-white/5 transition-all backdrop-blur-md uppercase rounded-full group flex items-center justify-center gap-3">
                {t('hero_cta_projects')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-10 border-t border-white/10"
            >
              {[
                { val: t('hero_stat_mataram_val'), label: t('hero_stat_mataram') },
                { val: t('hero_stat_100days_val'), label: t('hero_stat_100days') },
                { val: t('hero_stat_realtime_val'), label: t('hero_stat_realtime') },
                { val: t('hero_stat_legal_val'), label: t('hero_stat_legal') },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-primary font-display text-2xl md:text-3xl mb-1 font-semibold">{stat.val}</div>
                  <div className="font-display text-[9px] md:text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
