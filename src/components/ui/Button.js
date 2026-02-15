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
    primary: "bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-500 shadow-lg hover:shadow-xl",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-500 shadow-md hover:shadow-lg",
    outline: "border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-500",
    white: "bg-white text-emerald-900 hover:bg-gray-100 focus:ring-white shadow-md"
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          className={combinedClassName}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...props}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
