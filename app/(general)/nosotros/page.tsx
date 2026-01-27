import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Grupo Garza",
  description: "Conoce nuestra misión y visión.",
};

const NosotrosPage = () => {
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
        
        {/* Sección 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            
          {/* Misión (Columna 1 y 2) */}
          <div className="md:col-span-2 order-1">
              <div className="w-full h-auto min-h-64 md:h-72 bg-[#FF5E14] text-white rounded-md flex flex-col items-start justify-start text-left p-6">
                  <div className="flex items-center gap-4 mb-2 flex-shrink-0">
                      <div className="w-14 h-14 relative">
                          <img 
                              src="https://res.cloudinary.com/drotzbucj/image/upload/v1769211305/6532dba4535ec4ad90b711ee_konz_about_25_fimgo3.png" 
                              alt="Icono Misión"
                              className="w-full h-full object-contain brightness-0 invert"
                          />
                      </div>
                      <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider">Misión</h2>
                  </div>
                  <div className="space-y-2 text-white/90 text-base md:text-sm lg:text-base leading-relaxed overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                      <p>
                          Grupo Garza es una empresa líder en el ramo de la construcción, mantenimiento y remodelaciones, caracterizada por mantener los más estrictos estándares de calidad.
                      </p>
                      <p>
                        Somos un centro de soluciones integrales conformado por un equipo humano altamente capacitado y confiable cuyo objetivo principal es conservar tu seguridad patrimonial.
                      </p>
                  </div>
              </div>
          </div>

          {/* Imagen Central (Columna 3) */}
          <div className="relative w-full bg-white rounded-md overflow-hidden h-64 md:h-72 order-2">
                <img 
                    src="https://res.cloudinary.com/drotzbucj/image/upload/v1769211336/6532dba4535ec4ad90b711f0_konz_about_07-1_m1gtmr.png" 
                    alt="Trabajador Grupo Garza"
                    className="w-full h-full object-cover object-[50%_15%]"
                />
          </div>

          {/* Visión (Columna 4) */}
          <div className="order-3">
              <div className="w-full h-auto min-h-64 md:h-72 bg-[#FF5E14] text-white rounded-md flex flex-col p-6 overflow-hidden">
                <div className="flex items-center gap-4 mb-2 flex-shrink-0">
                      <div className="w-14 h-14 relative">
                          <img 
                              src="https://res.cloudinary.com/drotzbucj/image/upload/v1769211302/6532dba4535ec4ad90b711f1_konz_about_21_wx1lrn.png" 
                              alt="Icono Visión"
                              className="w-full h-full object-contain brightness-0 invert"
                          />
                      </div>
                    <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider">Visión</h2>
                </div>
                  <div className="space-y-2 text-white/90 text-base md:text-sm lg:text-base leading-relaxed overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    <p>
                        En Grupo Garza buscamos ampliar nuestro equipo de colaboradores.
                    </p>
                    <p>
                        Con el fin de expandirnos en el área local y sus alrededores.
                    </p>
                </div>
              </div>
          </div>

        </div>

        {/* Sección 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Texto Transformando (1 Col) */}
          <div className="w-full h-auto min-h-64 md:h-72 flex flex-col justify-center p-5 md:p-5 order-1">
                <h2 className="text-3xl md:text-[36px] leading-none tracking-tight font-light italic text-center md:text-left">
                  <span className="block text-[#FF5E14] mb-1">TRANSFORMANDO</span>
                  <span className="block text-[#313238] mb-2">TU PRESENTE</span>
                  <span className="block text-[#FF5E14] text-xl md:text-[21px] mt-2">MANEJANDO LOS MEJORES</span>
                  <span className="block text-[#313238] text-xl md:text-[21px]">ESTÁNDARES DE CALIDAD</span>
              </h2>
          </div>

          {/* Imagen Central (2 Cols) */}
          <div className="md:col-span-2 relative w-full h-64 md:h-72 rounded-md overflow-hidden order-2">
              <img 
                  src="https://res.cloudinary.com/drotzbucj/image/upload/v1769222163/img04_plpv5m.png" 
                  alt="Transformando tu presente" 
                  className="w-full h-full object-cover"
              />
          </div>

          {/* Cotización (1 Col) */}
            <a 
              href="https://wa.me/522218382382" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-auto min-h-64 md:h-72 bg-[#FF5E14] text-white rounded-md flex flex-col items-center justify-center text-center p-6 transition-transform hover:scale-[1.02] cursor-pointer order-3"
            >
                  <div className="w-20 h-20 mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg 
                        className="w-12 h-12 text-white" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        fill="none" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                            fill="currentColor" 
                            fillRule="evenodd" 
                            d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" 
                            clipRule="evenodd" 
                        />
                        <path 
                            fill="currentColor" 
                            d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                        />
                      </svg>
                  </div>
                <h2 className="text-2xl font-bold uppercase tracking-wider mb-2">COTIZACIÓN</h2>
                  <p className="text-white/90 text-sm font-medium tracking-wide">
                    Contáctanos vía whatsapp <span className="font-bold underline decoration-1 underline-offset-2">click aquí</span>
                  </p>
            </a>

        </div>
      </div>
    </div>
  )
}

export default NosotrosPage
