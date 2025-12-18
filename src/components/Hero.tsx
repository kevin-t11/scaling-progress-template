"use client";
import { cn } from "@/lib/utils";

import { AvatarGroup } from "./ui/avatar";

export const Hero = () => {
  const members = [
    {
      username: "shadcn",
      src: "https://github.com/shadcn.png",
    },
    {
      username: "evil",
      src: "https://github.com/evilrabbit.png",
    },
    {
      username: "mdo",
      src: "https://github.com/mdo.png",
    },
    {
      username: "leerob",
      src: "https://github.com/leerob.png",
    },
    {
      username: "delbaoliveira",
      src: "https://github.com/delbaoliveira.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <HeroTitle />
        <HeroDescription />
      </div>
      <HeroCTAButton />
      <div className="flex items-center gap-3 mt-4">
        <AvatarGroup members={members} size={36} limit={5} />
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <HeroTrustBadge key={i} />
            ))}
          </div>
          <p className="text-sm font-medium text-neutral-600">
            Trusted by{" "}
            <span className="text-neutral-900 font-bold">Top Founders</span>
          </p>
        </div>
      </div>
    </div>
  );
};
// Build Software That Moves Your Business Forward
export const HeroTitle = () => {
  return (
    <h1 className="md:text-6xl text-4xl font-bold text-center tracking-tighter max-w-4xl mx-auto font-sans">
      <span className="flex items-center justify-center gap-2 bg-linear-to-t from-neutral-700 to-neutral-900 bg-clip-text text-transparent">
        Build Software That
      </span>
      <span className="flex items-center justify-center gap-2 tracking-tighter bg-linear-to-t from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
        Moves Your Business Forward
      </span>
    </h1>
  );
};

export const HeroDescription = () => {
  return (
    <p className="md:text-lg max-w-sm md:max-w-2xl text-base text-center text-muted-foreground mx-auto font-medium">
      Transform your vision into reality with software solutions. We help
      businesses{" "}
      <span className="font-bold text-foreground">
        scale faster, work smarter
      </span>
      , and stay ahead of the competition.
    </p>
  );
};

const HeroCTAButton = () => {
  return (
    <button
      className={cn(
        // Base layout and positioning
        "relative inline-flex items-center justify-center overflow-hidden",
        // Size and spacing
        "rounded-[12px] px-[18px] py-3 min-h-[48px] min-w-[180px]",
        // Border and outline
        "border-none outline-none",
        // Cursor and transitions
        "cursor-pointer transition-all duration-250 ease-in-out",
        // Background gradient
        "bg-[radial-gradient(65.28%_65.28%_at_50%_100%,rgba(129,140,248,0.8)_0%,rgba(129,140,248,0)_100%),linear-gradient(0deg,#6366f1,#6366f1)]",
        // Active state
        "active:scale-95",
        // Ring styles
        "ring-2 ring-indigo-500/30 ring-offset-0",
        // Before pseudo-element (inner highlight)
        "before:content-[''] before:absolute before:inset-px before:z-0",
        "before:transition-all before:duration-500 before:ease-in-out",
        "before:rounded-[11px]",
        "before:bg-[linear-gradient(177.95deg,rgba(255,255,255,0.19)_0%,rgba(255,255,255,0)_100%)]",
        // After pseudo-element (inner border)
        "after:content-[''] after:absolute after:inset-[2px] after:z-0",
        "after:transition-all after:duration-500 after:ease-in-out",
        "after:rounded-[10px] after:ring-1 after:ring-indigo-200/10 after:ring-inset",
        // Hover states
        "hover:[&_svg]:translate-x-0.5 hover:[&_svg_path]:animate-[dash_0.8s_linear_forwards]"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none z-10"
        )}
      >
        <span
          className={cn(
            "absolute bottom-[-10px] left-[10%] w-0.5 h-0.5 bg-white rounded-full",
            "opacity-100 pointer-events-none",
            "animate-[floating-points_2.35s_ease-in-out_infinite_0.2s]"
          )}
        />
        <span
          className={cn(
            "absolute bottom-[-10px] left-[30%] w-0.5 h-0.5 bg-white rounded-full",
            "opacity-70 pointer-events-none",
            "animate-[floating-points_2.5s_ease-in-out_infinite_0.5s]"
          )}
        />
        <span
          className={cn(
            "absolute bottom-[-10px] left-[25%] w-0.5 h-0.5 bg-white rounded-full",
            "opacity-80 pointer-events-none",
            "animate-[floating-points_2.2s_ease-in-out_infinite_0.1s]"
          )}
        />
        <span
          className={cn(
            "absolute bottom-[-10px] left-[44%] w-0.5 h-0.5 bg-white rounded-full",
            "opacity-60 pointer-events-none",
            "animate-[floating-points_2.05s_ease-in-out_infinite]"
          )}
        />
        <span
          className={cn(
            "absolute bottom-[-10px] left-[50%] w-0.5 h-0.5 bg-white rounded-full",
            "opacity-100 pointer-events-none",
            "animate-[floating-points_1.9s_ease-in-out_infinite]"
          )}
        />
        <span
          className={cn(
            "absolute bottom-[-10px] left-[75%] w-0.5 h-0.5 bg-white rounded-full",
            "opacity-50 pointer-events-none",
            "animate-[floating-points_1.5s_ease-in-out_infinite_1.5s]"
          )}
        />
        <span
          className={cn(
            "absolute bottom-[-10px] left-[88%] w-0.5 h-0.5 bg-white rounded-full",
            "opacity-90 pointer-events-none",
            "animate-[floating-points_2.2s_ease-in-out_infinite_0.2s]"
          )}
        />
        <span
          className={cn(
            "absolute bottom-[-10px] left-[58%] w-0.5 h-0.5 bg-white rounded-full",
            "opacity-80 pointer-events-none",
            "animate-[floating-points_2.25s_ease-in-out_infinite_0.2s]"
          )}
        />
        <span
          className={cn(
            "absolute bottom-[-10px] left-[98%] w-0.5 h-0.5 bg-white rounded-full",
            "opacity-60 pointer-events-none",
            "animate-[floating-points_2.6s_ease-in-out_infinite_0.1s]"
          )}
        />
        <span
          className={cn(
            "absolute bottom-[-10px] left-[65%] w-0.5 h-0.5 bg-white rounded-full",
            "opacity-100 pointer-events-none",
            "animate-[floating-points_2.5s_ease-in-out_infinite_0.2s]"
          )}
        />
      </div>
      <span
        className={cn(
          "relative z-10 inline-flex items-center justify-center w-full gap-2",
          "text-white text-base font-semibold leading-6",
          "transition-colors duration-200 ease-in-out"
        )}
      >
        Get Started
        <svg
          className={cn(
            "w-[18px] h-[18px] transition-transform duration-300 ease-in-out",
            "stroke-white fill-none"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </button>
  );
};

const HeroTrustBadge = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="w-4 h-4 fill-indigo-500 text-indigo-500"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
  );
};
