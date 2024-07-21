import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function WhatIDid({ data }: { data: string[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[1.1rem] text-[#16f2b3]">My work here?</AccordionTrigger>
        <ul>
          {data.map((d) => {
            return (
              <li key={d}>
                <AccordionContent className="text-[1rem] font-[500]">
                  {d}
                </AccordionContent>
              </li>
            )
          })}
        </ul>
      </AccordionItem>
    </Accordion>
  )
}
