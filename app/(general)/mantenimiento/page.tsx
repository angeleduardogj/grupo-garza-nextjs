import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mantenimiento | Grupo Garza",
  description: "Servicios de Mantenimiento de Grupo Garza.",
};

const MantenimientoPage = () => {
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
        
        <div className="grid grid-cols-1 gap-6">
          {/* Sección 1: Imagen Principal */}
          <div className="relative w-full h-[352px] rounded-md overflow-hidden group">
            <img 
              src="https://res.cloudinary.com/drotzbucj/image/upload/v1769547402/Pag_Servicios_Residencial_jgovo2.jpg" 
              alt="Mantenimiento" 
              className="w-full h-full object-cover"
              style={{ objectPosition: "70% 70%" }}
            />
          </div>

          {/* Sección 2: Texto */}
          <div className="bg-[#313238] p-8 rounded-md flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-8 h-8 text-[#FF5E14]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path className="fill-[#FF5E14]" d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                Mantenimiento
              </h2>
            </div>

            <p className="text-white/90 text-lg mb-8 leading-relaxed text-center md:text-left">
              Líder en el ramo, caracterizados con los más estrictos estándares de calidad y mejoras, contamos con servicio de mantenimiento residencial y comercial.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-[#FF5E14] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                     </svg>
                     <span className="text-white text-lg">Albañilería.</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-[#FF5E14] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                     </svg>
                     <span className="text-white text-lg">Vidrio y Aluminio.</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-[#FF5E14] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                     </svg>
                     <span className="text-white text-lg">Pintura de interior y exterior.</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-[#FF5E14] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                     </svg>
                     <span className="text-white text-lg">Impermeabilización.</span>
                   </li>
                 </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MantenimientoPage
