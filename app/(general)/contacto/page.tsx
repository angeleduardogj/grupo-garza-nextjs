import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

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
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactoPage
