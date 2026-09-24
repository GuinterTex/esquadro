import { Button } from "../primitives/Button.jsx";
import { hrefCompra } from "../site.js";
import { cta, reassurance } from "../copy.js";

export function Compra() {
  return (
    <div className="mt-8">
      <Button href={hrefCompra()} compra>
        {cta}
      </Button>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-mudo">{reassurance}</p>
    </div>
  );
}
