import * as Accordion from "@radix-ui/react-accordion";
import { faqs } from "../copy.js";

export function Faq() {
  return (
    <Accordion.Root type="single" collapsible>
      {faqs.map((item) => (
        <Accordion.Item key={item.id} value={item.id} className="border-t border-filete">
          <Accordion.Header>
            <Accordion.Trigger className="flex min-h-12 w-full items-center py-3 text-left text-base font-medium text-giz underline-offset-4 hover:underline">
              {item.pergunta}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-1 pt-3 pb-5 text-mudo">{item.resposta}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
