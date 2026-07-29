import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Calendar, Heart, CheckCircle2 } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/content';

interface TargetAudienceProps { onOpenBooking: () => void; }

export default function TargetAudience({ onOpenBooking }: TargetAudienceProps) {
  const [selected, setSelected] = useState<Record<string, boolean>>(
    Object.fromEntries(TARGET_AUDIENCE.map(t => [t.id, true]))
  );
  const toggle = (id: string) => setSelected(prev => ({ ...prev, [id]: !prev[id] }));
  const count = Object.values(selected).filter(Boolean).length;

  return (
    <section id="para-quem" className="relative py-20 lg:py-28 bg-[#FDFAF8] overflow-hidden">
      <div className="absolute -top-24 right-0 w-80 h-80 bg-[#D87088]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#D87088]/60" />
              <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#D87088]/80">Perfil de Atendimento</span>
            </div>
            <h2
              className="font-serif text-[#121829]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Para quem é este atendimento?
            </h2>
            <p className="text-base text-[#3B4761]/70 leading-relaxed">
              Este acompanhamento foi pensado para adultos e famílias que não se contentam com consultas superficiais ou apressadas.
            </p>
            <div className="p-5 rounded-2xl bg-white border border-[#D87088]/15 space-y-2">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#D87088]" />
                <span className="text-xs font-bold text-[#121829] uppercase tracking-wide">Atendimento Centrado na Pessoa</span>
              </div>
              <p className="text-sm text-[#3B4761]/60 leading-relaxed">
                Seja para prevenir, tratar condições crônicas ou promover mais vitalidade, o plano é construído sob medida para você.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#121829] hover:bg-[#D87088] text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Agendar Atendimento
            </button>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white rounded-3xl p-6 border border-[#D87088]/15 shadow-[0_12px_40px_rgba(216,112,136,0.08)]">
              <div className="flex items-center justify-between pb-4 border-b border-[#D87088]/10 mb-4">
                <h3 className="font-serif text-lg font-semibold text-[#121829] leading-snug">
                  Você busca:
                </h3>
                <span className="text-[9px] font-bold tracking-widest uppercase text-[#D87088]/55 shrink-0 ml-2">{count}/{TARGET_AUDIENCE.length}</span>
              </div>
              <div className="space-y-2.5">
                {TARGET_AUDIENCE.map(item => {
                  const checked = selected[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggle(item.id)}
                      className={`flex items-start gap-3 p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        checked
                          ? 'bg-[#FDF5F7] border-[#D87088]/30'
                          : 'bg-white border-[#D87088]/10 opacity-50 hover:opacity-75'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        checked ? 'bg-[#D87088] text-white' : 'border border-[#D87088]/25 text-transparent'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <p className="text-sm text-[#121829] leading-snug">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              {count > 0 && (
                <div className="mt-4 p-4 rounded-2xl bg-[#F8E8EC] border border-[#D87088]/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D87088] shrink-0" />
                    <span className="text-xs font-semibold text-[#121829]">Você se encaixa neste perfil!</span>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="text-[11px] font-bold text-[#D87088] uppercase tracking-wider hover:underline cursor-pointer shrink-0"
                  >
                    Agendar →
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
