import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

interface FooterProps { onOpenBooking: () => void; }

export default function Footer({ onOpenBooking }: FooterProps) {
  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Pilares', href: '#pilares' },
    { name: 'Áreas de Atuação', href: '#especialidades' },
    { name: 'Como Acontece', href: '#como-funciona' },
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Para Quem', href: '#para-quem' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-[#0D1018] text-white pt-16 pb-10 border-t border-white/05">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/06">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-serif font-semibold text-white text-lg shrink-0"
                style={{ background: 'linear-gradient(135deg, #1A233A, #0F1626)', border: '1.5px solid rgba(216,112,136,0.35)' }}
              >
                mj
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-white leading-tight">Dra. Maria Júlia Merhge</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D87088]/65">Clínica Médica · Medicina de Família</p>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">
              Cuidado médico baseado em ciência, tempo e individualidade. Atendimento presencial e domiciliar em Itaperuna/RJ.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://www.instagram.com/dramariajuliamerhge/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/08 text-xs font-bold text-white/50 hover:text-white hover:border-[#D87088]/40 uppercase tracking-wider transition-all"
              >
                <Instagram className="w-4 h-4 text-[#D87088]" /> Instagram
              </a>
              <a
                href="https://wa.me/5522999999999"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/08 text-xs font-bold text-white/50 hover:text-white hover:border-[#D87088]/40 uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#D87088]" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[9px] font-black uppercase tracking-[0.38em] text-[#D87088]/55">Navegação</p>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs text-white/35 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[9px] font-black uppercase tracking-[0.38em] text-[#D87088]/55">Atendimento</p>
            <div className="space-y-3 text-xs text-white/40">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D87088] shrink-0 mt-0.5" />
                <span>Itaperuna / RJ — Consultório Presencial & Domiciliar</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D87088] shrink-0" />
                <span>Agendamentos via WhatsApp</span>
              </div>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#D87088] hover:bg-[#C55B74] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Agendar Consulta
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/18">
          <p>© {new Date().getFullYear()} Dra. Maria Júlia Merhge. Todos os direitos reservados.</p>
          <p className="uppercase tracking-widest">Medicina para a Vida</p>
        </div>
      </div>
    </footer>
  );
}
