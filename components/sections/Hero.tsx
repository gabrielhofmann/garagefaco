import Image from "next/image";
import { Arrow } from "../Arrow";
import { Asterisk } from "../Asterisk";
import { StackedButton } from "../buttons/StackedButton";
import { HeroTitle } from "../HeroTitle";
import { Logo } from "../Logo";
import { Seal } from "../Seal";

export function Hero() {
  return (
    <section className="w-screen h-screen relative">
      <Image src="/heroo.png" fill alt="" className="object-cover" />

      <div className="absolute bg-linear-to-r from-black to-transparent left-0 top-0 bottom-0 w-[50vw]"></div>

      <div className="absolute bg-linear-to-b from-black to-transparent right-0 left-0 top-0 h-[20vw]"></div>

      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
        <div className="col-span-12 row-start-1 flex items-center justify-between px-8">
          <div>
            <Logo width="10vw" />
          </div>

          <div className="flex items-center gap-8 text-white tracking-wide text-[1vw]">
            <div className="relative cursor-pointer group">
              <p>AGENDA</p>

              <div className="absolute -bottom-1 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-primary"></div>
            </div>

            <div className="relative cursor-pointer group">
              <p>COMO FUNCIONA</p>

              <div className="absolute -bottom-1 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-primary"></div>
            </div>

            <div className="relative cursor-pointer group">
              <p>SOBRE</p>

              <div className="absolute -bottom-1 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-primary"></div>
            </div>

            <div className="relative cursor-pointer group">
              <p>CONTATO</p>

              <div className="absolute -bottom-1 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-primary"></div>
            </div>
          </div>
        </div>

        <div className="col-span-6 row-start-2 row-span-5 flex flex-col items-start justify-between px-8 pb-8 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Asterisk variant="red" size="2vw" />

              <span className="text-primary text-[1.5vw] leading-none font-medium">
                AS MELHORES GARAGE SALES DE BRASÍLIA
              </span>
            </div>

            <div className="w-full">
              <p className="font-anton text-[7vw] leading-none uppercase text-white">
                objetos unicos<span className="text-accent">,</span> <br />{" "}
                preços justos
                <span className="text-accent">.</span>
              </p>
            </div>
          </div>

          <p className="text-white/75 text-[1.25vw] w-2/3">
            Garage sales sem dor de cabeça, peças selecionadas, novas histórias
            esperando para começar.
          </p>

          {/* <div className="flex gap-4">
            <div className="opacity-25">
              <Seal variant="white" size="10vw" />
            </div>
          </div> */}

          <button className="text-[1.5vw] uppercase text-white flex gap-8 font-medium items-center border-y-4 border-white p-4">
            <span>quero organizar uma garage</span>

            <div className="-rotate-45">
              <Arrow variant="white" size="3vw" />
            </div>
          </button>
        </div>

        <div className="col-start-10 col-span-3 row-start-3 row-span-4 h-fit self-end p-8">
          <div className="relative">
            <div className="absolute inset-0 bg-accent border-4 border-foreground z-10"></div>

            <div className="w-full h-full bg-primary flex flex-col gap-4 p-4 border-4 border-foreground -translate-y-4 -translate-x-4 z-20 relative">
              <div className="flex items-center gap-4">
                <Asterisk size="1.5vw" variant="white" />

                <p className="uppercase text-white text-[1.5vw] font-medium">
                  próxima garage
                </p>
              </div>

              <div className="w-full h-0.5 bg-foreground"></div>

              <p className="text-white text-[2vw] uppercase font-bold mx-auto">
                18-20 JULHO
              </p>

              <div className="w-full h-0.5 bg-foreground"></div>

              <div className="space-y-2">
                <p className="text-white text-[2vw] uppercase font-medium leading-none">
                  Asa Norte
                </p>

                <p className="text-white text-[1vw] leading-none">
                  BRASÍLIA / DF
                </p>
              </div>

              <div className="w-full h-0.5 bg-foreground"></div>

              <div className="text-white text-[1.25vw] leading-none space-y-2 font-medium">
                <div className="flex items-center gap-4">
                  <p className="w-1/4">SEX</p>

                  <p>09H - 12H</p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="w-1/4">SAB</p>

                  <p>09H - 12H</p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="w-1/4">DOM</p>

                  <p>09H - 12H</p>
                </div>
              </div>

              <div className="w-full h-0.5 bg-foreground"></div>

              <div className="flex items-center justify-center gap-4 group cursor-pointer transition-all duration-500 bg-accent text-foreground py-4 border-2 border-foreground">
                <div className="w-0 h-[1.5vw] group-hover:w-[1.5vw] transition-all duration-500">
                  <Arrow variant="black" size="100%" />
                </div>

                <p className="font-medium text-[1.5vw] leading-none uppercase">
                  quero ir
                </p>

                <div className="w-[1.5vw] h-[1.5vw] group-hover:w-0 transition-all duration-500">
                  <Arrow variant="black" size="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
