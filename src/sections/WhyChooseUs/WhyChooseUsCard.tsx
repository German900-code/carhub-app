import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type Card = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type CardProps = {
  card: Card;
};

const WhyChooseUsCard = ({ card }: CardProps) => {
  const Icon = card.icon;

  return (
    <Card className="group flex flex-col min-h-36 w-full p-5 border hover:border-primary hover:scale-[1.02] transition-all duration-300">
      <Icon className="text-primary bg-primary/10 rounded-full w-12 h-12 p-3 transition-colors group-hover:bg-primary/50" />
      <CardTitle className="font-bold text-lg">{card.title}</CardTitle>
      <CardDescription className="text-muted-foreground">
        {card.description}
      </CardDescription>
      <span className="mt-auto flex justify-end">
        <ArrowRight className="transition-transform duration-300 text-primary/75 group-hover:translate-x-1" />
      </span>
    </Card>
  );
};

export default WhyChooseUsCard;
