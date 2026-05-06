import { NextRequest, NextResponse } from "next/server";

// TODO: Connecter un service d'emailing ici (Nodemailer, Resend, SendGrid, etc.)
// Exemple avec Resend :
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const data = {
      nom: formData.get("nom") as string,
      prenom: formData.get("prenom") as string,
      email: formData.get("email") as string,
      telephone: formData.get("telephone") as string,
      adresse: formData.get("adresse") as string,
      typeProjet: formData.get("typeProjet") as string,
      description: formData.get("description") as string,
      localisation: formData.get("localisation") as string,
      horaire: formData.get("horaire") as string,
      rgpd: formData.get("rgpd") as string,
    };

    // Validation côté serveur
    if (!data.nom || !data.email || !data.description) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // TODO: Intégrer l'envoi d'email ici
    // Exemple avec Nodemailer :
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail({
    //   from: "site@lccb-44.com",
    //   to: "contact@lccb-44.com",
    //   subject: `Nouvelle demande de ${data.prenom} ${data.nom} — ${data.typeProjet}`,
    //   html: buildEmailHtml(data),
    // });

    // TODO: Exemple avec Resend :
    // await resend.emails.send({
    //   from: "LCCB Site <noreply@lccb-44.com>",
    //   to: ["contact@lccb-44.com"],
    //   subject: `Nouvelle demande — ${data.typeProjet || "Projet bois"}`,
    //   html: buildEmailHtml(data),
    // });

    // Log en développement
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact form submission]", data);
    }

    return NextResponse.json(
      { success: true, message: "Votre demande a bien été reçue." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API error]", error);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

function buildEmailHtml(data: Record<string, string>): string {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #111111;">
      <div style="background: #1F3A2E; padding: 32px; margin-bottom: 32px;">
        <h1 style="color: #F5F1EA; font-size: 24px; margin: 0;">LCCB — Nouvelle demande</h1>
        <p style="color: #A7B89A; font-size: 14px; margin: 8px 0 0; font-family: system-ui, sans-serif;">
          ${data.typeProjet || "Projet non spécifié"}
        </p>
      </div>
      <div style="padding: 0 32px; font-family: system-ui, sans-serif; font-size: 14px; line-height: 1.7; color: #8A8378;">
        <p><strong style="color: #111111;">Contact :</strong> ${data.prenom} ${data.nom}</p>
        <p><strong style="color: #111111;">Email :</strong> ${data.email}</p>
        ${data.telephone ? `<p><strong style="color: #111111;">Téléphone :</strong> ${data.telephone}</p>` : ""}
        ${data.adresse ? `<p><strong style="color: #111111;">Adresse :</strong> ${data.adresse}</p>` : ""}
        <hr style="border: none; border-top: 1px solid #D8C5A5; margin: 24px 0;" />
        <p><strong style="color: #111111;">Type de projet :</strong> ${data.typeProjet || "Non précisé"}</p>
        <p><strong style="color: #111111;">Localisation :</strong> ${data.localisation || "Non précisée"}</p>
        <p><strong style="color: #111111;">Plage horaire :</strong> ${data.horaire || "Non précisée"}</p>
        <hr style="border: none; border-top: 1px solid #D8C5A5; margin: 24px 0;" />
        <p><strong style="color: #111111;">Description :</strong></p>
        <p style="background: #F5F1EA; padding: 16px; border-left: 3px solid #B8793E;">${data.description}</p>
      </div>
      <div style="padding: 24px 32px; background: #F5F1EA; margin-top: 32px; font-size: 12px; color: #8A8378; font-family: system-ui, sans-serif;">
        Message envoyé depuis lccb-44.com
      </div>
    </div>
  `;
}
