import { Resend } from 'resend';
import { NextResponse } from 'next/server';

/**
 * API Route para enviar emails de contacto usando Resend
 * POST /api/contact
 */
export async function POST(request: Request) {
  try {
    // Inicializar Resend solo cuando se necesite (lazy initialization)
    // Esto evita errores durante el build time
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Extraer datos del formulario
    const { name, email, message } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Enviar email usando Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Cambiar cuando tengas dominio verificado
      to: process.env.CONTACT_EMAIL || 'tu-email@gmail.com', // Tu email real
      replyTo: email, // Email del cliente para poder responder directamente
      subject: `Nuevo mensaje de ${name} - Portfolio`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1e40af; margin-bottom: 5px; }
              .value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1e40af; }
              .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">📧 Nuevo Mensaje de Contacto</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Recibido desde tu portfolio</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Nombre:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">💬 Mensaje:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="footer">
                  <p>💡 Puedes responder directamente a este email para contactar al cliente</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email enviado correctamente', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar email:', error);
    
    return NextResponse.json(
      { error: 'Error al enviar el email. Por favor intenta de nuevo.' },
      { status: 500 }
    );
  }
}

