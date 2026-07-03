"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { DossierPreuve } from "@/lib/preuve/scellerPreuve";
import { META_CATEGORIES } from "@/lib/detection/categories";
import { REFERENCES_JURIDIQUES } from "@/lib/preuve/references";
import type { Categorie } from "@/lib/detection/types";

export default function DossierPolice() {
  const [dossier, setDossier] = useState<DossierPreuve | null>(null);
  const [absent, setAbsent] = useState(false);
  const [nom, setNom] = useState("");
  const [ville, setVille] = useState("");

  useEffect(() => {
    const brut = sessionStorage.getItem("gardienne:dossier");
    if (!brut) return setAbsent(true);
    setDossier(JSON.parse(brut) as DossierPreuve);
  }, []);

  if (absent) {
    return (
      <div className="reveal flex flex-col items-center gap-4 pt-16 text-center">
        <h1 className="font-display text-xl text-ink">Aucun dossier</h1>
        <p className="max-w-[18rem] text-[14px] text-ink-soft">
          Scelle d&apos;abord une preuve, puis reviens générer le dossier.
        </p>
        <Link href="/analyser" className="rounded-2xl bg-brand px-5 py-3 text-[15px] font-semibold text-white">
          Analyser un message
        </Link>
      </div>
    );
  }
  if (!dossier) return null;

  const cat = dossier.categorie as Categorie;
  const meta = META_CATEGORIES[cat];
  const articles = REFERENCES_JURIDIQUES[cat] ?? [];
  const dateCertifiee = dossier.certifie ? dossier.horodatageCertifie! : dossier.horodatage;
  const dateFr = new Date(dateCertifiee).toLocaleString("fr-FR");
  const aujourdhui = new Date().toLocaleDateString("fr-FR");

  return (
    <div className="reveal flex flex-col gap-4">
      {/* Contrôles — non imprimés */}
      <div data-noprint className="flex flex-col gap-3">
        <Link href="/preuve" className="text-[13px] text-ink-soft hover:text-ink">
          ← Retour
        </Link>
        <h1 className="font-display text-2xl text-ink">Dossier pour la police</h1>
        <p className="text-[13px] leading-snug text-ink-soft">
          Complète ton nom et ta ville, puis imprime (ou enregistre en PDF).
        </p>
        <input
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Ton nom complet"
          className="rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-[14px] outline-none focus:border-brand"
        />
        <input
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          placeholder="Ta ville (ex. Yaoundé)"
          className="rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-[14px] outline-none focus:border-brand"
        />
        <button
          onClick={() => window.print()}
          className="flex items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand/25"
        >
          🖨️ Imprimer / Enregistrer en PDF
        </button>
      </div>

      {/* Document imprimable */}
      <article className="zone-imprimable rounded-2xl border border-black/10 bg-white p-5 text-[13px] leading-relaxed text-ink">
        <header className="mb-4">
          <p className="font-semibold">
            {nom || "[Nom du plaignant]"}
            <br />
            {ville || "[Ville]"}, le {aujourdhui}
          </p>
          <p className="mt-4">
            À Monsieur le Procureur de la République
            <br />
            près le Tribunal de Première Instance de {ville || "[Ville]"}
          </p>
        </header>

        <p className="font-semibold">Objet : Plainte pour cyberharcèlement — {meta.libelle}</p>

        <p className="mt-3">Monsieur le Procureur,</p>
        <p className="mt-2">
          Je soussigné(e) {nom || "[Nom]"} ai l&apos;honneur de porter à votre connaissance des
          faits de harcèlement en ligne dont je suis victime, et de déposer plainte contre
          l&apos;auteur de ces faits (identité à déterminer).
        </p>

        <p className="mt-3 font-semibold">Exposé des faits</p>
        <p className="mt-1">
          J&apos;ai reçu, par voie électronique, le(s) message(s) suivant(s), qualifié(s) de «{" "}
          {meta.libelle} » (gravité évaluée : {dossier.gravite}/100) :
        </p>
        <blockquote className="my-2 border-l-2 border-black/20 pl-3 italic">
          « {dossier.texte} »
        </blockquote>
        {(dossier.plateforme || dossier.auteur || dossier.heureMessage) && (
          <p>
            {dossier.plateforme ? `Reçu via ${dossier.plateforme}` : "Reçu"}
            {dossier.auteur ? `, de la part de « ${dossier.auteur} »` : ""}
            {dossier.heureMessage ? `, à ${dossier.heureMessage}` : ""}.
          </p>
        )}
        <p>
          Cet élément a été préservé et scellé le {dateFr}
          {dossier.certifie ? ` (horodatage certifié par ${dossier.autorite})` : " (horodatage local)"}.
        </p>

        {articles.length > 0 && (
          <>
            <p className="mt-3 font-semibold">Qualification juridique (indicative)</p>
            <ul className="mt-1 list-disc pl-5">
              {articles.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </>
        )}

        <p className="mt-3 font-semibold">Demande</p>
        <p className="mt-1">
          Je vous prie de bien vouloir diligenter une enquête, saisir l&apos;ANTIC (numéros verts
          8202 / 8206) aux fins d&apos;identification technique de l&apos;auteur (traçage IP), et
          engager les poursuites appropriées.
        </p>

        <div className="mt-4 rounded-lg bg-black/[0.03] p-3">
          <p className="font-semibold">Annexe — Preuve numérique scellée</p>
          <p className="mt-1">Outil : {dossier.outil}</p>
          <p className="mt-1 break-all font-mono text-[11px]">Empreinte SHA-256 : {dossier.empreinte}</p>
          {dossier.certifie && (
            <p className="mt-1 break-all font-mono text-[11px]">
              Signature ({dossier.autorite}) : {dossier.signature}
            </p>
          )}
          <p className="mt-1 text-[11px] text-ink-soft">
            L&apos;empreinte SHA-256 garantit l&apos;intégrité : toute modification du contenu
            changerait cette empreinte.
          </p>
        </div>

        <p className="mt-4">Dans l&apos;attente de votre diligence, veuillez agréer, Monsieur le Procureur, l&apos;expression de ma haute considération.</p>
        <p className="mt-4">Signature : {nom || "[Nom]"}</p>

        <p className="mt-6 border-t border-black/10 pt-2 text-[10px] text-ink-soft">
          Document généré par Gardienne. Modèle indicatif — ne constitue pas un conseil juridique.
          Pour t&apos;accompagner, une aide juridictionnelle gratuite est possible (certificat
          d&apos;indigence).
        </p>
      </article>
    </div>
  );
}
