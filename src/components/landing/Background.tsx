export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_70%)] blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--german-red)_12%,transparent),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_70%)] blur-3xl" />
    </div>
  );
}
