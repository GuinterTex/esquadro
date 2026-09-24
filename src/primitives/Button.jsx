export function Button({ href, children, compra = false }) {
  return (
    <a
      href={href}
      target="_self"
      data-cta={compra ? "compra" : undefined}
      className="inline-flex min-h-12 w-full items-center justify-center bg-giz px-6 text-base font-medium text-fundo hover:bg-branco sm:w-auto sm:min-w-64"
    >
      {children}
    </a>
  );
}
