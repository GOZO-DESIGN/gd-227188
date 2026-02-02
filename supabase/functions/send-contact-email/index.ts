import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormRequest {
  service: string;
  preferredDate: string;
  preferredTime: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

const serviceLabels: Record<string, string> = {
  showkochen: "Showkochen Anfragen",
  beratung: "Beratungstermin",
  bestellung: "Bestellung",
  info: "Weitere Informationen",
};

const timeLabels: Record<string, string> = {
  vormittag: "Vormittag (9-12 Uhr)",
  mittag: "Mittag (12-14 Uhr)",
  nachmittag: "Nachmittag (14-17 Uhr)",
  abend: "Abend (17-20 Uhr)",
  flexibel: "Flexibel",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { service, preferredDate, preferredTime, name, phone, email, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return new Response(
        JSON.stringify({ error: "Pflichtfelder fehlen" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Ungültige E-Mail-Adresse" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate input lengths
    if (name.length > 100 || email.length > 255 || phone.length > 20 || message.length > 1000) {
      return new Response(
        JSON.stringify({ error: "Eingabe zu lang" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const formattedDate = preferredDate 
      ? new Date(preferredDate).toLocaleDateString('de-AT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      : 'Nicht angegeben';
    
    const formattedTime = preferredTime ? timeLabels[preferredTime] || preferredTime : 'Nicht angegeben';
    const formattedService = serviceLabels[service] || service;
    
    const logoUrl = "https://mybeigwjyoacyrdblbgm.supabase.co/storage/v1/object/public/email-assets/logo.svg?v=1";
    const primaryColor = "#00ac46";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; background: #f5f5f5; }
          .header { background: ${primaryColor}; color: white; padding: 30px; text-align: center; }
          .logo { max-width: 200px; height: auto; margin-bottom: 15px; }
          .content { padding: 30px; background: #ffffff; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: ${primaryColor}; display: block; margin-bottom: 5px; font-size: 14px; }
          .value { background: #f9f9f9; padding: 12px; border-radius: 6px; border-left: 3px solid ${primaryColor}; }
          .value a { color: ${primaryColor}; text-decoration: none; }
          .value a:hover { text-decoration: underline; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; background: #f5f5f5; }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="${logoUrl}" alt="Mix mit Prager Logo" class="logo" />
          <h1 style="margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Anfrage-Typ:</span>
            <div class="value">${formattedService}</div>
          </div>
          <div class="field">
            <span class="label">Name:</span>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <span class="label">Telefon:</span>
            <div class="value"><a href="tel:${phone}">${phone}</a></div>
          </div>
          <div class="field">
            <span class="label">E-Mail:</span>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
          </div>
          <div class="field">
            <span class="label">Wunschtermin:</span>
            <div class="value">${formattedDate}</div>
          </div>
          <div class="field">
            <span class="label">Bevorzugte Uhrzeit:</span>
            <div class="value">${formattedTime}</div>
          </div>
          ${message ? `
          <div class="field">
            <span class="label">Nachricht:</span>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
          ` : ''}
        </div>
        <div class="footer">
          <p>Diese Nachricht wurde über das Kontaktformular auf <a href="https://mixmitprager.at" style="color: ${primaryColor};">mixmitprager.at</a> gesendet.</p>
        </div>
      </body>
      </html>
    `;

    console.log("Sending contact email to steven@buenger-web.de");

    const emailResponse = await resend.emails.send({
      from: "Mix mit Prager <office@mixmitprager.at>",
      to: ["steven@buenger-web.de"],
      reply_to: email,
      subject: `Neue Anfrage: ${formattedService} von ${name}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to customer
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; background: #f5f5f5; }
          .header { background: ${primaryColor}; color: white; padding: 30px; text-align: center; }
          .logo { max-width: 200px; height: auto; margin-bottom: 15px; }
          .content { padding: 30px; background: #ffffff; }
          .content p { margin: 0 0 15px 0; }
          .content strong { color: ${primaryColor}; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; background: #f5f5f5; }
          .footer a { color: ${primaryColor}; text-decoration: none; }
          .footer a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="${logoUrl}" alt="Mix mit Prager Logo" class="logo" />
          <h1 style="margin: 0; font-size: 24px;">Vielen Dank für deine Anfrage!</h1>
        </div>
        <div class="content">
          <p>Hallo ${name},</p>
          <p>vielen Dank für deine Anfrage zum Thema <strong>${formattedService}</strong>.</p>
          <p>Ich habe deine Nachricht erhalten und werde mich so schnell wie möglich bei dir melden.</p>
          <p style="margin-top: 25px;">Mit freundlichen Grüßen,<br><strong>Bernhard Prager</strong><br>Dein Thermomix® Berater</p>
        </div>
        <div class="footer">
          <p><strong>Mix mit Prager</strong> - Thermomix® Beratung</p>
          <p>
            <a href="tel:+436763979250">+43 676 397 9250</a> | 
            <a href="mailto:office@mixmitprager.at">office@mixmitprager.at</a>
          </p>
          <p><a href="https://mixmitprager.at">www.mixmitprager.at</a></p>
        </div>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: "Mix mit Prager <office@mixmitprager.at>",
      to: [email],
      subject: "Ihre Anfrage bei Mix mit Prager",
      html: confirmationHtml,
    });

    console.log("Confirmation email sent to customer:", email);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
