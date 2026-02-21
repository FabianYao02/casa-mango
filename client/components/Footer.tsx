import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";
export default function Footer() {
    return(
        
      <footer className="bg-white border-t border-stone-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-stone-400 text-sm">
          <div className="text-center md:text-left">
            <div className="relative h-10 w-51 mx-auto md:mx-0 mb-4 opacity-50 hover:opacity-100 transition-opacity">
                 <Image 
                   src="/logo.png" 
                   alt="Casa Mango Logo"
                   width={372}
                   height={312}
                   className="w-full h-full object-contain object-center"
                 />
            </div>
            <p>© 2026 Casa Mango S.A. de C.V.</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/casamango.cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="hover:text-orange-700 transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/people/Casa-Mango-Café/100064071668985/"
              className="hover:text-orange-700 transition"
            >
              <Facebook size={24} />
            </a>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-stone-700 transition underline underline-offset-4"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="hover:text-stone-700 transition underline underline-offset-4"
            >
              Términos
            </a>
          </div>
        </div>
      </footer>
    )
}