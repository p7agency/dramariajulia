import { motion } from 'motion/react';
import { CheckCircle2, Award, Stethoscope, Instagram, Image as ImageIcon, Home } from 'lucide-react';
import { ABOUT_DATA } from '../data/content';

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#121829] text-white relative border-t border-[#D87088]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-6">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D87088]/40 shadow-2xl bg-gradient-to-br from-[#1B233A] via-[#121829] to-[#0D1220] flex flex-col items-center justify-between p-7 text-center group hover:border-[#D87088] transition-all duration-300">
                <div className="w-full flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[#D87088] border-b border-[#D87088]/20 pb-2.5">
                  <span>Perfil Profissional</span>
                  <span className="text-white/60">Itaperuna / RJ</span>
                </div>
                <div className="my-auto space-y-3 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#D87088]/20 border border-[#D87088]/40 flex items-center justify-center text-[#D87088] group-hover:scale-105 transition-transform duration-300 shadow-md"><ImageIcon className="w-8 h-8" /></div>
                  <div className="space-y-1">
                    <p className="font-serif text-lg font-semibold text-white">Dra. Maria Júlia Merhge</p>
                    <p className="text-xs text-[#F8E8EC]/70 max-w-xs font-sans">Espaço para a fotografia oficial da médica em atendimento presencial.</p>
                  </div>
                </div>
                <div className="w-full pt-3 border-t border-[#D87088]/20 text-center">
                  <span className="text-[10px] font-bold text-[#D87088] uppercase tracking-widest">Clínica Médica • Medicina de Família • Domiciliar</span>
                </div>
              </div>
              <a href="https://www.instagram.com/dramariajuliamerhge/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-white/5 backdrop-blur-md border border-[#D87088]/30 hover:border-[#D87088] hover:bg-white/10 shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#D87088]/20 text-[#D87088] flex items-center justify-center group-hover:bg-[#D87088] group-hover:text-white transition-colors"><Instagram className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Acompanhe no Instagram</p>
                    <p className="text-[11px] text-[#D87088] font-medium">@dramariajuliamerhge</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#D87088] group-hover:text-white transition-colors">Ver Perfil →</span>
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#D87088] border-b border-[#D87088]/30 pb-1">Trajetória e Propósito</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">{ABOUT_DATA.title}</h2>
              <p className="font-serif text-lg sm:text-xl text-[#D87088] font-normal italic">{ABOUT_DATA.subtitle}</p>
            </div>
            <div className="space-y-4 text-[#F8E8EC]/85 text-base sm:text-lg leading-relaxed">
              {ABOUT_DATA.paragraphs.map((para, index) => <p key={index}>{para}</p>)}
            </div>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-[#D87088]/20 hover:border-[#D87088] hover:bg-white/10 transition-all duration-300 shadow-sm group">
                <Stethoscope className="w-5 h-5 text-[#D87088] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div><h4 className="font-bold text-white text-xs uppercase tracking-wider">Atuação Aprofundada</h4><p className="text-xs text-[#F8E8EC]/70 mt-0.5">Clínica Médica e Medicina de Família integradas.</p></div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-[#D87088]/20 hover:border-[#D87088] hover:bg-white/10 transition-all duration-300 shadow-sm group">
                <Home className="w-5 h-5 text-[#D87088] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div><h4 className="font-bold text-white text-xs uppercase tracking-wider">Atendimento Domiciliar</h4><p className="text-xs text-[#F8E8EC]/70 mt-0.5">Visitas médicas no conforto do seu lar.</p></div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-[#D87088]/20 hover:border-[#D87088] hover:bg-white/10 transition-all duration-300 shadow-sm group">
                <Award className="w-5 h-5 text-[#D87088] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div><h4 className="font-bold text-white text-xs uppercase tracking-wider">Rigor Técnico</h4><p className="text-xs text-[#F8E8EC]/70 mt-0.5">Atualização científica constante e conduta segura.</p></div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-[#D87088]/20 hover:border-[#D87088] hover:bg-white/10 transition-all duration-300 shadow-sm group">
                <CheckCircle2 className="w-5 h-5 text-[#D87088] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div><h4 className="font-bold text-white text-xs uppercase tracking-wider">Atendimento Presencial</h4><p className="text-xs text-[#F8E8EC]/70 mt-0.5">Consultório e domiciliar em Itaperuna/RJ.</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
