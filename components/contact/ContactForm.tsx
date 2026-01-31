'use client';

import { useActionState } from 'react';
import { sendEmail } from '@/app/actions/contact';
import { useFormStatus } from 'react-dom';

const initialState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[#FF5E14] text-white font-bold py-3 px-6 rounded-md hover:bg-[#E04D0F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <span>Enviando...</span>
      ) : (
        <>
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"> 
             <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/> 
             <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/> 
          </svg>
          Enviar Mensaje
        </>
      )}
    </button>
  );
}

export const ContactForm = () => {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {/* Nombre Completo */}
      <div>
        <label htmlFor="nombre" className="block text-white text-sm font-bold mb-2">
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
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
          name="email"
          required
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-colors"
        />
      </div>

      {/* Teléfono */}
      <div>
        <label htmlFor="telefono" className="block text-white text-sm font-bold mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          required
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
          name="mensaje"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-colors resize-none"
        ></textarea>
      </div>

      {/* Mensaje de estado */}
      {state?.message && (
        <div className={`p-4 rounded-md text-sm text-center ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {state.message}
        </div>
      )}

      {/* Botón */}
      <div className="pt-4">
        <SubmitButton />
      </div>
    </form>
  );
};
