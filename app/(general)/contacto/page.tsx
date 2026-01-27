import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Grupo Garza",
  description: "Ponte en contacto con Grupo Garza para tus proyectos de construcción y mantenimiento.",
};

const ContactoPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-screen-md px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl leading-none tracking-tight font-light italic uppercase">
            <span className="block text-[#FF5E14]">CONTÁCTANOS</span>
          </h1>
        </div>
        
        <div className="bg-[#313238] p-8 md:p-10 rounded-md shadow-xl">
          <form className="space-y-6">
            {/* Nombre Completo */}
            <div>
              <label htmlFor="nombre" className="block text-white text-sm font-bold mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-colors"
              />
            </div>

            {/* Correo Electrónico */}
            <div>
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-colors"
              />
            </div>

            {/* ¿Cómo podemos ayudarte? */}
            <div>
              <label htmlFor="mensaje" className="block text-white text-sm font-bold mb-2">
                ¿Cómo podemos ayudarte?
              </label>
              <textarea
                id="mensaje"
                rows={5}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Botón y Leyenda */}
            <div className="pt-4">
              <button
                type="button"
                disabled
                className="w-full bg-[#FF5E14] text-white font-bold py-3 px-6 rounded-md opacity-50 cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"> 
                   <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/> 
                   <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/> 
                 </svg>
                Enviar Mensaje
              </button>
              <p className="text-center text-white/60 text-sm mt-3 italic">
                * En construcción: El formulario estará disponible próximamente.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactoPage
