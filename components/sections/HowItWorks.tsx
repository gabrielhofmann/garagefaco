import { UsersRound } from "lucide-react";
import { Asterisk } from "../Asterisk";
import Image from "next/image";
import { Arrow } from "../Arrow";
import { OperationSteps } from "../OperationStep";
import { Flower } from "../Flower";

const operationSteps = [
  {
    index: "01.",
    title: "Curadoria e seleção",
    description:
      "Avaliamos os itens, definimos o que faz sentido entrar na venda e organizamos a seleção final.",
  },
  {
    index: "02.",
    title: "Organização dos itens",
    description:
      "Separamos, categorizamos e preparamos cada peça para que tudo fique fácil de visualizar e escolher.",
  },
  {
    index: "03.",
    title: "Precificação",
    description:
      "Definimos valores coerentes para cada item, considerando estado, categoria e potencial de venda.",
  },
  {
    index: "04.",
    title: "Montagem da garage",
    description:
      "Cuidamos da disposição dos produtos e da organização do espaço para criar uma experiência agradável.",
  },
  {
    index: "05.",
    title: "Divulgação",
    description:
      "Criamos a comunicação da garage e divulgamos a venda para atrair o público certo.",
  },

  {
    index: "06.",
    title: "Venda e atendimento",
    description:
      "Durante a garage, acompanhamos as vendas, atendemos o público e ajudamos em toda a operação.",
  },
];

export function HowItWorks() {
  return (
    <section className="w-screen h-fit p-8 space-y-8">
      <div className="col-span-12 row-start-1 row-span-2 overflow-visible self-end flex justify-between items-end">
        <div className="w-2/3 space-y-8">
          <div className="flex gap-4 items-center">
            <Asterisk size="2vw" variant="red" />

            <span className="text-[2vw] leading-none uppercase font-medium text-primary">
              como funciona
            </span>
          </div>

          <h2 className="text-[11vh] leading-none font-anton uppercase">
            conheça <br /> o nosso serviço
            <span className="text-primary">.</span>
          </h2>
        </div>

        <div className="w-1/3">
          <div className="bg-accent border-4 border-foreground p-4 space-y-4">
            <div className="flex items-center gap-4">
              <UsersRound size="2vw" className="text-foreground" />
              <p className="uppercase font-bold text-[1.5vw] leading-none">
                temos clientes
              </p>
            </div>

            <div className="w-full h-0.5 bg-foreground"></div>

            <p className="text-[1.1vw] text-foreground leading-[1.5vw] font-medium text-justify">
              Contamos com uma rede de clientes fiéis que acompanha de perto o
              nosso trabalho e participa de grande parte das garages que
              realizamos. É um público já interessado, recorrente e pronto para
              descobrir novas peças a cada edição.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen py-8">
        <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-8">
          <div className="col-span-4 row-span-6 flex flex-col justify-between">
            <div>
              <span className="text-primary text-[10vw] leading-none font-anton">
                01.
              </span>

              <div className="flex gap-4 font-anton uppercase text-[5vw] leading-none">
                <span>
                  primeiro<span className="text-primary">,</span> você desapega
                  <span className="text-primary">.</span>
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-[1.5vw]">
                Você seleciona os itens que deseja vender e entra em contato com
                a gente. Nós avaliamos cada caso e definimos a melhor forma de
                organizar a sua Garage.
              </p>
            </div>
          </div>

          <div className="col-start-5 col-span-8 row-span-6">
            <div className="w-full h-full relative">
              <div className="absolute bg-accent top-4 left-4 bottom-0 right-0 border-4 border-foreground"></div>

              <div className="absolute top-0 bottom-4 left-0 right-4">
                <div className="w-full h-full relative border-4 border-foreground">
                  <Image
                    src="/letgo.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex-1 border-y-4 py-8 flex justify-between items-center relative group cursor-pointer transition-all duration-200 active:scale-90">
        <div className="absolute h-0 bg-foreground w-full bottom-0 group-hover:h-full transition-all duration-200"></div>

        <span className="text-foreground text-[2.5vw] uppercase font-bold relative z-20 group-hover:text-white group-hover:pl-8 transition-all duration-200">
          quero organizar uma garage sale
        </span>

        <div className="relative z-20 transition-all duration-200 group-hover:pr-8">
          <Arrow
            size="2.5vw"
            variant="black"
            className="group-hover:text-white transition-all duration-200 -rotate-45"
          />
        </div>
      </div>

      <div className="w-full h-screen py-8">
        <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-8">
          <div className="col-start-9 col-span-4 row-span-6 flex flex-col justify-between">
            <div>
              <span className="text-primary text-[10vw] leading-none font-anton">
                02.
              </span>

              <div className="flex gap-4 font-anton uppercase text-[5vw] leading-none">
                <span>
                  depois<span className="text-primary">,</span> a gente cuida do
                  resto
                  <span className="text-primary">.</span>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[1.5vw]">
                A partir daí, assumimos toda a operação. Selecionamos e
                organizamos os itens, definimos os preços, preparamos a
                divulgação e conduzimos a venda do início ao fim.
              </p>
            </div>
          </div>

          <div className="col-start-1 col-span-8 row-start-1 row-span-6">
            <div className="w-full h-full relative">
              <div className="absolute bg-accent top-4 left-0 bottom-0 right-4 border-4 border-foreground"></div>

              <div className="absolute top-0 bottom-4 left-4 right-0">
                <div className="w-full h-full relative border-4 border-foreground">
                  <Image
                    src="/takecare.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit mt-[15vh]">
        <div className="w-full h-full flex flex-col gap-[15vh]">
          <div className="w-full flex flex-col gap-16">
            <div className="border-4 border-foreground bg-accent p-4 px-8 font-anton text-[3vw] uppercase w-fit flex items-center gap-4">
              <Asterisk size="3vw" variant="black" />

              <span>passo a passo</span>

              <Asterisk size="3vw" variant="black" />
            </div>

            <p className="text-[7vw] font-anton leading-none uppercase">
              como funciona <br /> a nossa operação
              <span className="text-primary">:</span>
            </p>
          </div>

          <OperationSteps />

          <div className="w-full border-4 border-primary p-16 mx-auto flex flex-col items-center justify-center gap-16 relative">
            <div className="absolute w-1/4 h-1/4 top-4 left-4 border-l-4 border-t-4 border-primary"></div>
            <div className="absolute w-1/4 h-1/4 top-4 right-4 border-r-4 border-t-4 border-primary"></div>
            <div className="absolute w-1/4 h-1/4 bottom-4 right-4 border-r-4 border-b-4 border-primary"></div>
            <div className="absolute w-1/4 h-1/4 bottom-4 left-4 border-l-4 border-b-4 border-primary"></div>

            <Flower width="25vw" />

            <div className="flex gap-8 items-center w-full">
              <div className="flex-1 h-1 bg-primary"></div>

              <Asterisk size="5vw" variant="red" />

              <div className="flex-1 h-1 bg-primary"></div>
            </div>

            <div className="font-anton uppercase text-[6vw] leading-none text-center">
              <p>
                você desapega<span className="text-primary">,</span>{" "}
              </p>
              <p>
                a gente faz acontecer<span className="text-primary">!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
