import { Clock, MapPin } from "lucide-react";
export default function Contacto() {
    return (
        <section id="contacto" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Horarios */}
          <div className="bg-stone-800 text-white p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <Clock className="mb-6 text-orange-400" size={40} />
              <h3 className="text-2xl font-serif mb-6">Horarios de Atención</h3>
              <ul className="space-y-4 text-stone-300">
                <li className="flex justify-between border-b border-stone-700 pb-2">
                  <span>Lunes - Sabado</span>
                  <div className="flex flex-col items-end">
                    <span className="text-white font-medium">
                      9:00 AM - 1:00 PM
                    </span>
                    <span className="text-white font-medium">
                      6:00 PM - 11:00 PM
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-16 pt-8 border-t border-stone-800 relative z-10">
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="text-orange-400 shrink-0 mt-1" size={24} />
                <p className="text-stone-300 text-sm leading-relaxed">
                  Blvd. Presa la Angostura 325, CFE, 29040 Tuxtla Gutiérrez,
                  Chis.
                </p>
              </div>
              
            </div>
            <div className="mt-10">
              <p className="text-stone-400 text-sm">¿Deseas reservar?</p>
              <p className="text-xl font-bold">+52 961 216 2787</p>
            </div>
          </div>

          {/* Mapa (Placeholder) */}
          
          <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-2xl border border-stone-200 min-h-150 relative">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.4563297836194!2d-93.09037138839112!3d16.753957383962664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed2783de846725%3A0xfa9e4f667517cc14!2sCasa%20Mango%20Caf%C3%A9!5e0!3m2!1ses-419!2smx!4v1771230588054!5m2!1ses-419!2smx" 
            width="100%" 
            height="100%" 
            style={{ border: 200 }} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"            
            className="grayscale-[0.1] hover:grayscale-0 transition-all duration-700 brightness-[0.95] hover:brightness-100"
            title="Ubicacion de Casa Mango"></iframe>
          </div>
        </div>
      </section>
    )
}