import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CarCard from "@/components/CarCard/CarCard";
import FeaturedCars from "@/sections/FeaturedCars";
import WhyChooseUsGrid from "@/sections/WhyChooseUs/WhyChooseUsGrid";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/components/Footer/Footer";
// import WhyChooseUsCard from "@/sections/WhyChooseUs/WhyChooseUsCard";

const Home = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* <div className="mx-auto grid  max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24"> */}
        {/* Content */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            The ultimate car marketplace
          </div>
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          FIND YOUR
          <br />
          <span className="text-primary">DREAM CAR.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Discover cars, explore specifications and find the vehicle that fits
          your style.
        </p>

        {/* Search */}
        <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search make, model or keyword..."
              className="h-12 border-border bg-card pl-10"
            />
          </div>

          <Button size="lg" className="h-12 cursor-pointer">
            Explore Cars
            <ArrowRight />
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap gap-8">
          <div>
            <p className="text-2xl font-bold">10K+</p>
            <p className="text-sm text-muted-foreground">Cars</p>
          </div>

          <div>
            <p className="text-2xl font-bold">50+</p>
            <p className="text-sm text-muted-foreground">Brands</p>
          </div>

          <div>
            <p className="text-2xl font-bold">24/7</p>
            <p className="text-sm text-muted-foreground">Updated</p>
          </div>
        </div>
      </div>

      {/* Visual */}
      {/* <div className="relative hidden lg:block"> */}
      <div className="relative hidden w-full max-w-[500px] justify-self-start lg:block">
        <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />

        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-border bg-card">
          <div className="text-center">
            <p className="text-7xl">🚗</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Your next car starts here
            </p>
          </div>
        </div>
      </div>

      {/* <CarCard /> */}
      <FeaturedCars />
      <WhyChooseUsGrid />
      <CallToAction />
    </section>
  );
};

export default Home;
