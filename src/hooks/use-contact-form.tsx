import { createContext, useContext, useState, type ReactNode } from "react";

interface ContactContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return <ContactContext.Provider value={{ open, setOpen }}>{children}</ContactContext.Provider>;
}

export function useContactForm() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContactForm must be used within ContactProvider");
  return ctx;
}
