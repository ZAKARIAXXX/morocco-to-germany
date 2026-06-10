import { useMemo } from "react";

/**
 * Slow animated gradient mesh + floating particles for ambient depth.
 */
export function AmbientBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 6,
        duration: 7 + Math.random() * 8,
        gold: Math.random() > 0.5,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base navy */}
      <div className="absolute inset-0 bg-background" />
      {/* gradient mesh blobs */}
      <div className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)] blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--german-red)_16%,transparent),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_12%,transparent),transparent_70%)] blur-3xl" />
      {/* particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float-slow"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.gold
              ? "color-mix(in oklab, var(--gold) 70%, transparent)"
              : "color-mix(in oklab, white 50%, transparent)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}