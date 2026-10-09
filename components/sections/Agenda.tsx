import { ScrollText } from "lucide-react";
import { Asterisk } from "../Asterisk";
import { Arrow } from "../Arrow";
import { GarageDetailsCard } from "../cards/GarageDetailsCard";

export function Agenda() {
  return (
    <section className="w-screen h-screen p-8">
      <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-8">
        <div className="col-span-12 row-start-1 row-span-2 overflow-hidden self-end flex justify-between items-end">
          <div className="w-2/3 space-y-8">
            <div className="flex gap-4 items-center">
              <Asterisk size="2vw" variant="red" />

              <span className="text-[2vw] leading-none uppercase font-medium text-primary">
                agenda
              </span>
            </div>

            <h2 className="text-[11vh] leading-none font-anton uppercase w-2/3">
              próximas <br /> garage sales
              <span className="text-primary">.</span>
            </h2>
          </div>

          <div className="w-1/3">
            <div className="bg-accent border-4 border-foreground p-4 space-y-4">
              <div className="flex items-center gap-4">
                <ScrollText size="2vw" className="text-foreground" />
                <p className="uppercase font-bold text-[1.5vw] leading-none">
                  entre na nossa lista
                </p>
              </div>

              <div className="w-full h-0.5 bg-foreground"></div>

              <p className="text-[1.1vw] text-foreground leading-[1.5vw] font-medium text-justify">
                Para preservar a privacidade de cada espaço, divulgamos os
                endereços apenas para quem está na nossa lista. Entre para
                receber os detalhes das próximas garages.
              </p>

              <button className="w-full flex items-center group relative cursor-pointer active:scale-90 transition-all duration-200">
                <div className="absolute h-0 bg-foreground w-full bottom-0 group-hover:h-full transition-all duration-200"></div>

                <div className="flex w-full justify-between items-center transition-all duration-200 group-hover:p-4 z-20 border-y-2 border-foreground py-2">
                  <p className="uppercase text-[1.3vw] leading-none font-medium group-hover:text-white z-20">
                    entrar
                  </p>

                  <div className="-rotate-45">
                    <Arrow
                      variant="black"
                      className="text-foreground transition-all duration-200 group-hover:text-white"
                      size="1.3vw"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-12 row-start-3 row-span-4 gap-8 flex">
          <GarageDetailsCard
            variant="highlight"
            date={{ days: "18 - 20", month: "JULHO" }}
            location="asa norte"
            time={[
              { day: "SEX", hours: "09H 12H" },
              { day: "SAB", hours: "09H 12H" },
              { day: "DOM", hours: "09H 12H" },
            ]}
            key="qe"
          />

          <GarageDetailsCard
            variant="default"
            date={{ days: "01 - 03", month: "AGOSTO" }}
            location="sudoeste"
            time={[
              { day: "SEX", hours: "09H 12H" },
              { day: "SAB", hours: "09H 12H" },
              { day: "DOM", hours: "09H 12H" },
            ]}
            key="qee"
          />

          <GarageDetailsCard
            variant="default"
            date={{ days: "07 - 09", month: "DEZEMBRO" }}
            location="lago norte"
            time={[
              { day: "SEX", hours: "09H 12H" },
              { day: "SAB", hours: "09H 12H" },
              { day: "DOM", hours: "09H 12H" },
            ]}
            key="qeee"
          />
        </div>
      </div>
    </section>
  );
}
