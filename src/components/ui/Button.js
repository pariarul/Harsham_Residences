import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "shadow-lg hover:shadow-xl",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-500 shadow-md hover:shadow-lg",
    outline: "border-2 hover:opacity-90 focus:ring-yellow-500",
    white: "bg-white shadow-md hover:shadow-lg",
    gold: "shadow-lg hover:shadow-xl",
  };

  // Inline style overrides for brand colors
  const variantStyles = {
    primary: { backgroundColor: "#1a4a2e", color: "white" },
    secondary: {},
    outline: { borderColor: "#c9a227", color: "#c9a227", backgroundColor: "transparent" },
    white: { color: "#1a4a2e" },
    gold: { backgroundColor: "#c9a227", color: "#1a4a2e" },
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <MotionLink
        href={href}
        className={combinedClassName}
        style={variantStyles[variant]}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      style={variantStyles[variant]}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
