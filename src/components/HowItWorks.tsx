"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const HowItWorks = () => {
  const items = [
    {
      title: "Product Strategy",
      description:
        "We’ll help you clarify your vision, define the right feature set, and turn your idea into a scalable software product roadmap.",
      skeleton: <div />,
    },
    {
      title: "Build",
      description:
        "We design and build your software product with a clean design, strong technology, and everything working smoothly from day one",
      skeleton: <div />,
    },
    {
      title: "Scale",
      description:
        "Once your product is live, we help you grow. From improving speed to adding features or handling more users, we make sure your software keeps up as your business grows.",
      skeleton: <div />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4">
      <span className="rounded-full bg-indigo-500 px-4 py-1.5 text-sm text-white font-medium ring-2 ring-indigo-500/20">
        How it works
      </span>
      <div className="flex flex-col items-center justify-center gap-3 max-w-3xl mx-auto mb-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
          Your Journey to Success
        </h2>
        <p className="text-center text-lg text-muted-foreground font-medium">
          Three simple steps to build powerful software products
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-4xl mx-auto relative gap-4">
        {items.map((item, index) => (
          <Card
            key={index}
            index={index + 1}
            title={item.title}
            description={item.description}
            skeleton={item.skeleton}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  index,
  title,
  description,
  skeleton,
}: {
  index: number;
  title: string;
  description: string;
  skeleton: React.ReactNode;
}) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const stickyTop = 100 + (index - 1) * 24;

  return (
    <div
      ref={cardRef}
      className="w-full min-h-[50vh] flex items-start justify-center sticky"
      style={{ top: `${stickyTop}px` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative max-w-4xl bg-white border border-neutral-200 rounded-3xl shadow-lg w-full h-[400px] overflow-hidden group"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 h-full">
          <div className="p-10 flex flex-col justify-between border-r border-neutral-100">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full bg-indigo-50 text-indigo-600 font-bold px-3 py-1 text-xs uppercase tracking-wider">
                Step {index}
              </span>
              <h3 className="text-3xl font-bold text-neutral-900">{title}</h3>
              <p className="text-neutral-600 leading-relaxed font-medium">
                {description}
              </p>
            </div>
            <div className="text-8xl font-black text-neutral-50 group-hover:text-indigo-50/50 transition-colors select-none">
              {index.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="bg-neutral-50 flex items-center justify-center p-8">
            <div className="w-full h-full rounded-2xl bg-white border border-neutral-100 shadow-inner flex items-center justify-center">
              {skeleton}
              <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest">
                Preview {index}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
