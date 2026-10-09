import Image from "next/image";
import { Asterisk } from "../Asterisk";
import { Seal } from "../Seal";

export function AboutUs() {
  return (
    <section className="w-full h-fit space-y-8">
      <div className="w-full overflow-hidden self-end flex justify-between items-end p-8">
        <div className="w-2/3 space-y-8">
          <div className="flex gap-4 items-center">
            <Asterisk size="2vw" variant="red" />

            <span className="text-[2vw] leading-none uppercase font-medium text-primary">
              sobre nós
            </span>
          </div>

          <h2 className="text-[11vh] leading-none font-anton uppercase">
            conheça a <br /> nossa história
            <span className="text-primary">.</span>
          </h2>
        </div>
      </div>

      <div className="w-full h-screen pt-16 p-8">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-primary border-4 border-foreground"></div>

          <div className="absolute bg-accent font-anton uppercase text-[2vw] p-4 px-8 border-4 border-foreground bottom-full translate-y-1/2 z-30 left-0 right-0 mx-auto w-fit flex items-center gap-4">
            <Asterisk variant="black" size="2vw" />

            <span>garage da facó</span>

            <Asterisk variant="black" size="2vw" />
          </div>

          <div className="absolute bg-accent font-anton uppercase text-[2vw] p-4 px-8 border-4 border-foreground top-full -translate-y-2/3 z-30 left-0 right-0 mx-auto w-fit">
            um negócio que une três gerações
          </div>

          <div className="absolute z-20 inset-4 border-4 border-foreground">
            <div className="w-full h-full relative">
              <Image src="/family.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-8 items-start mt-[15vh] p-8">
        <div className="w-full flex flex-col gap-[30vh]">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Asterisk size="2vw" variant="red" />

              <span className="text-primary font-medium text-[2vw] uppercase">
                o início
              </span>
            </div>

            <p className="font-anton uppercase text-[5vw] leading-none">
              tudo começou <br /> na garagem de casa
            </p>

            <p className="text-[1.5vw]">
              Entre móveis, roupas, objetos e lembranças acumuladas ao longo dos
              anos, a avó percebeu que muitas coisas já não faziam mais sentido
              para a família, mas ainda poderiam ser especiais para outras
              pessoas. Então, organizou uma venda, abriu as portas de casa e deu
              novos destinos ao que ainda carregava valor.
            </p>

            <div className="w-full flex justify-between items-center">
              <div>
                <p className="font-anton text-[2vw] leading-none text-primary uppercase">
                  brasília,
                </p>

                <p className="font-anton text-[2vw] leading-none text-primary uppercase w-1/3 text-end">
                  2019
                </p>
              </div>

              <Seal size="17%" variant="red" />
            </div>
          </div>

          <div className="w-full aspect-square relative">
            <div className="absolute bg-accent left-4 top-4 bottom-0 right-0 border-4 border-foreground"></div>

            <div className="w-full h-full relative z-20 border-4 border-foreground">
              <Image src="/expand.png" alt="" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Asterisk size="2vw" variant="red" />

              <span className="text-primary font-medium text-[2vw] uppercase">
                três gerações
              </span>
            </div>

            <p className="font-anton uppercase text-[5vw] leading-none">
              uma história de família, sempre em movimento
            </p>

            <p className="text-[1.5vw]">
              Mais tarde, a filha também entrou para o negócio, trazendo novos
              olhares e completando uma trajetória construída por três gerações.
              Hoje, cada uma contribui com sua experiência e sensibilidade para
              transformar desapegos em novos encontros, sempre com cuidado em
              cada detalhe.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[30vh]">
          <div className="w-full aspect-square relative">
            <div className="absolute bg-accent left-4 top-4 bottom-0 right-0 border-4 border-foreground"></div>

            <div className="absolute bottom-full translate-y-1/2 bg-accent px-8 py-4 border-4 border-foreground z-30 left-1/10 font-anton text-[1.5vw] uppercase">
              a primeira garage
            </div>

            <div className="w-full h-full relative z-20 border-4 border-foreground">
              <Image
                src="/firstgarage.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Asterisk size="2vw" variant="red" />

              <span className="text-primary font-medium text-[2vw] uppercase">
                a ideia cresce
              </span>
            </div>

            <p className="font-anton uppercase text-[5vw] leading-none">
              o que era pontual virou negócio
            </p>

            <p className="text-[1.5vw]">
              A primeira venda revelou algo maior. Com a chegada da mãe, o
              cuidado do início ganhou mais organização, divulgação e atenção ao
              atendimento. Aos poucos, a Garage da Facó passou a ter método,
              continuidade e uma forma própria de transformar cada venda em uma
              experiência próxima e agradável.
            </p>
          </div>

          <div className="w-full aspect-square relative">
            <div className="absolute bg-accent left-4 top-4 bottom-0 right-0 border-4 border-foreground"></div>

            <div className="w-full h-full relative z-20 border-4 border-foreground">
              <Image src="/now.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[15vh]">
        <div className="w-full flex gap-8 relative">
          <div className="flex flex-col justify-between absolute inset-0 z-20 ml-8">
            <div className="flex gap-4">
              <p className="text-[20vw] leading-none font-anton">
                <span className="text-primary">+</span>30
              </p>

              <p className="text-[4vw] leading-none font-black self-end uppercase pb-4">
                <span className="text-primary text-[7vw]">anos</span>
                <br />
                no mercado
              </p>
            </div>

            <div className="flex gap-4">
              <p className="text-[20vw] leading-none font-anton">
                <span className="text-primary">+</span>150
              </p>

              <p className="text-[4vw] leading-none font-black self-end uppercase pb-4">
                <span className="text-primary text-[7vw]">garages</span>
                <br />
                concluídas
              </p>
            </div>

            <div className="flex gap-4">
              <p className="text-[20vw] leading-none font-anton">
                <span className="text-primary">+</span>50
              </p>

              <p className="text-[4vw] leading-none font-black self-end uppercase pb-4">
                <span className="text-primary text-[7vw]">clientes</span>
                <br />
                recorrentes
              </p>
            </div>
          </div>

          <div className="w-1/2 m-auto">
            <div className="relative aspect-square w-full overflow-visible opacity-25">
              <div className="translate-y-8 translate-x-[50%]">
                <Seal size="160%" variant="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
