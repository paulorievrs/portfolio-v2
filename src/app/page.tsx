import { Button } from "@/components/ui/button";

import Image from "next/image";
import { ArrowRight, Globe, Link, TabletSmartphoneIcon } from "lucide-react";
import { HomepageHeader } from "@/components/ui/home-page-header";

export default function Home() {
  return (
    <main>
      <HomepageHeader />
      <section className="px-4">
        <h2 className="text-2xl font-bold mt-8 border-b-2 transition-all duration-150 hover:border-b-primary w-fit">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="border rounded-lg flex flex-col">
            <div className="w-full h-36 bg-[url('/grupomov.png')] bg-contain bg-no-repeat bg-center border-b"></div>
            <div className="p-2">
              <h2 className="text-lg font-bold text-center">
                Minha Empilhadeira (My Forklift)
              </h2>
              <p className="mt-2 text-sm text-center">
                Developed a comprehensive application to enhance company
                processes, including multi-step forms and complex filtering
                systems, significantly improving operational efficiency and
                decision-making.
              </p>
              <div className="flex flex-row items-center justify-between mt-4">
                <div className="flex flex-row gap-1">
                  <Button size={"sm"} variant={"link"}>
                    <Globe size={18} className="mr-1" /> Web
                  </Button>
                  <Button size={"sm"} variant={"link"}>
                    <TabletSmartphoneIcon size={18} className="mr-1" /> Android
                  </Button>
                </div>

                <Button size={"sm"} variant={"link"}>
                  See more <ArrowRight size={20} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
