import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";

const collageItems = [
  { title: "Mantenimiento", src: "https://res.cloudinary.com/drotzbucj/image/upload/v1769135065/65a58e485c77ab7e993c4bcf_pexels-ksenia-chernaya-5768187-1-684x1024_syzp76.jpg", objectPosition: "70% 70%", href: "/mantenimiento" },
  { title: "Ingeniería", src: "https://res.cloudinary.com/drotzbucj/image/upload/v1769135064/65a5c5fe51c4120f9f61000b_pexels-thisisengineering-3912982-p-500_xp1sug.jpg", objectPosition: "50% 50%", href: "/ingenieria" },
  { title: "Industrial", src: "https://res.cloudinary.com/drotzbucj/image/upload/v1769135053/unnamed_n0c0fz.jpg", objectPosition: "90% 20%", href: "/industrial" },
  { title: "Comercial", src: "https://res.cloudinary.com/drotzbucj/image/upload/v1769135058/6532dba4535ec4ad90b711ae_p1_w4mywf.jpg", objectPosition: "90% 05%", href: "/comercial" },
];

const categories = [
  { title: "Industrial", src: "https://picsum.photos/800/600?random=5" },
  { title: "Comercial", src: "https://picsum.photos/800/600?random=6" },
  { title: "Residencial", src: "https://picsum.photos/800/600?random=7" },
];

const categoryDetails: Record<string, string[]> = {
  Industrial: [
    "Obra civil.",
    "Proyecto llave en mano.",
    "Estructura metálica.",
    "Diseño.",
  ],
  Comercial: [
    "Remodelación.",
    "Diseño y creación de muebles.",
    "Diseño de interior y exterior.",
  ],
  Residencial: [
    "Albañilería.",
    "Plomería.",
    "Impermeabilización.",
    "Carpintería.",
  ],
};

const infoCards = [
  {
    title: "INOVACIÓN",
    description: "Creando mejoras continuas.",
    className: "bg-[#FF5E14] md:left-0 md:top-1/2 md:-translate-y-1/2",
  },
  {
    title: "TRANSFORMACIÓN",
    description: "Mejorando tu presente, construyendo tu futuro.",
    className: "bg-[#313238] md:right-0 md:top-4",
  },
  {
    title: "CALIDAD",
    description: "Capacidad de repuesta, responsabilidad, honestidad, actitud de servicio.",
    className: "bg-[#FF5E14] md:right-0 md:bottom-4",
  },
];

