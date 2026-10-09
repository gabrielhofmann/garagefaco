import { Arrow } from "../Arrow";
import { Asterisk } from "../Asterisk";

export function Contact() {
  return (
    <section className="w-full flex flex-col gap-8 p-8">
      <div className="w-full space-y-8">
        <div className="w-2/3 space-y-8">
          <div className="flex gap-4 items-center">
            <Asterisk size="2vw" variant="red" />

            <span className="text-[2vw] leading-none uppercase font-medium text-primary">
              contato
            </span>
          </div>

          <h2 className="text-[11vh] leading-none font-anton uppercase">
            sua garage sale <br /> começa aqui
            <span className="text-primary">.</span>
          </h2>
        </div>

        <div className="w-full h-screen pt-16 flex gap-8">
          <div className="h-full w-1/2 flex flex-col justify-between">
            <p className="font-anton text-[5vw] uppercase leading-none">
              vamos fazer a sua garage sale acontecer
            </p>

            <div className="w-full bg-accent border-4 flex gap-4 py-4 px-8">
              <div className="flex items-center justify-between gap-8 w-1/2">
                <div>
                  <p className="font-anton text-[1.5vw] uppercase">whatsapp</p>
                  <p className="text-[1.25vw] font-bold">(61) 99999-9999</p>
                </div>

                <div className="-rotate-45">
                  <Arrow size="2vw" variant="black" />
                </div>
              </div>

            <div className="h-full w-1 bg-foreground"></div>

              <div className="flex items-center justify-between gap-8 w-1/2">
                <div>
                  <p className="font-anton text-[1.5vw] uppercase">instagram</p>
                  <p className="text-[1.25vw] font-bold">@garagedafaco</p>
                </div>

                <div className="-rotate-45">
                  <Arrow size="2vw" variant="black" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-full w-1/2 relative pb-4 pr-4">
            <div className="absolute top-4 bottom-0 left-4 right-0 bg-foreground"></div>

            <div className="w-full h-full bg-accent border-4 border-foreground relative z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
