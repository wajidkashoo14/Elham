import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function AccordionDemo() {
    return (
        <div className="flex flex-col justify-start items-start">
      <Accordion type="single" collapsible className="w-full mt-16">
        <AccordionItem value="item-1">
          <AccordionTrigger>What types of products do you offer?</AccordionTrigger>
          <AccordionContent className="max-w-[600px]">
          We specialize in unique Kashmiri handicrafts, including beautifully designed papier-mâché and wooden boxes, as well as a selection of other intricately decorated items.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Are all your products handmade?</AccordionTrigger>
          <AccordionContent>
          Yes, each item is handcrafted by skilled artisans, using traditional Kashmiri techniques passed down through generations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What materials are used in your products?</AccordionTrigger>
          <AccordionContent>
          Our products are made from high-quality papier-mâché and wood, sourced and prepared to ensure durability and authenticity.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I request custom designs on a box or other item?</AccordionTrigger>
          <AccordionContent>
          Yes, we welcome custom orders. If you have a specific design or color scheme in mind, please contact us, and we’ll do our best to create a piece that reflects your vision.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do I care for and maintain these items?</AccordionTrigger>
          <AccordionContent>
          For papier-mâché and wooden products, avoid exposure to moisture and direct sunlight. Clean gently with a soft, dry cloth to maintain their beauty and longevity.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  