import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  "Ausbildung Experts",
  "500+ Students Helped",
  "Personalized 1:1 Support",
  "CV & Application Review",
  "Visa Guidance",
];

export function TrustBar() {
  return (
    <section className="relative border-y border-border/60 py-6">
      <Reveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <CheckCircle2 className="size-4 text-success" />
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}