"use client";
import { SettingsIcon, ToolIcon } from "@/icons";
import { motion } from "motion/react";

export const BuildSkeleton = () => {
  return (
    <div className="shadow-sm size-full p-6 rounded-lg">
      <div className="relative size-full rounded-lg flex flex-col gap-4 border border-muted">
        <div className="h-10 w-full bg-muted rounded-tr-lg rounded-tl-lg">
          <div className="flex justify-start items-center gap-2 h-full px-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "75%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-3 bg-indigo-200 rounded-full"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-3 bg-indigo-200 rounded-full"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "71.43%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-3 bg-indigo-200 rounded-full"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="h-3 bg-indigo-200 rounded-full"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="h-3 bg-indigo-200 rounded-full"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "33.33%" }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="h-3 bg-indigo-200 rounded-full"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "25%" }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="h-3 bg-indigo-200 rounded-full"
          />
        </div>
        <motion.div
          className="absolute -right-2 top-8"
          initial={{ rotate: -20 }}
          animate={{ rotate: [-20, 20] }}
          transition={{
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
          }}
        >
          <ToolIcon className="size-10 -rotate-25" />
        </motion.div>
        <motion.div
          className="absolute right-6 top-40"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <SettingsIcon className="size-24" />
        </motion.div>
      </div>
    </div>
  );
};
