import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-balance text-4xl font-semibold tracking-normal md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
        {description}
      </p>
    </Reveal>
  );
}
