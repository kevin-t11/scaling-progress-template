"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BuildSkeleton } from "./how-it-works/BuildSkeleton";
import { ProductSkeleton } from "./how-it-works/ProductSkeleton";
import { ScaleSkeleton } from "./how-it-works/ScaleSkeleton";

export const HowItWorks = () => {
  const items = [
    {
      title: "Product Strategy",
      description:
        "We’ll help you clarify your vision, define the right feature set, and turn your idea into a scalable software product roadmap.",
      skeleton: <ProductSkeleton />,
    },
    {
      title: "Build",
      description:
        "We design and build your software product with a clean design, strong technology, and everything working smoothly from day one.",
      skeleton: <BuildSkeleton />,
    },
    {
      title: "Scale",
      description:
        "Once your product is live, we help you grow. From improving speed to adding features or handling more users, we make sure your software keeps up as your business grows.",
      skeleton: <ScaleSkeleton />,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="flex flex-col items-center px-4">
      <span className="rounded-full bg-linear-to-r from-indigo-400 to-indigo-500 ring-2 ring-indigo-500 transition-all duration-300 px-4 py-1 text-white font-medium ring-offset-1">
        How it works
      </span>

      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
        Your Journey to Success
      </h2>

      <p className="text-center text-lg text-neutral-500 mt-4 mb-16 max-w-2xl">
        Three simple steps to build powerful software products
      </p>

      <div
        ref={containerRef}
        className="relative flex flex-col gap-6 w-full max-w-4xl"
      >
        {items.map((item, index) => (
          <Card
            key={index}
            index={index}
            total={items.length}
            progress={scrollYProgress}
            title={item.title}
            description={item.description}
            skeleton={item.skeleton}
          />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  index,
  total,
  progress,
  title,
  description,
  skeleton,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  title: string;
  description: string;
  skeleton: React.ReactNode;
}) => {
  /**
   * Each card occupies an equal slice of scroll space
   */
  const start = index / total;
  const end = (index + 1) / total;

  /**
   * Card flow animation (Pyramid Stack):
   * - Active card = scale 1
   * - As next cards stack on top, this card scales down progressively
   */
  const scale = useTransform(
    progress,
    [start, end, 1],
    [1, 1, 1 - (total - index - 1) * 0.04]
  );

  const opacity = useTransform(progress, [start - 0.1, start - 0.05], [0, 1]);

  const y = useTransform(progress, [start - 0.1, start], [24, 0]);

  const stickyTop = 120 + index * 28;

  return (
    <div className="sticky flex justify-center" style={{ top: stickyTop }}>
      <motion.div
        style={{
          scale,
          opacity,
          y,
          zIndex: index,
          transformOrigin: "top",
        }}
        className="relative w-full h-[420px] rounded-3xl bg-white border border-neutral-200 shadow-xl overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left */}
          <div className="p-10 flex flex-col justify-between border-r border-neutral-100">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full bg-indigo-50 text-indigo-600 font-bold px-3 py-1 text-xs uppercase tracking-wider">
                PHASE {index + 1}
              </span>
              <h3 className="text-3xl font-bold text-neutral-900">{title}</h3>
              <p className="text-neutral-600 leading-relaxed font-medium">
                {description}
              </p>
            </div>
            <div className="text-8xl font-black text-indigo-50 select-none">
              {(index + 1).toString().padStart(2, "0")}
            </div>
          </div>

          {/* Right */}
          <div className="bg-neutral-50 flex items-center justify-center p-8">
            <div className="w-full h-full rounded-2xl bg-white border border-neutral-100 shadow-inner flex items-center justify-center">
              {skeleton}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
