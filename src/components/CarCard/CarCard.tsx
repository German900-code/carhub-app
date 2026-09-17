import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  PlusCircleIcon,
  Calendar1Icon,
  DollarSign,
  Fuel,
  Settings2,
  Gauge,
  Cog,
  Milestone,
  Users,
  Cylinder,
  Zap,
  CarFront,
  CalendarDays,
  MapPin,
  Palette,
  BriefcaseBusiness,
  UsersRound,
  ShieldCheck,
  Wrench,
  Road,
  CarBattery,
  Ruler,
  Flame,
} from "lucide-react";
import { Icon } from "@iconify/react";

import type { Car } from "@/data/cars";

// type Car = {
//   id: number;
//   brand: string;
//   model: string;
//   fuel: "Gasoline" | "Diesel" | "Hybrid" | "Electric";
//   year: number;
//   mileage: number;
//   transmission: "Manual" | "Automatic" | "Robotic" | "CVT";
//   price: number;
//   drivetrain: "FWD" | "RWD" | "AWD";
//   image: string;
//   horsepower: number;
//   engine: number;
//   seats: number;
// };

// const cars: Car[] = [
//   {
//     id: 1,
//     brand: "BMW",
//     model: "M5 F90",
//     fuel: "Gasoline",
//     year: 2019,
//     mileage: 70000,
//     transmission: "Automatic",
//     price: 50000,
//     drivetrain: "AWD",
//     image: BMWImg,
//     horsepower: 625,
//     engine: 4.4,
//     seats: 5,
//   },
//   {
//     id: 2,
//     brand: "Mercedes",
//     model: "CLS 63 AMG",
//     fuel: "Gasoline",
//     year: 2016,
//     mileage: 90000,
//     transmission: "Automatic",
//     price: 40000,
//     drivetrain: "AWD",
//     image: CLSImg,
//     horsepower: 585,
//     engine: 5.5,
//     seats: 5,
//   },
// ];

type CarCardProps = {
  car: Car;
};

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="w-[400px] cursor-pointer">
      <CardHeader className="flex flex-col items-center gap-y-2">
        <CardTitle className="flex flex-row items-center justify-evenly text-2xl">
          {/* BMW 5 Series G30 */}
          {car.brand} {car.model}
        </CardTitle>
        <h3 className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {/* 2020 • 530i • Automatic */}
          {car.year} • {car.transmission}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="relative h-[200px] w-full overflow-hidden rounded-lg border border-border">
            <img
              src={car.image}
              alt={car.model}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="flex items-center">
            <DollarSign className="text-primary" size={18} />
            <span className="text-lg font-bold">{car.price}</span>
          </span>
          <div className="flex items-center justify-around mt-2">
            <div className="flex flex-col gap-3 items-center">
              <span className="flex items-center gap-2">
                <Calendar1Icon className="text-primary" size={18} />
                <span className="text-lg">{car.year}</span>
              </span>
              <span className="flex items-center gap-2">
                <Fuel className="text-primary" size={18} />
                <span className="text-lg">{car.fuel}</span>
              </span>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="flex items-center gap-2">
                <Road className="text-primary" size={18} />
                <span className="text-lg">{car.mileage} km</span>
              </span>
              <span className="flex items-center gap-2">
                <Settings2 className="text-primary" size={18} />
                <span className="text-lg">{car.transmission}</span>
              </span>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="flex items-center gap-2">
                <Cylinder className="text-primary" size={18} />
                <span className="text-lg">{car.engine}L</span>
              </span>
              <span className="flex items-center gap-2">
                <Cog className="text-primary" size={18} />
                <span className="text-lg">{car.drivetrain}</span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-around">
        <Button className="cursor-pointer bg-transparent text-primary hover:text-black">
          View Details
        </Button>
        <Button className="flex items-center justify-between gap-2 cursor-pointer hover:text-primary hover:bg-transparent">
          <PlusCircleIcon size={18} />
          Add to favorites
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
