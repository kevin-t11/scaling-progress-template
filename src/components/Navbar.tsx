"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const navItems = [
    { label: "Home", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why ScalingProgress", href: "#why-scalingprogress" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <div className="relative">
      <nav className="sticky top-4 mt-4 md:max-w-5xl mx-auto max-w-sm rounded-full z-50 bg-background/80 backdrop-blur-sm border border-border/50">
        <div className="flex item-center justify-between p-4 md:px-6">
          <div>
            <Logo
              onClick={() => router.push("/")}
              className="size-8 md:size-10"
            />
          </div>
          <div className="hidden md:flex items-center justify-center space-x-4 text-gray-900">
            {navItems.map((item) => (
              <Link
                className="text-sm font-medium text-foreground hover:text-primary"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <Button variant="skeuomorphic">
              <Link href="/">
                <span>Get Started</span>
              </Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center justify-center">
            <button
              className="active:scale-95 transition-all duration-300 size-6"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon toggle={isMenuOpen} />
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 mt-2 w-full max-w-sm px-4 z-40">
          <div className="flex flex-col items-start justify-center gap-2 px-4 py-4 w-full rounded-2xl border border-border/60 bg-background/95 shadow-lg backdrop-blur">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="font-medium text-neutral-800 hover:text-primary border-b border-neutral-200/60 last:border-b-0 px-2 py-2 w-full text-left"
              >
                <Link href={item.href}>{item.label}</Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center justify-center gap-4 w-full mt-2"
            >
              <Button
                variant="skeuomorphic"
                className="flex-1 items-center justify-center"
              >
                <Link href="/">
                  <span>Get Started</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      data-logo="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 67 41"
      {...props}
    >
      <g id="logogram" transform="translate(0, 0) rotate(0) ">
        <path
          d="M0.452637 20.81C0.452637 9.76427 9.40694 0.809967 20.4526 0.809967H46.7026C57.7484 0.809967 66.7026 9.76427 66.7026 20.81V40.81H20.4526C9.40694 40.81 0.452637 31.8557 0.452637 20.81Z"
          fill="#4845D2"
        />
        <path
          d="M46.7026 8.30997H20.4526C13.5491 8.30997 7.95264 13.9064 7.95264 20.81C7.95264 27.7135 13.5491 33.31 20.4526 33.31H46.7026C53.6062 33.31 59.2026 27.7135 59.2026 20.81C59.2026 13.9064 53.6062 8.30997 46.7026 8.30997Z"
          fill="#A5B4FC"
        />
        <path
          d="M20.4526 27.06C23.9044 27.06 26.7026 24.2617 26.7026 20.81C26.7026 17.3582 23.9044 14.56 20.4526 14.56C17.0009 14.56 14.2026 17.3582 14.2026 20.81C14.2026 24.2617 17.0009 27.06 20.4526 27.06Z"
          fill="black"
        />
        <path
          d="M17.9526 19.56C18.643 19.56 19.2026 19.0003 19.2026 18.31C19.2026 17.6196 18.643 17.06 17.9526 17.06C17.2623 17.06 16.7026 17.6196 16.7026 18.31C16.7026 19.0003 17.2623 19.56 17.9526 19.56Z"
          fill="white"
        />
        <path
          d="M47.9526 27.06C51.4044 27.06 54.2026 24.2617 54.2026 20.81C54.2026 17.3582 51.4044 14.56 47.9526 14.56C44.5009 14.56 41.7026 17.3582 41.7026 20.81C41.7026 24.2617 44.5009 27.06 47.9526 27.06Z"
          fill="black"
        />
        <path
          d="M45.4526 19.56C46.143 19.56 46.7026 19.0003 46.7026 18.31C46.7026 17.6196 46.143 17.06 45.4526 17.06C44.7623 17.06 44.2026 17.6196 44.2026 18.31C44.2026 19.0003 44.7623 19.56 45.4526 19.56Z"
          fill="white"
        />
      </g>
      <g id="logotype" transform="translate(67, 20.5)"></g>
    </svg>
  );
};

const MenuIcon = ({
  className,
  toggle,
}: {
  className?: string;
  toggle: boolean;
}) => {
  return (
    <div
      className={cn(
        "group flex size-full cursor-pointer items-center justify-center",
        className
      )}
    >
      <div className="relative grid size-4 cursor-pointer items-center justify-center">
        <motion.div
          animate={{ y: toggle ? 0 : "-5px", rotate: toggle ? 45 : 0 }}
          className="absolute h-0.5 w-full rounded-full bg-current"
        ></motion.div>
        <motion.div
          animate={{ opacity: toggle ? 0 : 1 }}
          transition={{ duration: 0.1 }}
          className="absolute h-0.5 w-full rounded-full bg-current"
        ></motion.div>
        <motion.div
          animate={{ y: toggle ? 0 : "5px", rotate: toggle ? -45 : 0 }}
          className="absolute h-0.5 w-full rounded-full bg-current"
        ></motion.div>
      </div>
    </div>
  );
};
