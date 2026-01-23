import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#313238] text-white">
      <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-0 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1: Horarios */}
          <div className="bg-[#313238] text-white rounded-md h-auto md:h-72 flex flex-col overflow-hidden">
            <div className="w-full flex items-start justify-start bg-[#313238] px-4 py-2 md:py-1">
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
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  />
                </svg>
                <h5 className="text-2xl md:text-xl lg:text-2xl xl:text-2xl font-semibold tracking-tight text-white uppercase">
                  Horarios
                </h5>
              </div>
            </div>
            <ul role="list" className="p-4 md:p-4 lg:p-4 space-y-2 md:space-y-1 lg:space-y-2 flex-1 overflow-auto">
              <li className="flex items-center">
                <span className="text-white text-base md:text-sm lg:text-base">Lunes a Viernes 8:00 AM a 6:00 PM</span>
              </li>
              <li className="flex items-center">
                <span className="text-white text-base md:text-sm lg:text-base">Sábado 8:00 AM a 1:00 PM</span>
              </li>
              <li className="flex items-center">
                <span className="text-white text-base md:text-sm lg:text-base">Domingo Cerrado</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Contacto */}
          <div className="bg-[#313238] text-white rounded-md h-auto md:h-72 flex flex-col overflow-hidden">
            <div className="w-full flex items-start justify-start bg-[#313238] px-4 py-2 md:py-1">
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
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z" />
                </svg>
                <h5 className="text-2xl md:text-xl lg:text-2xl xl:text-2xl font-semibold tracking-tight text-white uppercase">
                  Contacto
                </h5>
              </div>
            </div>
            <ul role="list" className="p-4 md:p-4 lg:p-4 space-y-2 md:space-y-1 lg:space-y-2 flex-1 overflow-auto">
              <li className="flex items-center">
                <a href="tel:+525520703691" className="text-white text-base md:text-sm lg:text-base hover:underline">CDMX 552 070 3691</a>
              </li>
              <li className="flex items-center">
                <a href="tel:+522218382382" className="text-white text-base md:text-sm lg:text-base hover:underline">Puebla 221 838 2382</a>
              </li>
              <li className="flex items-center">
                <a href="tel:+527441072249" className="text-white text-base md:text-sm lg:text-base hover:underline">Acapulco 744 107 2249</a>
              </li>
              <li className="flex items-center">
                <a href="mailto:grupogarza01@gmail.com" className="text-white text-base md:text-sm lg:text-base hover:underline">grupogarza01@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
