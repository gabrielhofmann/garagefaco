import { Arrow } from "../Arrow";

export function StackedButton() {
  return (
    <button className="relative pb-3 pl-3 group cursor-pointer active:scale-90 transition-all duration-200">
      <div className="absolute top-4 right-4 bottom-0 left-0 bg-accent border-4 border-foreground group-hover:bg-primary transition-all duration-500"></div>

      <div className="relative z-20 bg-primary border-4 border-foreground text-[1vw] uppercase font-medium py-4 px-8 flex items-center gap-4 group-hover:bg-accent transition-all duration-500">
        <Arrow size="1vw" variant="black" className="w-0 group-hover:w-[1vw] transition-all duration-500" />


        <span>ver a proxima garage</span>

        <Arrow size="1vw" variant="black" className="group-hover:w-0 transition-all duration-500" />
      </div>
    </button>
  );
}
