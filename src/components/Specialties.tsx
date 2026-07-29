import { useState } from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Users, Home, CheckCircle, Calendar, ShieldCheck } from 'lucide-react';
import { SPECIALTIES_DATA } from '../data/content';

interface SpecialtiesProps { onOpenBooking: () => void; }

export default function Specialties({ onOpenBooking }: SpecialtiesProps) {
  const [activeTab, setActiveTab] = useState('clinica-medica');

  const getIcon = (name: string, cls = 'w-5 h-5') => {
    switch (name) {
      case 'Stethoscope': return <Stethoscope className={cls} />;
      case 'Users': return <Users className={cls} />;
      default: return <Home className={cls} />;
    }
  };

  const active = SPECIALTIES_DATA.find(s => s.id === activeTab) || SPECIALTIES_DATA[0];

  return (
    <section id="especialidades" className="relative py-20 lg:py-28 bg-[#121829] text-white overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D87088]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D87088]/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#D87088]/80">Cuidado Especializado</span>
          </div>
          <h2
            className="font-serif text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Áreas de atuação
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/08 pb-5">
          {SPECIALTIES_DATA.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer ${
                s.id === activeTab
                  ? 'bg-[#D87088] text-white shadow-[0_4px_20px_rgba(216,112,136,0.4)]'
                  : 'text-white/45 hover:text-white border border-white/08 hover:border-white/20'
              }`}
            >
              <span className={s.id === activeTab ? 'text-white' : 'text-[#D87088]/60'}>
                {getIcon(s.iconName, 'w-4 h-4')}
              </span>
              {s.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#D87088]/75 text-[10px] font-black uppercase tracking-[0.2em]">
              <ShieldCheck className="w-4 h-4" />
              <span>{active.subtitle}</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-white">{active.title}</h3>
            <p className="text-white/65 leading-relaxed">{active.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {active.highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-4 rounded-2xl border border-white/08 hover:border-[#D87088]/30 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <CheckCircle className="w-4 h-4 text-[#D87088] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/75 leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#D87088] hover:bg-[#C55B74] text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_8px_30px_rgba(216,112,136,0.35)] cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Agendar Consulta
            </button>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div
              className="aspect-[4/3] rounded-3xl flex flex-col items-center justify-center border border-white/08 p-8 text-center"
              style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D87088]/15 flex items-center justify-center border border-[#D87088]/30 mb-4">
                <span className="text-[#D87088]">{getIcon(active.iconName, 'w-7 h-7')}</span>
              </div>
              <p className="font-serif text-lg font-semibold text-white">{active.title}</p>
              <p className="text-sm text-white/35 mt-1">Espaço reservado para imagem ilustrativa</p>
            </div>
            <div
              className="p-5 rounded-2xl border border-white/08"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D87088]/15 flex items-center justify-center shrink-0">
                  <span className="text-[#D87088]">{getIcon(active.iconName, 'w-5 h-5')}</span>
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-white">Tempo & Individualidade</p>
                  <p className="text-xs text-white/40 mt-0.5 leading-snug">Acompanhamento sem pressa, plano personalizado.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
