import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

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
    <Card className="flex flex-col p-5 border">
      <Icon className="text-primary bg-primary/10 rounded-full w-12 h-12 p-3" />
      {/* <img src={card.icon} alt={card.icon} /> */}
      <CardTitle className="font-bold text-lg">{card.title}</CardTitle>
      <CardDescription className="text-muted-foreground">
        {card.description}
      </CardDescription>
    </Card>
  );
};

export default WhyChooseUsCard;
