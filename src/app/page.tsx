import { Hero } from "@/components/Hero";
import { HeroImage } from "@/components/HeroImage";
import { HowItWorks } from "@/components/HowItWorks";
import { Logo, Navbar } from "@/components/Navbar";
import { BackgroundPattern } from "@/components/pattern";
import { cn } from "@/lib/utils";
import type React from "react";

export default function Page() {
  return (
    <div className="h-screen">
      <BackgroundPattern>
        <Container>
          <Navbar />
          <Hero />
          <HeroImage />
          <SectionSeparator />
          <HowItWorks />
          <SectionSeparator />
        </Container>
      </BackgroundPattern>
    </div>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-5xl mx-auto space-y-20">{children}</div>;
};

const SectionSeparator = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "mx-auto flex h-8 w-full max-w-xs md:max-w-[596px] items-center gap-6 px-4",
        className
      )}
    >
      <div className="relative h-px w-full flex-1 bg-border">
        <div className="absolute z-30 w-2 h-2 bg-white border border-border left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 " />
        <div className="absolute z-30 w-2 h-2 bg-white border border-border right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
      </div>
      <Logo className="size-8 shrink-0" />
      <div className="relative h-px w-full flex-1 bg-border">
        <div className="absolute z-30 w-2 h-2 bg-white border border-border left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute z-30 w-2 h-2 bg-white border border-border right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
      </div>
    </div>
  );
};
