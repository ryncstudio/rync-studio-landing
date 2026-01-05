import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  fullWidth = false
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const initial = {
    opacity: 0,
    x: directionOffset[direction].x,
    y: directionOffset[direction].y
  };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? visible : initial}
      transition={{
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: delay
      }}
      className={cn(fullWidth ? "w-full" : "", className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
