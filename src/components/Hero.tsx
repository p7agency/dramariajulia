import { motion } from 'motion/react';
import { Calendar, ArrowRight, Home, Clock, Heart, PhoneCall, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { HERO_DATA } from '../data/content';

interface HeroProps { onOpenBooking: () => void; }

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 bg-[#FDF8F9] text-[#121829] border-b border-[#D87088]/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D87088]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-7 space-y-7 text-left">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#D87088]">
                <span>DRA. MARIA JÚLIA MERHGE</span>
                <span className="text-[#D87088]/40">•</span>
                <span className="text-[#3B4761]">CLÍNICA MÉDICA & MEDICINA DE FAMÍLIA</span>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#121829] tracking-tight leading-[1.05]">MEDICINA PARA A VIDA</h1>
              <div className="border-l-3 border-[#D87088] pl-4 py-1">
                <p className="font-serif text-lg sm:text-2xl text-[#D87088] font-normal italic leading-snug">"Atendimento médico preventivo e integral, focado na pessoa e em suas necessidades reais."</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#D87088]/25 shadow-xs space-y-1.5 hover:border-[#D87088] transition-colors">
                <div className="flex items-center gap-2 text-[#D87088]"><Clock className="w-4 h-4 shrink-0" /><span className="text-[10px] font-bold uppercase tracking-[0.18em]">Tempo</span></div>
                <p className="text-xs font-bold text-[#121829]">Consultas Estendidas</p>
                <p className="text-[11px] text-[#3B4761] leading-normal">Tempo dedicado a ouvir sua história com calma e atenção.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#D87088]/25 shadow-xs space-y-1.5 hover:border-[#D87088] transition-colors">
                <div className="flex items-center gap-2 text-[#D87088]"><Heart className="w-4 h-4 shrink-0" /><span className="text-[10px] font-bold uppercase tracking-[0.18em]">Escuta</span></div>
                <p className="text-xs font-bold text-[#121829]">Cuidado Individual</p>
                <p className="text-[11px] text-[#3B4761] leading-normal">Planos de saúde personalizados alinhados ao seu ritmo.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#D87088]/25 shadow-xs space-y-1.5 hover:border-[#D87088] transition-colors">
                <div className="flex items-center gap-2 text-[#D87088]"><Home className="w-4 h-4 shrink-0" /><span className="text-[10px] font-bold uppercase tracking-[0.18em]">Presencial</span></div>
                <p className="text-xs font-bold text-[#121829]">Consultório & Domicílio</p>
                <p className="text-[11px] text-[#3B4761] leading-normal">Atendimento presencial em Itaperuna ou na sua residência.</p>
              </div>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button onClick={onOpenBooking} className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#121829] hover:bg-[#D87088] text-white font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <Calendar className="w-4 h-4 text-[#D87088] group-hover:text-white transition-colors" />
                <span>Agendar Consulta</span>
                <ArrowRight className="w-4 h-4 text-white ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-[#D87088]/50 text-[#121829] hover:bg-[#F8E8EC] font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300">
                <PhoneCall className="w-4 h-4 text-[#D87088]" />
                <span>Falar via WhatsApp</span>
              </a>
            </div>
            <div className="pt-4 border-t border-[#D87088]/20 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#3B4761]">
              <span className="inline-flex items-center gap-1.5 font-medium"><CheckCircle2 className="w-4 h-4 text-[#D87088]" />Emissão de recibo para reembolso</span>
              <span className="inline-flex items-center gap-1.5 font-medium"><CheckCircle2 className="w-4 h-4 text-[#D87088]" />Acompanhamento contínuo</span>
              <span className="inline-flex items-center gap-1.5 font-medium"><CheckCircle2 className="w-4 h-4 text-[#D87088]" />Itaperuna / RJ</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D87088]/30 shadow-xl bg-gradient-to-b from-[#121829] via-[#1A233B] to-[#121829] flex flex-col items-center justify-between p-7 text-center group">
              <div className="w-full flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-[#D87088] border-b border-[#D87088]/20 pb-3">
                <span>Fotografia Médica</span>
                <span className="text-white/50">Itaperuna / RJ</span>
              </div>
              <div className="my-auto space-y-3.5 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#D87088]/15 border border-[#D87088]/40 flex items-center justify-center text-[#D87088] shadow-inner"><ImageIcon className="w-9 h-9" /></div>
                <div className="space-y-1 max-w-xs">
                  <p className="font-serif text-2xl font-semibold text-white tracking-wide">Dra. Maria Júlia Merhge</p>
                  <p className="text-xs text-[#D87088] font-bold uppercase tracking-widest">Clínica Médica • CRM-RJ</p>
                  <p className="text-xs text-[#F8E8EC]/70 leading-relaxed font-sans pt-1">Espaço reservado para a fotografia oficial no consultório.</p>
                </div>
              </div>
              <div className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-[#D87088]/25 text-left text-xs space-y-1.5 shadow-sm">
                <p className="font-serif italic text-[#F8E8EC] text-xs sm:text-sm leading-relaxed">"Compreender a pessoa é tão importante quanto compreender a doença."</p>
                <div className="flex items-center justify-between pt-1 border-t border-[#D87088]/20 text-[10px]">
                  <span className="text-[#F8E8EC]/60">Atendimento Humanizado</span>
                  <span className="text-[#D87088] font-bold uppercase tracking-widest">— Dra. Maria Júlia</span>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#D87088]/25 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#F8E8EC] text-[#D87088] flex items-center justify-center shrink-0"><Home className="w-4 h-4" /></div>
                <div>
                  <p className="text-xs font-bold text-[#121829] uppercase tracking-wider">Itaperuna / RJ</p>
                  <p className="text-[11px] text-[#3B4761]">Consultório Físico & Visitas Domiciliares</p>
                </div>
              </div>
              <button onClick={onOpenBooking} className="px-3.5 py-1.5 rounded-lg bg-[#121829] hover:bg-[#D87088] text-white text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer">Agendar</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
