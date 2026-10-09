import Image from "next/image";

type OperationStepProps = {
  index: string;
  title: string;
  description: string;
  img: string;
  position: "left" | "right";
};

const steps: OperationStepProps[] = [
  {
    index: "01.",
    title: "curadoria e seleção",
    description:
      "Avaliamos todo o acervo com cuidado e selecionamos os itens que fazem mais sentido para a venda, considerando estado, qualidade e potencial de interesse.",
    img: "/selection.png",
    position: "left",
  },
  {
    index: "02.",
    title: "organização e precificação",
    description:
      "Separamos cada peça por categoria, preparamos os itens para exposição e definimos valores justos, coerentes e adequados ao perfil da garage.",
    img: "/pricing.png",
    position: "right",
  },
  {
    index: "03.",
    title: "montagem e divulgação",
    description:
      "Organizamos o espaço, cuidamos da apresentação dos produtos e criamos a divulgação necessária para atrair o público certo para a venda.",
    img: "/assembly.png",
    position: "left",
  },
  {
    index: "04.",
    title: "venda e atendimento",
    description:
      "Durante a garage, recebemos o público, acompanhamos as vendas e cuidamos de toda a operação para que tudo aconteça de forma tranquila e organizada.",
    img: "/sell.png",
    position: "right",
  },
];

function OperationStep({
  index,
  title,
  description,
  img,
  position,
}: {
  index: string;
  title: string;
  description: string;
  img: string;
  position: "left" | "right";
}) {
  const headlineStyle = position === "left" ? "" : "items-end";
  const contentStyle = position === "left" ? "flex-row-reverse" : "";
  const decorationStyle =
    position === "left"
      ? "right-4 left-0 top-4 bottom-0"
      : "top-4 bottom-0 left-4 right-0";
  const imageStyle =
    position === "left"
      ? "left-4 right-0 top-0 bottom-4"
      : "top-0 bottom-4 left-0 right-4";

  return (
    <div className="w-full space-y-8">
      <div className={`font-anton flex flex-col ${headlineStyle}`}>
        <p className="text-primary text-[15vw] leading-none">{index}</p>

        <p className="uppercase text-[5vw] leading-none">{title}</p>
      </div>

      <div className={`flex w-full gap-8 ${contentStyle}`}>
        <div className="w-3/4 aspect-video">
          <div className="w-full h-full relative">
            <div
              className={`absolute bg-accent border-4 border-foreground z-10 ${decorationStyle}`}
            ></div>

            <div className={`absolute z-20 ${imageStyle}`}>
              <div className="w-full h-full relative border-4 border-foreground">
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/4 text-[1.5vw] text-justify">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export function OperationSteps() {
  return (
    <div className="w-full space-y-[15vh] p-8">
      {steps.map((step, index) => {
        return (
          <OperationStep
            key={index}
            index={step.index}
            title={step.title}
            description={step.description}
            img={step.img}
            position={step.position}
          />
        );
      })}
    </div>
  );
}
