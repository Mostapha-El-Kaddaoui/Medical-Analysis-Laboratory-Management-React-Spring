import React, { useState } from "react";
import AccordionItem from "./Accordionitem";
export default function Accordion(){
  return (
    <section className="w-full overflow-hidden bg-white pb-12 pt-40">
      <div className="container mx-auto w-11/12">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] w-2/3 text-center lg:mb-20">
     
              <h2 className="mb-4 text-6xl font-mont font-bold text-slate-700">
                Questions fréquentes ? <span class="text-red-500">Consultez ici</span>
              </h2>
              <p className="text-lg text-slate-700 font-mont">
                Retrouvez ici les réponses aux questions les plus courantes concernant nos services d'analyses médicales et la consultation de vos résultats en ligne.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Comment consulter mes résultats d'analyses ?"
              text="Connectez-vous à votre espace patient sur notre site pour accéder à vos résultats dès qu'ils sont disponibles."
            />
            <AccordionItem
              header="Quels types d'analyses proposez-vous ?"
              text="Nous réalisons une large gamme d'analyses médicales, notamment sanguines, urinaires et autres examens de routine."
            />
            <AccordionItem
              header="Comment contacter le laboratoire ?"
              text="Vous pouvez nous joindre par téléphone, email ou via le formulaire de contact disponible sur notre site."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Combien de temps pour obtenir mes résultats ?"
              text="La plupart des résultats sont disponibles sous 24 à 48 heures. Vous recevrez une notification dès qu'ils seront prêts."
            />
            <AccordionItem
              header="Mes données sont-elles sécurisées ?"
              text="Oui, la confidentialité et la sécurité de vos données sont notre priorité absolue."
            />
            <AccordionItem
              header="Puis-je prendre rendez-vous en ligne ?"
              text="Oui, vous pouvez demander un rendez-vous via notre site ou par téléphone."
            />
          </div>
        </div>
      </div>
    </section>
  );

};