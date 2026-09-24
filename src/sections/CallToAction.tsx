import { Button } from "@/components/ui/button";
import BMWM8Bg from "../assets/bg-images/bmw-m8-beautful-bg.jpg";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section
      className="relative overflow-hidden rounded-2xl p-7"
      // style={{ backgroundImage: `url(${BMWM8Bg})` }}
      // className="h-80 bg-center bg-cover p-8 uppercase rounded-md"
    >
      <div
        className="absolute inset-0 bg-cover bg-[center_80%] md:bg-center"
        style={{ backgroundImage: `url(${BMWM8Bg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-black/20" />
      <div className="relative flex flex-col gap-5">
        <h2 className="text-5xl font-bold">
          <span className="text-primary">There's more</span> <br /> to explore!
        </h2>
        <p className="text-muted-foreground">
          Discover thousands of cars, from legendary <br /> classics to modern
          performance.
        </p>
      </div>
      <Button className="relative cursor-pointer mt-7">
        Explore all cars
        <ArrowRight />
      </Button>
    </section>
  );
};

export default CallToAction;
