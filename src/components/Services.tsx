import { motion } from 'motion/react';
import { Home, Building2, Hammer, LayoutPanelLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/src/lib/i18n';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('service_residential_title'),
      description: t('service_residential_desc'),
    },
    {
      icon: Building2,
      title: t('service_commercial_title'),
      description: t('service_commercial_desc'),
    },
    {
      icon: Hammer,
      title: t('service_renovation_title'),
      description: t('service_renovation_desc'),
    },
    {
      icon: LayoutPanelLeft,
      title: t('service_interior_title'),
      description: t('service_interior_desc'),
    },
  ];

  return (
    <section className="py-32 bg-surface-container-lowest relative overflow-hidden" id="layanan">
      <div className="absolute inset-0 blueprint-bg opacity-10"></div>
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-primary tracking-[0.3em] uppercase text-xs font-bold"
          >
            {t('services_tag')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl text-white mt-4 font-bold"
          >
            {t('services_title')}
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group hover:border-primary/50 transition-all p-10 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon className="w-32 h-32" />
              </div>
              <service.icon className="w-12 h-12 text-primary mb-8 transition-transform group-hover:scale-110" />
              <h4 className="font-display text-white mb-4 text-2xl group-hover:text-primary transition-colors font-bold uppercase tracking-tight">
                {service.title}
              </h4>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-sans text-sm">
                {service.description}
              </p>
              <div className="mt-auto flex items-center text-primary font-display text-[10px] font-bold tracking-widest group-hover:translate-x-2 transition-transform uppercase">
                {t('service_more')} <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
