export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-[var(--color-gold)] ${className}`}>
      <span className="h-px w-10 bg-current opacity-60" />
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
      </svg>
      <span className="h-px w-10 bg-current opacity-60" />
    </div>
  );
}
