export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col leading-none">
      <span
        className="font-script text-3xl md:text-4xl"
        style={{ color: light ? "var(--color-gold)" : "var(--color-gold)" }}
      >
        MayCakes
      </span>
      <span
        className="text-[0.6rem] tracking-[0.4em] uppercase mt-1 self-center"
        style={{ color: light ? "rgba(255,255,255,0.7)" : "var(--color-cream)" }}
      >
        Confeitaria
      </span>
    </div>
  );
}
