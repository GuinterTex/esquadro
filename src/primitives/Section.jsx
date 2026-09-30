const spaces = {
  curto: "py-10 md:py-16",
  medio: "py-16 md:py-24",
  largo: "py-24 md:py-32",
};

const widths = {
  leitura: "max-w-5xl",
  ampla: "max-w-5xl",
};

export function Section({ id, space = "medio", width = "leitura", className = "", tabIndex, children }) {
  const coluna = width === "leitura" ? "max-w-[36rem] text-left" : "";
  return (
    <section id={id} tabIndex={tabIndex} className={`${spaces[space]} ${className}`.trim()}>
      <div className={`mx-auto grid w-full grid-cols-12 gap-x-4 ${widths[width]} px-5 md:px-8`}>
        <div className={`col-span-12 ${coluna}`}>{children}</div>
      </div>
    </section>
  );
}
