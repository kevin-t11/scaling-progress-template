import {
  DashboardIcon,
  IdeaIcon,
  OrbitIcon,
  TargetIcon,
  UsersIcon,
} from "@/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ProductSkeleton = () => {
  return (
    <div className="relative size-full rounded-2xl bg-linear-to-br from-indigo-100/10 via-indigo-100/10 to-indigo-100/10 border border-white/10 flex items-center justify-center overflow-hidden group shadow-inner">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="grid grid-cols-4 grid-rows-4 h-full w-full">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/20" />
          ))}
        </div>
      </div>

      <motion.div
        className="absolute size-60 rounded-full border-4 border-dashed border-indigo-400/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key="sequence"
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
          >
            <IconCycler />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const IconCycler = () => {
  const [index, setIndex] = useState(0);
  const icons = [
    { component: IdeaIcon, color: "text-amber-400" },
    { component: UsersIcon, color: "text-sky-400" },
    { component: OrbitIcon, color: "text-indigo-400" },
    { component: DashboardIcon, color: "text-purple-400" },
    { component: TargetIcon, color: "text-emerald-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [icons.length]);

  const ActiveIcon = icons[index].component;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.6, ease: "anticipate" }}
        className={icons[index].color}
      >
        <ActiveIcon className="size-24 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
      </motion.div>
    </AnimatePresence>
  );
};
