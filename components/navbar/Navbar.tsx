'use client'
import { useState } from "react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    {
        href: "/",
        label: "Inicio",
    },
     {
        href: "/nosotros",
        label: "Nosotros",
    },
        {
        href: "/servicios",
        label: "Servicios",
    },
    {
        href: "/proyectos",
        label: "Proyectos",
    },
    {
        href: "/contacto",
        label: "Contacto",
    },
   
]

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  return (
    <header>
      <nav className="bg-white px-0 h-24 relative z-50">
        <div className="flex flex-nowrap justify-between items-center mx-auto max-w-screen-xl h-full">
          <Link href="/" className="flex self-stretch">
            <div className="relative flex items-center justify-center h-full bg-[#FF5E14] w-64 md:w-75.5 px-0 overflow-hidden">
              <img
                src="https://res.cloudinary.com/drotzbucj/image/upload/v1769139741/logo-white_jyxbi1.png"
                className="h-full w-full object-contain origin-center scale-[1.9] sm:scale-[2.1]"
                alt="Logo"
              />
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4 ml-4 mr-auto lg:order-2 lg:w-72 lg:justify-center lg:ml-0 lg:mr-0 lg:pr-0">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#313238] hover:text-orange-600"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#313238] hover:text-orange-600"
              >
                <svg
                  className="w-6 h-6"
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
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#313238] hover:text-orange-600 -mr-1"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
          </div>

          <div className="flex items-center gap-4 pr-4 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 ml-1 rounded-md lg:hidden text-[#313238] hover:text-orange-600 focus:outline-none"
              aria-controls="mobile-menu-2"
              aria-expanded={open}
              onClick={toggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${open ? "hidden" : "block"} text-current`}
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
              </svg>
              <svg
                className={`w-6 h-6 ${open ? "block" : "hidden"} text-current`}
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
              </svg>
            </button>
          </div>

          <div
            id="mobile-menu-2"
            className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 
              absolute top-0 left-0 bg-white -z-10 pt-24 px-4 pb-4 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 lg:h-full lg:bg-transparent lg:p-0 lg:shadow-none lg:border-none lg:z-auto
              transition-transform duration-500 ease-in-out
              ${open ? "translate-y-0" : "-translate-y-full lg:translate-y-0"}`}
          >
            <ul className="flex flex-col mt-4 font-semibold tracking-tight uppercase lg:flex-row lg:space-x-8 lg:mt-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <ActiveLink
                    path={item.href}
                    text={item.label}
                    className="block py-2 pr-4 pl-3 text-[#313238] lg:p-0 hover:text-orange-600"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
