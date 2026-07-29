import { useState } from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Users, Home, CheckCircle, Calendar, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import { SPECIALTIES_DATA } from '../data/content';

interface SpecialtiesProps { onOpenBooking: () => void; }

export default function Specialties({ onOpenBooking }: SpecialtiesProps) {
  const [activeTab, setActiveTab] = useState<string>('clinica-medica');
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      default: return <Stethoscope className="w-5 h-5" />;
    }
  };
  const activeSpecialty = SPECIALTIES_DATA.find((s) => s.id === activeTab) || SPECIALTIES_DATA[0];
  return (
    <section id="especialidades" className="py-24 lg:py-32 bg-[#0E1322] text-white relative border-t border-[#D87088]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#D87088]">Cuidado Especializado</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">Áreas de atuação</h2>
          <p className="text-base sm:text-lg text-[#F8E8EC]/80">Atendimento direcionado à prevenção, diagnóstico preciso e cuidado integral em saúde.</p>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 border-b border-[#D87088]/20 pb-4">
          {SPECIALTIES_DATA.map((specialty) => {
            const isActive = specialty.id === activeTab;
            return (
              <button key={specialty.id} onClick={() => setActiveTab(specialty.id)} className={`relative inline-flex items-center gap-3 px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${isActive ? 'text-white border-b-2 border-[#D87088]' : 'text-[#F8E8EC]/60 hover:text-white border-b-2 border-transparent'}`}>
                <div className={isActive ? 'text-[#D87088]' : 'text-[#F8E8EC]/50'}>{getIcon(specialty.iconName)}</div>
                <span>{specialty.title}</span>
              </button>
            );
          })}
        </div>
        <motion.div key={activeSpecialty.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-[#151D30] rounded-2xl p-6 sm:p-10 border border-[#D87088]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-[#D87088] text-[11px] font-bold uppercase tracking-[0.18em] border-b border-[#D87088]/20 pb-2">
                <ShieldCheck className="w-4 h-4 text-[#D87088]" />
                <span>{activeSpecialty.subtitle}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-white">{activeSpecialty.title}</h3>
              <p className="text-base sm:text-lg text-[#F8E8EC]/85 leading-relaxed">{activeSpecialty.description}</p>
              <div className="space-y-3 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D87088]">O que contempla este acompanhamento:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSpecialty.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/5 border border-[#D87088]/20 hover:border-[#D87088] hover:bg-white/10 transition-colors group">
                      <CheckCircle className="w-4 h-4 text-[#D87088] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={onOpenBooking} className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D87088] hover:bg-[#c25870] text-white font-semibold text-xs tracking-widest uppercase shadow-lg transition-all duration-300 cursor-pointer">
                <Calendar className="w-4 h-4 text-white" />
                <span>Agendar Consulta de {activeSpecialty.title}</span>
              </button>
            </div>
            <div className="lg:col-span-5 relative space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D87088]/40 bg-gradient-to-br from-[#1C263F] via-[#121829] to-[#0D1220] p-6 flex flex-col items-center justify-center text-center text-white relative group hover:border-[#D87088] transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D87088]/20 rounded-bl-full pointer-events-none" />
                <div className="w-14 h-14 rounded-full bg-[#D87088]/20 text-[#D87088] flex items-center justify-center border border-[#D87088]/40 mb-3 group-hover:scale-105 transition-transform shadow-md"><ImageIcon className="w-7 h-7" /></div>
                <p className="font-serif text-sm font-semibold text-white">Espaço para Imagem Ilustrativa</p>
                <p className="text-[11px] text-[#F8E8EC]/70 max-w-xs mt-1">Reservado para foto temática de {activeSpecialty.title} / Consultório.</p>
              </div>
              <div className="bg-[#1C263F] text-white rounded-2xl p-6 border border-[#D87088]/30 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#D87088]/20 text-[#D87088]">{getIcon(activeSpecialty.iconName)}</div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-white">Tempo & Individualidade</h4>
                    <p className="text-xs text-[#F8E8EC]/80">Acompanhamento sem pressa, com escuta atenta e plano personalizado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
