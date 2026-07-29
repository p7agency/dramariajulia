import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Specialties from './components/Specialties';
import Process from './components/Process';
import Manifesto from './components/Manifesto';
import TargetAudience from './components/TargetAudience';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const handleOpenBooking = () => setBookingModalOpen(true);
  const handleCloseBooking = () => setBookingModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F4] text-[#1C2426] font-sans">
      <Navbar onOpenBooking={handleOpenBooking} />
      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <Pillars />
        <Specialties onOpenBooking={handleOpenBooking} />
        <Process onOpenBooking={handleOpenBooking} />
        <Manifesto />
        <TargetAudience onOpenBooking={handleOpenBooking} />
        <FAQSection />
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>
      <Footer onOpenBooking={handleOpenBooking} />
      <AppointmentModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
      <a
        href="https://wa.me/5522999999999?text=Olá Dra. Maria Júlia, gostaria de agendar uma consulta."
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:bg-[#20ba59] transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center group"
        title="Falar com a Dra. Maria Júlia no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">Agendar no WhatsApp</span>
      </a>
    </div>
  );
}
