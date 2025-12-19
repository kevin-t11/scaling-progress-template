"use client";
import { DatabaseIcon, ServerIcon } from "@/icons";
import { motion } from "motion/react";

export const ScaleSkeleton = () => {
  const bars = [30, 45, 35, 60, 50, 80, 70, 95];

  const seeded = (seed: number) => Math.abs(Math.sin(seed * 9999)) % 1;

  const particles = Array.from({ length: 5 }, (_, i) => ({
    x: seeded(i + 1) * 300,
    delay: seeded(i + 10) * 2,
    duration: 3 + seeded(i + 20) * 2,
  }));
  return (
    <div className="w-full h-full flex flex-col justify-end gap-6 p-6 overflow-hidden">
      <div className="flex gap-4">
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex-1 h-12 bg-indigo-50/50 rounded-xl border border-indigo-100 p-2 flex items-center"
          >
            <div className="w-6 h-6 rounded-lg bg-indigo-600/10 flex items-center justify-center mr-2">
              <div className="w-2 h-2 rounded-full bg-indigo-600" />
            </div>
            <div className="space-y-1">
              <div className="w-8 h-1.5 bg-indigo-600/20 rounded" />
              <div className="w-12 h-1 bg-slate-200 rounded" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex-1 flex items-end justify-between gap-2 px-2 relative h-full">
        <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full h-px bg-slate-100" />
          ))}
        </div>

        <svg className="absolute inset-0 w-full h-full overflow-visible z-10">
          <motion.path
            d="M 10 120 Q 80 110, 150 60 T 300 10"
            fill="none"
            stroke="#6366f1"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </svg>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <ServerIcon className="size-20" />
          <DatabaseIcon className="size-20" />
        </div>

        {bars.map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="w-full bg-lienar-to-t from-indigo-600/40 to-indigo-600/10 rounded-t-sm"
            />
            <div className="w-full h-1 bg-slate-100 rounded-full" />
          </div>
        ))}

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              initial={{ y: 300, x: particle.x, opacity: 0 }}
              animate={{
                y: -50,
                opacity: [0, 0.5, 0],
                x: particle.x,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
              className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
