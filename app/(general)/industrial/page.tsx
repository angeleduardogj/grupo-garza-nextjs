import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial | Grupo Garza",
  description: "Servicios Industriales de Grupo Garza.",
};

const IndustrialPage = () => {
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
        
        <div className="grid grid-cols-1 gap-6">
          {/* Sección 1: Imagen Principal */}
          <div className="relative w-full h-[352px] rounded-md overflow-hidden group">
            <img 
              src="https://res.cloudinary.com/drotzbucj/image/upload/v1769547364/Pag_Servicios_Industrial_udebjb.jpg" 
              alt="Industrial" 
              className="w-full h-full object-cover"
              style={{ objectPosition: "90% 20%" }}
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
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1v3a1 1 0 1 1-2 0v-3h-1v3a1 1 0 1 1-2 0v-3h-1v3a1 1 0 1 1-2 0v-3H7a1 1 0 1 1 0-2h3v-1H7a1 1 0 1 1 0-2h3V8H7a1 1 0 0 1 0-2h3V5a2 2 0 0 0-2-2H5Z"
                />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                Industrial
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-[#FF5E14] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                     </svg>
                     <span className="text-white text-lg">Imagen y diseño de render.</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-[#FF5E14] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                     </svg>
                     <span className="text-white text-lg">Creación de espacios.</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-[#FF5E14] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                     </svg>
                     <span className="text-white text-lg">Creación de planos.</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-[#FF5E14] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                     </svg>
                     <span className="text-white text-lg">Iluminación arquitectónica.</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-[#FF5E14] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                     </svg>
                     <span className="text-white text-lg">Diseño de muebles.</span>
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

export default IndustrialPage
