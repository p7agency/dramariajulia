import { motion } from 'motion/react';
import { Microscope, UserCheck, ShieldCheck, HeartPulse } from 'lucide-react';
import { PILLARS_DATA } from '../data/content';

export default function Pillars() {
  const getIcon = (name: string) => {
    const cls = 'w-5 h-5 text-[#D87088]';
    switch (name) {
      case 'Microscope': return <Microscope className={cls} />;
      case 'UserCheck': return <UserCheck className={cls} />;
      case 'ShieldCheck': return <ShieldCheck className={cls} />;
      default: return <HeartPulse className={cls} />;
    }
  };

  return (
    <section id="pilares" className="relative py-20 lg:py-28 bg-[#FDFAF8] overflow-hidden">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#D87088]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D87088]/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#D87088]/80">Fundamentos do Cuidado</span>
          </div>
          <h2
            className="font-serif text-[#121829]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Os pilares da minha prática médica
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS_DATA.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col gap-5 p-6 rounded-3xl bg-white border border-[#D87088]/15 hover:border-[#D87088]/40 hover:shadow-[0_12px_40px_rgba(216,112,136,0.1)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#F8E8EC] flex items-center justify-center group-hover:bg-[#D87088]/20 transition-colors">
                  {getIcon(pillar.iconName)}
                </div>
                <span className="font-mono text-xs font-bold text-[#D87088]/40">0{i + 1}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-semibold text-[#121829] group-hover:text-[#D87088] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#3B4761]/65 leading-relaxed">{pillar.description}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-[#D87088]/10 text-[9px] font-bold uppercase tracking-widest text-[#D87088]/45">
                Medicina para a Vida
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
