import { hexagons } from "./data";

export function FooterHoneycomb() {
  return (
    <div className="flex items-center justify-center lg:w-1/2 lg:py-0 pl-10 md:pl-32">
      <div className="hex-honeycomb">
        {hexagons.map((hex) => (
          <div
            key={hex.id}
            className={`hex-tile hex-tile--${hex.id} flex flex-col items-center justify-center gap-1.5 px-6`}
          >
            <span className="text-md font-bold uppercase tracking-widest opacity-80 leading-none text-center w-full">
              {hex.title}
            </span>
            <ul className="flex flex-col gap-1 w-full mt-0.5">
              {hex.sections.map((s) => (
                <li
                  key={s.label}
                  className="flex flex-row items-baseline justify-center gap-2 text-xs md:text-sm leading-tight md:px-3"
                >
                  <span className="font-semibold opacity-80 shrink-0">{s.label}</span>
                  {s.desc && <span className="opacity-50 text-left">{s.desc}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
