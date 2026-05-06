"use client";

import { useState, useRef } from "react";
import { Upload, Check, ChevronRight, ChevronLeft, AlertCircle, X } from "lucide-react";
import Button from "./Button";

type FormData = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  typeProjet: string;
  description: string;
  localisation: string;
  horaire: string;
  fichier: File | null;
  rgpd: boolean;
};

const PROJECT_TYPES = [
  "Charpente traditionnelle",
  "Construction ossature bois",
  "Couverture",
  "Menuiserie",
  "Zinguerie",
  "Je ne sais pas — conseillez-moi",
];

const HORAIRES = [
  "Matin (8h–12h)",
  "Après-midi (14h–18h)",
  "N'importe quand",
  "Me rappeler pour convenir d'un rendez-vous",
];

const INITIAL: FormData = {
  nom: "", prenom: "", email: "", telephone: "", adresse: "",
  typeProjet: "", description: "", localisation: "", horaire: "",
  fichier: null, rgpd: false,
};

type Status = "idle" | "submitting" | "success" | "error";

const STEPS = ["Vos coordonnées", "Votre projet", "Finalisation"];

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="input-label">
        {label}
        {required && <span className="text-[#B8793E] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-[11px] text-red-500 font-sans mt-0.5">
          <AlertCircle size={11} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormData, value: string | boolean | File | null) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const touch = (field: keyof FormData) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const validateStep1 = () => {
    const e: typeof errors = {};
    if (!data.nom.trim()) e.nom = "Le nom est requis";
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email))
      e.email = "Adresse email invalide";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: typeof errors = {};
    if (!data.description.trim()) e.description = "La description est requise";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = () => {
    const e: typeof errors = {};
    if (!data.rgpd) e.rgpd = "Veuillez accepter la politique de confidentialité";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((s) => Math.min(s + 1, 3));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;
    setStatus("submitting");
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (v !== null && v !== undefined) {
          if (v instanceof File) formData.append(k, v);
          else formData.append(k, String(v));
        }
      });
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputCls = (field: keyof FormData) =>
    `input-field${errors[field] && touched[field] ? " error" : ""}`;

  if (status === "success") {
    return (
      <div className="text-center py-20 px-6">
        <div className="w-16 h-16 bg-[#1F3A2E] flex items-center justify-center mx-auto mb-6">
          <Check size={28} className="text-[#F5F1EA]" />
        </div>
        <h3 className="font-serif text-2xl text-[#111111] mb-3">Message envoyé</h3>
        <p className="text-[#8A8378] font-sans text-sm leading-relaxed max-w-sm mx-auto">
          Nous avons bien reçu votre demande. Renan vous recontactera dans les plus brefs délais pour discuter de votre projet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-0">
      {/* Step indicator */}
      <div className="flex items-center gap-0 mb-10 border border-[#D8C5A5] overflow-hidden">
        {STEPS.map((label, i) => {
          const s = i + 1;
          const active = s === step;
          const done = s < step;
          return (
            <div
              key={s}
              className={`flex-1 flex items-center gap-3 px-5 py-4 transition-colors duration-300 ${
                active
                  ? "bg-[#1F3A2E] text-[#F5F1EA]"
                  : done
                  ? "bg-[#B8793E]/10 text-[#8A8378]"
                  : "bg-transparent text-[#8A8378]/60"
              } ${i > 0 ? "border-l border-[#D8C5A5]" : ""}`}
            >
              <span
                className={`w-6 h-6 flex-shrink-0 flex items-center justify-center text-[10px] font-sans transition-colors duration-300 ${
                  active
                    ? "bg-[#B8793E] text-[#F5F1EA]"
                    : done
                    ? "bg-[#B8793E] text-[#F5F1EA]"
                    : "border border-[#D8C5A5] text-[#8A8378]"
                }`}
              >
                {done ? <Check size={10} /> : s}
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] font-sans hidden sm:block">
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Step 1 — Coordonnées */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Prénom">
              <input
                type="text"
                value={data.prenom}
                onChange={(e) => set("prenom", e.target.value)}
                onBlur={() => touch("prenom")}
                placeholder="Jean"
                className={inputCls("prenom")}
                autoComplete="given-name"
              />
            </Field>
            <Field label="Nom" required error={touched.nom ? errors.nom : undefined}>
              <input
                type="text"
                value={data.nom}
                onChange={(e) => set("nom", e.target.value)}
                onBlur={() => touch("nom")}
                placeholder="Dupont"
                className={inputCls("nom")}
                autoComplete="family-name"
              />
            </Field>
          </div>

          <Field label="Email" required error={touched.email ? errors.email : undefined}>
            <input
              type="email"
              value={data.email}
              onChange={(e) => set("email", e.target.value)}
              onBlur={() => touch("email")}
              placeholder="jean.dupont@email.fr"
              className={inputCls("email")}
              autoComplete="email"
            />
          </Field>

          <Field label="Téléphone">
            <input
              type="tel"
              value={data.telephone}
              onChange={(e) => set("telephone", e.target.value)}
              placeholder="06 12 34 56 78"
              className={inputCls("telephone")}
              autoComplete="tel"
            />
          </Field>

          <Field label="Adresse postale">
            <input
              type="text"
              value={data.adresse}
              onChange={(e) => set("adresse", e.target.value)}
              placeholder="12 rue de l'Atelier, 44880 Sautron"
              className={inputCls("adresse")}
              autoComplete="street-address"
            />
          </Field>
        </div>
      )}

      {/* Step 2 — Projet */}
      {step === 2 && (
        <div className="space-y-8">
          <Field label="Type de projet">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => set("typeProjet", type)}
                  className={`text-left px-4 py-3.5 text-[11px] font-sans uppercase tracking-[0.08em] transition-all duration-200 border ${
                    data.typeProjet === type
                      ? "bg-[#1F3A2E] text-[#F5F1EA] border-[#1F3A2E]"
                      : "bg-white text-[#111111] border-[#D8C5A5] hover:border-[#1F3A2E] hover:text-[#1F3A2E]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </Field>

          <Field
            label="Description du projet"
            required
            error={touched.description ? errors.description : undefined}
          >
            <textarea
              value={data.description}
              onChange={(e) => set("description", e.target.value)}
              onBlur={() => touch("description")}
              placeholder="Décrivez votre projet : nature des travaux, surface approximative, contraintes éventuelles…"
              rows={5}
              className={`${inputCls("description")} resize-none`}
            />
          </Field>

          <Field label="Localisation du chantier">
            <input
              type="text"
              value={data.localisation}
              onChange={(e) => set("localisation", e.target.value)}
              placeholder="Ville ou adresse du chantier"
              className={inputCls("localisation")}
            />
          </Field>
        </div>
      )}

      {/* Step 3 — Finalisation */}
      {step === 3 && (
        <div className="space-y-8">
          <Field label="Plage horaire pour être contacté">
            <div className="space-y-2 mt-1">
              {HORAIRES.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => set("horaire", h)}
                  className={`w-full text-left px-4 py-3.5 text-sm font-sans transition-all duration-200 border flex items-center gap-3 ${
                    data.horaire === h
                      ? "bg-[#1F3A2E] text-[#F5F1EA] border-[#1F3A2E]"
                      : "bg-white text-[#111111] border-[#D8C5A5] hover:border-[#1F3A2E] hover:text-[#1F3A2E]"
                  }`}
                >
                  <span
                    className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors duration-200 ${
                      data.horaire === h ? "border-[#B8793E] bg-[#B8793E]" : "border-[#D8C5A5]"
                    }`}
                  >
                    {data.horaire === h && <Check size={9} className="text-white" />}
                  </span>
                  {h}
                </button>
              ))}
            </div>
          </Field>

          {/* File upload */}
          <div>
            <label className="input-label mb-3 block">
              Documents joints (PDF, JPG, DOC, DWG, DXF)
            </label>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="w-full border border-dashed border-[#D8C5A5] hover:border-[#B8793E] bg-white py-8 flex flex-col items-center gap-3 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 border border-[#D8C5A5] group-hover:border-[#B8793E] flex items-center justify-center transition-colors duration-300">
                <Upload size={18} className="text-[#8A8378] group-hover:text-[#B8793E] transition-colors duration-300" />
              </div>
              <span className="text-sm text-[#8A8378] font-sans">
                {data.fichier ? (
                  <span className="text-[#1F3A2E] font-medium">{data.fichier.name}</span>
                ) : (
                  "Cliquez pour ajouter un fichier"
                )}
              </span>
              {!data.fichier && (
                <span className="text-[10px] text-[#8A8378]/60 font-sans uppercase tracking-[0.1em]">
                  Taille max. 10 Mo
                </span>
              )}
            </button>
            {data.fichier && (
              <button
                type="button"
                onClick={() => set("fichier", null)}
                className="mt-2 flex items-center gap-1.5 text-[11px] text-[#8A8378] hover:text-red-500 font-sans transition-colors duration-200"
              >
                <X size={11} /> Retirer le fichier
              </button>
            )}
            <input
              ref={fileRef}
              type="file"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.doc,.docx,.dwg,.dxf"
              onChange={(e) => set("fichier", e.target.files?.[0] || null)}
            />
          </div>

          {/* RGPD */}
          <div>
            <label
              className="flex items-start gap-4 cursor-pointer group"
              onClick={() => set("rgpd", !data.rgpd)}
            >
              <div
                className={`w-5 h-5 border flex-shrink-0 flex items-center justify-center mt-0.5 transition-all duration-200 ${
                  data.rgpd
                    ? "bg-[#1F3A2E] border-[#1F3A2E]"
                    : "border-[#D8C5A5] group-hover:border-[#1F3A2E] bg-white"
                }`}
              >
                {data.rgpd && <Check size={11} className="text-[#F5F1EA]" />}
              </div>
              <span className="text-[13px] text-[#8A8378] font-sans leading-relaxed">
                J&apos;accepte que mes données soient utilisées par LCCB dans le cadre de ma demande. Elles ne seront jamais transmises à des tiers.{" "}
                <a href="/contact" className="text-[#B8793E] underline underline-offset-2">
                  Politique de confidentialité
                </a>
              </span>
            </label>
            {errors.rgpd && (
              <p className="flex items-center gap-1.5 text-[11px] text-red-500 font-sans mt-2">
                <AlertCircle size={11} /> {errors.rgpd}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10 pt-8 border-t border-[#D8C5A5]/50">
        {step > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#8A8378] hover:text-[#111111] transition-colors font-sans"
          >
            <ChevronLeft size={14} /> Retour
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <Button type="button" onClick={nextStep} size="lg">
            Continuer <ChevronRight size={14} />
          </Button>
        ) : (
          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className="bg-[#B8793E] hover:bg-[#1F3A2E]"
          >
            {status === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
          </Button>
        )}
      </div>

      {status === "error" && (
        <div className="mt-5 p-4 bg-red-50 border border-red-200 flex items-center gap-3">
          <AlertCircle size={16} className="text-red-500 shrink-0" />
          <p className="text-sm text-red-600 font-sans">
            Une erreur est survenue. Veuillez réessayer ou nous appeler directement au 02 51 71 82 17.
          </p>
        </div>
      )}
    </form>
  );
}
