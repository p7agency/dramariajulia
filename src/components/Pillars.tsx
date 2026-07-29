import { motion } from 'motion/react';
import { Microscope, UserCheck, ShieldCheck, HeartPulse } from 'lucide-react';
import { PILLARS_DATA } from '../data/content';

export default function Pillars() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Microscope': return <Microscope className="w-6 h-6 text-[#D87088] group-hover:text-white transition-colors" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#D87088] group-hover:text-white transition-colors" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#D87088] group-hover:text-white transition-colors" />;
      default: return <HeartPulse className="w-6 h-6 text-[#D87088] group-hover:text-white transition-colors" />;
    }
  };
  return (
    <section id="pilares" className="py-24 lg:py-32 bg-[#FDF6F7] relative border-t border-[#D87088]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#D87088]">Fundamentos do Cuidado</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#121829]">Os pilares da minha prática médica</h2>
          <p className="text-base sm:text-lg text-[#3B4761]">Valores inegociáveis que norteiam cada decisão clínica, diagnóstica e terapêutica.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PILLARS_DATA.map((pillar, index) => (
            <motion.div key={pillar.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white border border-[#D87088]/25 hover:border-[#D87088] p-8 rounded-2xl interactive-card flex flex-col justify-between group space-y-6 shadow-xs hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#F8E8EC] border border-[#D87088]/30 flex items-center justify-center group-hover:bg-[#D87088] transition-all duration-300 shadow-2xs">{getIcon(pillar.iconName)}</div>
                  <span className="text-xs font-mono font-bold text-[#D87088] border-b border-[#D87088]/30 pb-0.5">0{index + 1}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#121829] group-hover:text-[#D87088] transition-colors">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-[#3B4761] leading-relaxed">{pillar.description}</p>
              </div>
              <div className="pt-4 border-t border-[#D87088]/15 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D87088]">
                <span>Prática Humanizada</span>
                <span className="w-1 h-1 rounded-full bg-[#D87088]" />
                <span>Medicina para a Vida</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
