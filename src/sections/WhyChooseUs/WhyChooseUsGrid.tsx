import WhyChooseUsCard from "./WhyChooseUsCard";
import { Search, Heart, Shield, CarFront } from "lucide-react";

const dataCards = [
  {
    id: 1,
    icon: Search,
    title: "Easy Search",
    description:
      "Find the right car quickly with our powerful search and smart filters.",
  },
  {
    id: 2,
    icon: Heart,
    title: "Save Favorites",
    description:
      "Keep your favorite cars in one place and never lose track of them.",
  },
  {
    id: 3,
    icon: Shield,
    title: "Detailed Info",
    description:
      "Get all the important details - from specs and history to high-quality photos.",
  },
  {
    id: 4,
    icon: CarFront,
    title: "Wide Selection",
    description:
      "Explore a huge variety of cars from different brands model and price ranges.",
  },
];

const WhyChooseUsGrid = () => {
  return (
    <section className="m-7 mt-10">
      <div className="flex items-center gap-2 justify-center text-center">
        <hr className="w-[40%] md:w-[10%] bg-primary" />
        <span className="text-primary uppercase">Why Choose Carhub?</span>
        <hr className="w-[40%] md:w-[10%] bg-primary" />
      </div>

      <h2 className="m-7 text-5xl text-center">
        Why Choose <span className="text-primary">CarHub?</span>
      </h2>
      <p className="text-muted-foreground text-center">
        We make finding your next car simple, safe and enjoyable. <br /> Here's
        why thousands of drivers choose CarHub.
      </p>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row mt-7">
        {dataCards.map((card) => (
          <WhyChooseUsCard card={card} key={card.id} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsGrid;
