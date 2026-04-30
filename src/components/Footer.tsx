import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/src/lib/i18n';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-lowest w-full border-t border-white/10" id="kontak">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-12 py-20 max-w-[1440px] mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center font-display text-on-primary text-sm font-bold">H</div>
            <div className="text-white font-bold font-display uppercase tracking-widest text-sm">HUTAMA BANGUN KARYA</div>
          </div>
          <p className="text-on-surface-variant text-[11px] uppercase tracking-wider leading-relaxed font-sans">
            {t('footer_tagline')}
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h6 className="text-white font-display uppercase tracking-[0.3em] text-[10px] font-bold">{t('footer_services')}</h6>
          <ul className="space-y-3">
            {['Structural Integrity', 'Digital Twin Labs', 'BIM Coordination', 'Luxury Residential'].map((item) => (
              <li key={item}>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-display uppercase tracking-[0.2em] text-[10px] font-semibold">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h6 className="text-white font-display uppercase tracking-[0.3em] text-[10px] font-bold">{t('footer_legal')}</h6>
          <ul className="space-y-3">
            {['Privacy Protocol', 'Terms of Service', 'Client Agreement'].map((item) => (
              <li key={item}>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-display uppercase tracking-[0.2em] text-[10px] font-semibold">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h6 className="text-white font-display uppercase tracking-[0.3em] text-[10px] font-bold">{t('footer_contact')}</h6>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary w-4 h-4 mt-0.5 shrink-0" />
              <p className="text-on-surface-variant font-display uppercase tracking-[0.2em] text-[10px] font-semibold leading-relaxed">
                {t('footer_address')}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-primary w-4 h-4 shrink-0" />
              <p className="text-on-surface-variant font-display uppercase tracking-[0.2em] text-[10px] font-semibold">contact@hutamabangun.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary w-4 h-4 shrink-0" />
              <p className="text-on-surface-variant font-display uppercase tracking-[0.2em] text-[10px] font-semibold">+62 812 3456 7890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-white/5 text-center bg-black/20">
        <p className="text-on-surface-variant font-display uppercase tracking-[0.3em] text-[9px] font-bold">
          © {new Date().getFullYear()} HUTAMA BANGUN KARYA. ARCHITECTURAL PRECISION SECURED. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
