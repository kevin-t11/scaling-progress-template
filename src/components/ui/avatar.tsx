"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: number;
  className?: string;
}

export const Avatar = ({
  src,
  alt,
  fallback,
  size = 40,
  className,
}: AvatarProps) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full border-2 border-white bg-neutral-100 shadow-sm",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || "Avatar"}
          width={size}
          height={size}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-600">
          {fallback || "?"}
        </div>
      )}
    </div>
  );
};

interface Member {
  username: string;
  src: string;
}

interface AvatarGroupProps {
  members: Member[];
  size?: number;
  limit?: number;
  className?: string;
}

export const AvatarGroup = ({
  members,
  size = 40,
  limit = 5,
  className,
}: AvatarGroupProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const displayMembers = members.slice(0, limit);
  const remainingCount = members.length - limit;

  return (
    <div className={cn("flex flex-row items-center -space-x-3", className)}>
      {displayMembers.map((member, index) => (
        <motion.div
          key={member.username}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{
            scale: 1.1,
            zIndex: 10,
            marginRight: "2px",
            marginLeft: "2px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative"
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.6 }}
                className="absolute -top-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center gap-1"
              >
                <div className="relative flex items-center justify-center whitespace-nowrap rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white shadow-2xl ring-1 ring-white/10">
                  {member.username}
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-neutral-900" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Avatar
            src={member.src}
            alt={member.username}
            size={size}
            className="cursor-pointer transition-shadow hover:shadow-md"
          />
        </motion.div>
      ))}
      {remainingCount > 0 && (
        <div
          style={{ width: size, height: size }}
          className="relative z-0 flex items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-[10px] font-bold text-neutral-600 shadow-sm"
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
