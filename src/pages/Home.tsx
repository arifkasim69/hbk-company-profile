import { motion } from 'motion/react';
import { Hero } from '@/src/components/Hero';
import { Services } from '@/src/components/Services';
import { Portfolio } from '@/src/components/Portfolio';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Zap } from 'lucide-react';
import { useLanguage } from '@/src/lib/i18n';

export function Home() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-surface text-on-surface"
    >
      <Hero />

      {/* About Section */}
      <section className="py-32 px-8 max-w-[1440px] mx-auto overflow-hidden" id="tentang">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-primary"></div>
            <img 
              alt="Structural Drawing" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              src="razones-para-ir-a-un-resort-de-vacaciones-1.webp" 
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 border border-primary/30 rounded-full"
            >
              <span className="font-display text-primary text-[10px] tracking-widest uppercase font-bold">{t('about_tag')}</span>
            </motion.div>
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl text-white leading-tight font-bold"
            >
              {t('about_title_part1')} <br/><span className="text-primary italic font-light italic">{t('about_title_accent')}</span>
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-on-surface-variant text-lg leading-relaxed"
            >
              {t('about_desc')}
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {[
                { title: t('about_visi_title'), desc: t('about_visi_desc') },
                { title: t('about_misi_title'), desc: t('about_misi_desc') }
              ].map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="glass-card p-8 hover:bg-white/5 transition-colors"
                >
                  <h3 className="font-display text-primary mb-4 uppercase tracking-widest text-sm font-bold">{item.title}</h3>
                  <p className="font-sans text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Why Choose Us */}
      <section className="py-32 px-8 border-t border-white/5 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20 text-center">
            <span className="font-display text-primary tracking-[0.3em] uppercase text-xs font-bold">{t('advantages_tag')}</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-4 font-bold">{t('advantages_title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: '01', title: t('adv_1_title'), desc: t('adv_1_desc'), icon: ShieldCheck },
              { id: '02', title: t('adv_2_title'), desc: t('adv_2_desc'), icon: FileText },
              { id: '03', title: t('adv_3_title'), desc: t('adv_3_desc'), icon: Zap },
              { id: '04', title: t('adv_4_title'), desc: t('adv_4_desc'), icon: CheckCircle2 },
            ].map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border-l border-white/10 hover:border-primary transition-colors bg-white/2 group"
              >
                <div className="text-primary font-display text-4xl mb-4 opacity-40 group-hover:opacity-100 transition-opacity font-bold">{item.id}</div>
                <h4 className="font-display text-white text-lg mb-4 tracking-wider font-bold italic">{item.title}</h4>
                <p className="font-sans text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />

      {/* Payment System */}
      <section className="py-32 px-8 max-w-[1440px] mx-auto relative overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 blueprint-bg opacity-10"></div>
        <div className="mb-20 text-center relative z-10">
          <span className="font-display text-primary tracking-[0.3em] uppercase text-xs font-bold">{t('payment_tag')}</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4 font-bold">{t('payment_title')}</h2>
          <p className="text-on-surface-variant mt-6 max-w-2xl mx-auto font-sans leading-relaxed">{t('payment_desc')}</p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative z-10">
          <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[1px] bg-white/10 z-0"></div>
          {[
            { pct: '5%', title: t('payment_step_1_title'), desc: t('payment_step_1_desc') },
            { pct: '30%', title: t('payment_step_2_title'), desc: t('payment_step_2_desc') },
            { pct: '30%', title: t('payment_step_3_title'), desc: t('payment_step_3_desc') },
            { pct: '30%', title: t('payment_step_4_title'), desc: t('payment_step_4_desc') },
            { pct: '5%', title: t('payment_step_5_title'), desc: t('payment_step_5_desc') },
          ].map((step, idx) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 w-full text-center group"
            >
              <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold mx-auto mb-6 text-xl group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(173,198,255,0.3)]">
                {step.pct}
              </div>
              <h5 className="font-display text-white mb-2 text-sm tracking-widest font-bold uppercase">{step.title}</h5>
              <p className="text-[11px] text-on-surface-variant px-4 font-sans leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Architecture Background" 
            className="w-full h-full object-cover opacity-20" 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
          />
          <div className="absolute inset-0 bg-surface/90 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-white mb-8 font-bold leading-tight"
          >
            {t('cta_title')} <br/><span className="text-primary italic font-light italic">{t('cta_title_accent')}</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xl text-on-surface-variant mb-12 leading-relaxed"
          >
            {t('cta_desc')}
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-primary text-on-primary px-12 py-5 font-display tracking-[0.2em] text-sm font-bold transition-all uppercase rounded-full shadow-[0_0_30px_rgba(173,198,255,0.3)] hover:scale-105 active:scale-95">
              {t('cta_whatsapp')}
            </button>
            <button className="border border-white/20 text-white px-12 py-5 font-display tracking-[0.2em] text-sm font-bold hover:bg-white/5 transition-all uppercase rounded-full backdrop-blur-md">
              {t('cta_portfolio')}
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
