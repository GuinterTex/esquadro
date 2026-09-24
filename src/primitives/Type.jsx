export function H1({ children, tabIndex }) {
  return (
    <h1 tabIndex={tabIndex} className="w-fit max-w-full text-[1.75rem] text-giz sm:text-5xl">
      {children}
    </h1>
  );
}

export function H2({ children, marco = false, id, tabIndex }) {
  const escala = marco ? "text-3xl md:text-[2.5rem]" : "text-2xl md:text-3xl";
  return (
    <h2 id={id} tabIndex={tabIndex} className={`${escala} w-fit max-w-full text-giz`}>
      {children}
    </h2>
  );
}

export function H3({ children }) {
  return <h3 className="text-lg text-giz">{children}</h3>;
}

export function Kicker({ children }) {
  return <p className="font-mono text-sm text-mudo">{children}</p>;
}

export function Corpo({ children, mudo = false }) {
  return <p className={mudo ? "text-mudo" : "text-giz"}>{children}</p>;
}
