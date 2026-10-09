import { MapPin } from "lucide-react";
import Image from "next/image";
import { Arrow } from "../Arrow";
import { Seal } from "../Seal";

type GarageDetailsCard = {
  variant: "highlight" | "default";
  date: {
    days: string;
    month: string;
  };
  time: {
    day: string;
    hours: string;
  }[];
  location: string;
};

export function GarageDetailsCard({
  date,
  time,
  location,
  variant,
}: GarageDetailsCard) {
  const cardColor = variant === "highlight" ? "bg-primary" : "bg-transparent";
  const mainTextColor =
    variant === "highlight" ? "text-white" : "text-foreground";
  const arrowVariant = variant === "highlight" ? "white" : "black";
  const iconColor =
    variant === "highlight" ? "text-foreground" : "text-primary";

  return (
    <div
      className={`w-1/3 h-full border-4 border-foreground flex flex-col relative ${mainTextColor} ${cardColor}`}
    >
      {variant === "highlight" ? (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/12 border-4 border-foreground font-medium text-[2vh] leading-none bg-accent p-4 uppercase text-foreground">
          mais próxima
        </div>
      ) : null}

      <div className="flex gap-8 justify-between p-8">
        <div className="text-[4vh] leading-none font-bold shrink-0">
          <p className="text-[8vh] font-anton">{date.days}</p>
          <p>{date.month}</p>
        </div>

        
      </div>

      <div className="flex items-center justify-end px-8 gap-2 pb-4">
        <MapPin size="3vh" className={`${iconColor}`} />

        <p className="font-medium text-[2vh] leading-none uppercase">
          {location}
        </p>
      </div>



      <div className="flex-1 flex items-center flex-col pt-8 border-t-8 border-foreground overflow-hidden relative">

        <div className="w-full h-full -translate-x-[33%] -translate-y-[33%] opacity-15">
          <Seal size="120%" variant="black" />
        </div>

        <div className="text-[2.5vh] font-bold leading-none absolute inset-0 pt-8 px-8 flex flex-col items-center gap-4 divide-y-4">
          {time.map((time) => {
            return (
              <div key={time.day} className="flex w-full justify-between gap-8 pb-4">
                <p>{time.day}</p>

                <p>{time.hours}</p>
              </div>
            );
          })}
        </div>

        <button className="w-full justify-end items-end flex-col flex gap-8 absolute bottom-0 p-8">
          <div className="-rotate-45">
            <Arrow variant={arrowVariant} size="4vw" />
          </div>

          <p
            className={`uppercase text-[2vw] leading-0 font-black ${mainTextColor}`}
          >
            quero ir
          </p>
        </button>
      </div>
    </div>
  );
}
