'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  console.log('Intentando enviar correo...');
  if (!process.env.RESEND_API_KEY) {
    console.error('ERROR: RESEND_API_KEY no está definida en las variables de entorno.');
    return { message: 'Error de configuración del servidor (API Key faltante).', success: false };
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  if (!contactEmail) {
    console.error('ERROR: CONTACT_EMAIL no está definida en las variables de entorno.');
    return { message: 'Error de configuración del servidor (Email faltante).', success: false };
  }

  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  if (!resendFromEmail) {
    console.error('ERROR: RESEND_FROM_EMAIL no está definida en las variables de entorno.');
    return { message: 'Error de configuración del servidor (From Email faltante).', success: false };
  }

  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const telefono = formData.get('telefono') as string;
  const mensaje = formData.get('mensaje') as string;

  if (!nombre || !email || !telefono || !mensaje) {
    return { message: 'Por favor completa todos los campos.', success: false };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Grupo Garza Web <${resendFromEmail}>`,
      to: [contactEmail],
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo Mensaje - Grupo Garza</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #ffffff;">
          <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff;">
            
            <!-- Body -->
            <div style="padding: 20px;">
              <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://res.cloudinary.com/drotzbucj/image/upload/v1769533849/logo-colores_ace9lk.png" alt="Grupo Garza Logo" style="width: 220px; height: auto;">
              </div>
              <div style="padding: 0;">
                <p style="margin: 0 0 10px 0;"><strong>Nombre:</strong> <br> <span style="font-size: 16px;">${nombre}</span></p>
                <p style="margin: 0 0 10px 0;"><strong>Teléfono:</strong> <br> <span style="font-size: 16px;">${telefono}</span></p>
                <p style="margin: 0 0 15px 0;"><strong>Email:</strong> <br> <a href="mailto:${email}" style="color: #FF5E14; text-decoration: none; font-size: 16px;">${email}</a></p>
                
                <div style="margin-top: 15px;">
                  <p style="font-weight: bold; margin: 0 0 5px 0;">Mensaje:</p>
                  <div style="color: #333; line-height: 1.6; font-size: 16px;">
                    ${mensaje.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      // Devolvemos el mensaje exacto de error para depuración
      return { message: `Error: ${error.message}`, success: false };
    }

    return { message: '¡Mensaje enviado correctamente!', success: true };
  } catch (e: any) {
    console.error('Server error:', e);
    return { message: `Error interno: ${e.message}`, success: false };
  }
}
