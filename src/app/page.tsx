import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Livraison Rapide",
    icon: ArrowDownToLine,
    description:
      'Obtenez la cofirmation de votre commande sur votre numéro ainsi que le delai rapide de livraison.'
  },
  {
    name: "Qualité guarantie",
    icon: CheckCircle,
    description:
      "Tous les produits sur la plateforme sont vérifiés par notre équipe pour s'assurer de la qualité."
  },
  {
    name: "Sécurité",
    icon: ShieldCheck,
    description:
      "Tous vos produits commandé seront livrés avec toutes sécurité."
  }
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="p-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Bienvenue chez <span className="text-[#f43f5e]">Gyneco</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Nous vous mettons directement en relation avec des gyneco compétants.</p>
          <p className="text-lg max-w-prose text-muted-foreground">Tous les docteurs de notre plateforme sont qualifiés et professionnels. Soyez rassurés de la qualité de vos rendez-vous.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link className={buttonVariants()} href='/products'>Nos docteurs</Link>
          </div>
          <Button className="mt-2" variant='ghost'>Produits en tendances &rarr;</Button>
        </div>

        {/* Todo list product */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {
              perks.map((perk) => (
                <div key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gray-100 text-gray-900">
                      {<perk.icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>
                  <div className="mt-6  md:mt-0 lg:mt-0 ">
                    <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <div className="relative overflow-hidden w-[400px]">
          <div className="flex transition-transform duration-500 ease-in-out" id="card-container">
            <div className="card bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Carte 1
            </div>
            <div className="card bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Carte 2
            </div>
            <div className="card bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Carte 3
            </div>
            <div className="card bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Carte 3
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
