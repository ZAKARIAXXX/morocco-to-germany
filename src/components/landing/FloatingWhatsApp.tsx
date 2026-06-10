import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "./Navbar";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-success text-background shadow-[0_10px_30px_-6px_color-mix(in_oklab,var(--success)_60%,transparent)]"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-success/40" />
      <MessageCircle className="relative size-7" />
    </motion.a>
  );
}