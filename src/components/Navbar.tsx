import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Instagram } from 'lucide-react';

interface NavbarProps { onOpenBooking: () => void; }

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Pilares', href: '#pilares' },
    { name: 'Atuação', href: '#especialidades' },
    { name: 'Atendimento', href: '#como-funciona' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D87088]/10 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#" className="group flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#121829] flex items-center justify-center font-serif font-semibold text-white text-sm border border-[#D87088]/30 group-hover:bg-[#D87088] transition-colors duration-300">
              mj
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-base font-semibold text-[#121829] group-hover:text-[#D87088] transition-colors block leading-tight">
                Dra. Maria Júlia Merhge
              </span>
              <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#D87088]/75 block">
                Clínica Médica · Família · Domiciliar
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[10px] font-bold tracking-[0.22em] uppercase text-[#121829]/55">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-[#D87088] transition-colors py-1">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.instagram.com/dramariajuliamerhge/"
              target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#D87088]/20 text-[#D87088] hover:bg-[#F8E8EC] transition-all"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121829] hover:bg-[#D87088] text-white font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Agendar
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-4 py-2 rounded-xl bg-[#121829] hover:bg-[#D87088] text-white text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
            >
              Agendar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#121829] hover:bg-[#F8E8EC] transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#D87088]/10 shadow-lg px-6 pt-3 pb-5 space-y-1 mt-1">
          {navLinks.map(link => (
            <a
              key={link.name} href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-xl text-xs font-bold tracking-[0.22em] uppercase text-[#121829]/65 hover:bg-[#F8E8EC] hover:text-[#D87088] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#D87088]/12">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#121829] hover:bg-[#D87088] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Agendar Consulta
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
