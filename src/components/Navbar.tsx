import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Instagram } from 'lucide-react';

interface NavbarProps { onOpenBooking: () => void; }

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Pilares', href: '#pilares' },
    { name: 'Atuação', href: '#especialidades' },
    { name: 'Atendimento', href: '#como-funciona' },
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-2xs border-b border-[#D87088]/15 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#121829] text-white flex items-center justify-center font-serif font-bold text-base border border-[#D87088]/40 group-hover:bg-[#D87088] transition-colors duration-300 shadow-2xs">mj</div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-semibold tracking-tight text-[#121829] group-hover:text-[#D87088] transition-colors">Dra. Maria Júlia Merhge</span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#D87088]">Clínica Médica • Família • Domiciliar</span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-bold tracking-widest uppercase text-[#3B4761]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[#D87088] transition-colors py-1">{link.name}</a>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-3">
            <a href="https://www.instagram.com/dramariajuliamerhge/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-[#121829] hover:bg-[#D87088]/10 hover:text-[#D87088] transition-colors border border-[#D87088]/20" title="Instagram Dra. Maria Júlia">
              <Instagram className="w-4 h-4 text-[#D87088]" />
            </a>
            <button onClick={onOpenBooking} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121829] hover:bg-[#D87088] text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer">
              <Calendar className="w-3.5 h-3.5 text-[#D87088]" />
              <span>Agendar</span>
            </button>
          </div>
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={onOpenBooking} className="sm:hidden px-3.5 py-1.5 rounded-full bg-[#121829] text-white text-xs font-semibold tracking-wider uppercase">Agendar</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#121829] rounded-lg hover:bg-[#D87088]/10 focus:outline-none" aria-label="Abrir menu de navegação">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[#D87088]/20 shadow-lg px-4 pt-4 pb-6 space-y-3 mt-2">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-xs font-bold tracking-widest uppercase text-[#121829] hover:bg-[#F8E8EC] hover:text-[#D87088] transition-colors">{link.name}</a>
          ))}
          <div className="pt-3 border-t border-[#D87088]/20">
            <button onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#121829] text-white font-semibold text-xs uppercase tracking-widest">
              <Calendar className="w-4 h-4 text-[#D87088]" />
              <span>Agendar Consulta</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