const HomeSections = () => {
  return (
    <section className="">
      
    {/* <div className="bg-[#313238] py-8">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 h-64 md:h-72">
            <div className="relative rounded-md overflow-hidden h-full">
              <Carousel heightClass="h-full" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-[#313238] py-8">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Imagen Izquierda */}
            <div className="relative w-full bg-white rounded-md overflow-hidden h-64 md:h-72">
              <img
                src="https://res.cloudinary.com/drotzbucj/image/upload/v1769019263/633149ee6aae60a47986e065_img1_s0lqre.jpg"
                alt="Imagen de fondo"
                className="w-full h-full object-cover object-[90%_15%]"
              />
            </div>
            {categories.map((cat) => (
              <div key={cat.title} className="bg-[#313238] text-white rounded-md h-80 md:h-72 flex flex-col overflow-hidden">
                <div className="w-full flex items-start justify-start bg-[#313238] px-4 py-2 md:py-1">
                  <div className="flex items-center gap-2">
                    {cat.title === "Industrial" && (
                      <svg
                        className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 text-orange-600"
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
                    )}
                    {cat.title === "Comercial" && (
                      <svg
                        className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 text-orange-600"
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
                    )}
                    {cat.title === "Residencial" && (
                      <svg
                        className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 text-orange-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path className="fill-orange-600" d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z" />
                      </svg>
                    )}
                    <h5 className="text-2xl md:text-xl lg:text-2xl xl:text-2xl font-semibold tracking-tight text-white uppercase">
                      {cat.title}
                    </h5>
                  </div>
                </div>
                <ul role="list" className="p-4 md:p-4 lg:p-4 space-y-2 md:space-y-1 lg:space-y-2 flex-1 overflow-auto">
                  {categoryDetails[cat.title].map((pt) => (
                    <li key={pt} className="flex items-center">
                      <svg
                        className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5 text-orange-600 shrink-0 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                        />
                      </svg>
                      <span className="text-white text-base md:text-sm lg:text-base">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    
      <div className=" py-8">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[352px] items-center">
            {/* Columna 1: Inovación */}
            <div className="h-full flex items-center order-2 md:order-1">
              <a
                href="#"
                className="block w-full md:h-[calc(50%-8px)] p-4 rounded-md transition-colors text-white bg-[#FF5E14] flex flex-col justify-center"
              >
                <h5 className="mb-2 text-xl font-semibold tracking-tight leading-7 text-white">
                  {infoCards[0].title}
                </h5>
                <p className="text-white/90 text-sm">
                  {infoCards[0].description}
                </p>
              </a>
            </div>

            {/* Columna 2 y 3: Imagen */}
            <div className="md:col-span-2 h-full flex items-center justify-center relative overflow-hidden order-1 md:order-2">
              <img
                src="https://res.cloudinary.com/drotzbucj/image/upload/v1769137279/6532dba4535ec4ad90b711d4_mosaic_ajyvh8.png"
                alt="Imagen principal sección"
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* Columna 4: Transformación y Calidad */}
            <div className="flex flex-col h-full gap-4 order-3 md:order-3">
              <a
                href="#"
                className="block w-full flex-1 p-4 rounded-md transition-colors text-white bg-[#313238] flex flex-col justify-center"
              >
                <h5 className="mb-2 text-xl font-semibold tracking-tight leading-7 text-white">
                  {infoCards[1].title}
                </h5>
                <p className="text-white/90 text-sm">
                  {infoCards[1].description}
                </p>
              </a>
              <a
                href="#"
                className="block w-full flex-1 p-4 rounded-md transition-colors text-white bg-[#FF5E14] flex flex-col justify-center"
              >
                <h5 className="mb-2 text-xl font-semibold tracking-tight leading-7 text-white">
                  {infoCards[2].title}
                </h5>
                <p className="text-white/90 text-sm">
                  {infoCards[2].description}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#313238] py-8">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {collageItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="relative w-full rounded-md overflow-hidden group block"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={800}
                  height={600}
                  unoptimized
                  className="w-full h-64 md:h-72 object-cover"
                  style={{ objectPosition: (item as any).objectPosition ?? "50% 50%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20 transition-colors duration-200 group-hover:from-black/40 group-hover:to-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold uppercase text-lg md:text-xl lg:text-2xl transition-transform duration-200 group-hover:scale-105">
                {item.title}
              </p>
            </div>
          </Link>
            ))}
          </div>
        </div>
      </div>



         <div className=" py-8">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-72 items-center">
            {/* Columna 1 y 2: Proyectos Arquitectónicos */}
            <div className="md:col-span-2 bg-[#313238] text-white rounded-md h-full flex flex-col overflow-hidden">
              <div className="w-full flex items-start justify-start bg-[#313238] px-4 py-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 text-orange-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path className="fill-orange-600" d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z" />
                  </svg>
                  <h5 className="text-xl font-semibold tracking-tight text-white uppercase leading-tight">
                    PROYECTOS ARQUITECTONICOS
                  </h5>
                </div>
              </div>
              <div className="px-4 pb-2 text-sm text-white/90">
                Siempre enfocados en la excelencia del servicio.
              </div>
              
              <div className="flex-1 overflow-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Sub-columna 1 */}
                  <ul role="list" className="space-y-2">
                    <li className="font-bold text-orange-600">Arquitectura:</li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 text-orange-600 shrink-0 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                        </svg>
                        <span className="text-white text-sm">Imagen y diseño de render.</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 text-orange-600 shrink-0 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                        </svg>
                        <span className="text-white text-sm">Creación de espacios.</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 text-orange-600 shrink-0 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                        </svg>
                        <span className="text-white text-sm">Creación de planos.</span>
                    </li>
                  </ul>

                  {/* Sub-columna 2 */}
                  <ul role="list" className="space-y-2">
                    <li className="font-bold text-orange-600">Proyectos arquitectónicos:</li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 text-orange-600 shrink-0 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                        </svg>
                        <span className="text-white text-sm">Iluminación arquitectónica.</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 text-orange-600 shrink-0 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"/>
                        </svg>
                        <span className="text-white text-sm">Diseño de muebles.</span>
                    </li>
                  </ul>
              </div>
            </div>

            {/* Columna 3 y 4: Imagen */}
            <div className="md:col-span-2 h-full flex items-center justify-center relative overflow-hidden rounded-md">
              <img
                src="https://res.cloudinary.com/drotzbucj/image/upload/v1769151224/img06_j7hnto.jpg"
                alt="Proyectos Arquitectónicos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomeSections
