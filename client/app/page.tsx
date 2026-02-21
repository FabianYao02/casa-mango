
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Nosotros from '@/components/Nosotros';
import Contacto from '@/components/Contacto';
import Menu from '@/components/Menu';


export default function Home() {

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <Navbar />
      <Hero />
      <Nosotros />
      <Menu/>
      <Contacto />      
      <Footer />      
    </div>
  );
}