import CarCard from "@/components/CarCard/CarCard";
import { cars } from "@/data/cars";

const FeaturedCars = () => {
  return (
    <section className="mt-10 mb-10 ">
      <div className="flex flex-col gap-2 mb-5">
        <h2 className="text-4xl font-bold">
          <span className="text-primary">Featured</span> cars
        </h2>
        <span className="text-muted-foreground text-xl">
          Explore our handpicked selection
        </span>
      </div>
      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-y-7 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
