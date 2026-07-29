import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

interface FooterProps { onOpenBooking: () => void; }

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#121829] text-white pt-16 pb-12 border-t border-[#D87088]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D87088]/20">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D87088]/20 text-[#D87088] flex items-center justify-center font-serif font-bold text-lg border border-[#D87088]/40">mj</div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-tight">Dra. Maria Júlia Merhge</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D87088] font-bold">Clínica Médica • Medicina de Família</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#F8E8EC]/80 leading-relaxed max-w-md">Cuidado médico baseado em ciência, tempo e individualidade. Atendimento em Clínica Médica e Medicina de Família em Itaperuna/RJ e região.</p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="https://www.instagram.com/dramariajuliamerhge/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/10 hover:bg-[#D87088] text-white transition-all border border-[#D87088]/30 flex items-center gap-2 text-xs font-semibold px-4 uppercase tracking-wider group">
                <Instagram className="w-4 h-4 text-[#D87088] group-hover:text-white transition-colors" />
                <span>@dramariajuliamerhge</span>
              </a>
              <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/10 hover:bg-[#D87088] text-white transition-all border border-[#D87088]/30 flex items-center gap-2 text-xs font-semibold px-4 uppercase tracking-wider group">
                <MessageCircle className="w-4 h-4 text-[#D87088] group-hover:text-white transition-colors" />
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#D87088] tracking-[0.2em] uppercase">Navegação</h4>
            <ul className="space-y-2 text-xs text-[#F8E8EC]/70">
              <li><a href="#sobre" className="hover:text-white hover:underline transition-colors">Conheça a Dra. Maria Júlia</a></li>
              <li><a href="#pilares" className="hover:text-white hover:underline transition-colors">Os Pilares da Prática Médica</a></li>
              <li><a href="#especialidades" className="hover:text-white hover:underline transition-colors">Áreas de Atuação</a></li>
              <li><a href="#como-funciona" className="hover:text-white hover:underline transition-colors">Como Acontece o Atendimento</a></li>
              <li><a href="#manifesto" className="hover:text-white hover:underline transition-colors">Manifesto Medicina para a Vida</a></li>
              <li><a href="#para-quem" className="hover:text-white hover:underline transition-colors">Para Quem É Este Atendimento</a></li>
              <li><a href="#faq" className="hover:text-white hover:underline transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-[#D87088] tracking-[0.2em] uppercase">Atendimento e Localização</h4>
            <div className="space-y-2.5 text-xs text-[#F8E8EC]/80">
              <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#D87088] shrink-0 mt-0.5" /><span>Itaperuna / RJ e região (Consultório Presencial)</span></div>
              <div className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-[#D87088] shrink-0" /><span>Agendamentos via WhatsApp e Telefone</span></div>
            </div>
            <button onClick={onOpenBooking} className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#D87088] hover:bg-[#C55B74] text-white font-bold text-xs uppercase tracking-widest transition-colors shadow-md">
              <span>Agendar Consulta</span>
            </button>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D87088] gap-4">
          <p>© {new Date().getFullYear()} Dra. Maria Júlia Merhge. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 uppercase tracking-wider font-semibold text-[#F8E8EC]/60">
            <span>Medicina para a Vida</span><span className="mx-1">•</span><span>Clínica Médica & Medicina de Família</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
