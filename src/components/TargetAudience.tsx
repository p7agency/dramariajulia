import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Calendar, Heart, CheckCircle2 } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/content';

interface TargetAudienceProps { onOpenBooking: () => void; }

export default function TargetAudience({ onOpenBooking }: TargetAudienceProps) {
  const [selected, setSelected] = useState<Record<string, boolean>>({ '1': true, '2': true, '3': true, '4': true, '5': true, '6': true });
  const toggleSelect = (id: string) => setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  const selectedCount = Object.values(selected).filter(Boolean).length;
  return (
    <section id="para-quem" className="py-24 lg:py-32 bg-[#FDF6F7] relative border-t border-[#D87088]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="lg:col-span-5 space-y-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#D87088]">Perfil de Atendimento</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#121829]">Para quem é este atendimento?</h2>
            <p className="text-base sm:text-lg text-[#3B4761] leading-relaxed">Este acompanhamento foi pensado para adultos e famílias que não se contentam com consultas superficiais ou apressadas.</p>
            <div className="p-6 rounded-2xl bg-white border border-[#D87088]/25 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 text-[#121829] font-bold text-xs uppercase tracking-wider"><Heart className="w-4 h-4 text-[#D87088]" /><span>Atendimento Centrado na Pessoa</span></div>
              <p className="text-xs text-[#3B4761] leading-relaxed">Seja para prevenir problemas futuros, tratar condições crônicas já diagnosticadas ou promover mais vitalidade para a sua vida, o plano de cuidado é construído sob medida para você.</p>
            </div>
            <button onClick={onOpenBooking} className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#121829] hover:bg-[#D87088] text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-md group cursor-pointer">
              <Calendar className="w-4 h-4 text-[#D87088] group-hover:text-white transition-colors" />
              <span>Agendar Atendimento Personalizado</span>
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D87088]/30 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D87088]/20">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#121829]">Este acompanhamento é ideal para você que busca:</h3>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#D87088] border-b border-[#D87088]/30 pb-0.5">{selectedCount} de {TARGET_AUDIENCE.length} selecionados</span>
              </div>
              <div className="space-y-3">
                {TARGET_AUDIENCE.map((item) => {
                  const isChecked = selected[item.id];
                  return (
                    <div key={item.id} onClick={() => toggleSelect(item.id)} className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${isChecked ? 'bg-[#FDF9FA] border-[#D87088] shadow-2xs' : 'bg-white border-[#D87088]/15 opacity-60 hover:opacity-100'}`}>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isChecked ? 'bg-[#D87088] text-white' : 'bg-white border border-[#D87088]/30 text-transparent'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-[#121829] leading-snug">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              {selectedCount > 0 && (
                <div className="mt-4 p-4 rounded-xl bg-[#F8E8EC] border border-[#D87088]/30 flex items-center justify-between text-xs text-[#121829]">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D87088]" /><span className="font-semibold text-xs">Sua saúde se encaixa perfeitamente no perfil de atendimento!</span></div>
                  <button onClick={onOpenBooking} className="font-bold underline text-[#D87088] hover:text-[#121829] uppercase text-[11px] tracking-wider shrink-0 ml-2 cursor-pointer">Agendar Agora</button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
