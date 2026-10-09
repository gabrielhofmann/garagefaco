import Image from "next/image";
import { Logo } from "../Logo";
import { Asterisk } from "../Asterisk";
import { Seal } from "../Seal";
import { Arrow } from "../Arrow";
import { ArrowDown } from "../ArrowDown";
import { MapPin } from "lucide-react";

export function NewHero() {
  return (
    <section className="w-screen h-screen grid grid-cols-12 grid-rows-6">
      <Header />

      <div className="col-start-1 col-span-5 row-start-2 row-span-5 flex flex-col justify-end gap-12 pb-8">
        <div className="flex gap-4 items-center px-8">
          <Asterisk size="2vw" variant="red" />

          <span className="uppercase text-primary font-medium text-[1.5vw] leading-none">
            as melhores vendas de garagem
          </span>
        </div>

        <p className="uppercase font-anton text-[5.5vw] leading-none px-8">
          objetos únicos, <br /> preços justos.
        </p>

        <div className="w-full h-1 bg-primary"></div>

        <p className="text-[1.5vw] leading-none px-8">
          Cuidamos da sua venda de garagem para você desapegar sem dor de
          cabeça.
        </p>

        <div className="px-8">
          <button className="border-y-4 border-primary w-full py-4 flex gap-8 items-center justify-between text-primary font-medium text-[1.5vw] leading-none">
            <span className="uppercase">entre em contato</span>

            <div className="-rotate-45">
              <Arrow size="2vw" variant="red" />
            </div>
          </button>
        </div>

        <div className="mx-auto flex gap-4 items-center">
          <span className="uppercase text-[1.2vw] text-primary leading-none font-medium tracking-wide">
            conheça
          </span>

          <ArrowDown width="1.5vw" />
        </div>
      </div>

      <div className="col-start-6 col-span-7 row-start-2 row-span-5 relative border-4 border-primary">
        <div className="border-b-2 border-r-2 absolute top-0 left-0 z-20 border-white w-fit pl-8 pt-8 pb-4 pr-4 flex items-center gap-4 backdrop-blur-xs">
          <Asterisk size="4vw" variant="white" />

          <span className="font-anton uppercase text-white text-[4vw] leading-none">garage da facó</span>
          
        </div>

        <div className="absolute inset-0 w-2/3 h-2/3 border-t-2 border-l-2 border-white z-20 m-4"></div>

        <div className="absolute bottom-0 right-0 z-20 p-8">
          <div className="p-2 border-2 border-primary bg-white w-fit">
            <div className="flex flex-col items-center gap-4 bg-white border-2 border-primary p-4">
              <p className="font-anton text-[2vw] leading-none uppercase text-primary">
                próxima garage:
              </p>

              <div className="w-full h-0.5 bg-primary"></div>

              <p className="font-anton text-[4vw] leading-none uppercase">
                18 - 20
              </p>

              <p className="text-[2vw] leading-none font-medium">JULHO</p>

              <div className="w-full h-0.5 bg-primary"></div>

              <div className="flex items-center gap-4">
                <MapPin size="1.5vw" className="text-primary" />

                <span className="text-foreground text-[1.3vw] leading-none uppercase font-medium">
                  lago norte
                </span>
              </div>
            </div>
          </div>
        </div>

        <Image src="/heroo.png" alt="" fill className="object-cover" />
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="col-span-12 row-start-1 flex items-center justify-between p-8 gap-16">
      <div className="h-full aspect-square">
        <Seal size="100%" variant="red" />
      </div>

      {/* <div className="flex-1 h-1 bg-primary"></div> */}

      <div className="flex items-center gap-16">
        <NavItem href="/" label="agenda" />
        <NavItem href="/" label="como funciona" />
        <NavItem href="/" label="sobre nós" />
        <NavItem href="/" label="contato" />
      </div>
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="flex gap-2 items-center group cursor-pointer transition-all duration-200 active:scale-95"
    >
      <div className="w-5 h-5 border-2 border-primary rounded-full flex items-center justify-center mt-1">
        <div className="h-1 w-1 rounded-full bg-primary hidden group-hover:block"></div>
      </div>

      <div className="relative">
        <span className="text-primary font-medium text-[1.1vw] uppercase">
          {label}
        </span>

        <div className="absolute top-full bg-primary w-0 group-hover:w-full h-0.5 transition-all duration-500"></div>
      </div>
    </a>
  );
}
