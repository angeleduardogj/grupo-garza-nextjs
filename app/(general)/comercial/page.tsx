import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comercial | Grupo Garza",
  description: "Servicios Comerciales de Grupo Garza.",
};

const ComercialPage = () => {
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
        
        <div className="grid grid-cols-1 gap-6">
          {/* Sección 1: Imagen Principal */}
          <div className="relative w-full h-[352px] rounded-md overflow-hidden group">
            <img 
              src="https://res.cloudinary.com/drotzbucj/image/upload/v1769547348/Pag_Servicios_Comercial_pzzqrn.jpg" 
              alt="Comercial" 
              className="w-full h-full object-cover"
              style={{ objectPosition: "90% 05%" }}
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
                  d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                Comercial
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
                 </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ComercialPage
