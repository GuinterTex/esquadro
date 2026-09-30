export function Button({ href, children, compra = false }) {
  return (
    <a
      href={href}
      target="_self"
      data-cta={compra ? "compra" : undefined}
      className="cta inline-flex min-h-14 w-full items-center justify-center overflow-hidden bg-giz px-8 text-base font-semibold text-fundo hover:bg-branco sm:w-auto sm:min-w-72"
    >
      {children}
    </a>
  );
}
