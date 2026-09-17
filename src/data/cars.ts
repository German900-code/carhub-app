import ToyotaCamryImg from "../assets/cars/2020-Toyota-camry-front.png";
import HondaCivicImg from "../assets/cars/honda-civic-2021.webp";
import FordFocusImg from "../assets/cars/2018-ford-focus-rs.jpg";
import LexusGSImg from "../assets/cars/lexus-gs350-2010.png";
import MercedesBenzImg from "../assets/cars/mercedes-gls-2022.png";
import BMWImg from "../assets/cars/M5F90.png";
import CLSImg from "../assets/cars/cls-63.webp";
import AudiS8 from "../assets/cars/Audi-S8.webp";
import DodgeCharger from "../assets/cars/dodge-charger-2018.png";
import JeepGrandCherokeeTrckhw from "../assets/cars/jeep-grandcherokee-trckhw.png";
import Chrysler300S from "../assets/cars/chrysler-300s.png";

export type Car = {
  id: number;
  brand: string;
  model: string;
  fuel: "Gasoline" | "Diesel" | "Hybrid" | "Electric";
  year: number;
  mileage: number;
  transmission: "Manual" | "Automatic" | "Robotic" | "CVT";
  price: number;
  drivetrain: "FWD" | "RWD" | "AWD";
  image: string;
  horsepower: number;
  engine: number;
  seats: number;
};

export const cars: Car[] = [
  {
    id: 1,
    brand: "BMW",
    model: "M5 F90",
    fuel: "Gasoline",
    year: 2019,
    mileage: 70000,
    transmission: "Automatic",
    price: 50000,
    drivetrain: "AWD",
    image: BMWImg,
    horsepower: 625,
    engine: 4.4,
    seats: 5,
  },
  {
    id: 2,
    brand: "Mercedes",
    model: "CLS 63 AMG",
    fuel: "Gasoline",
    year: 2016,
    mileage: 90000,
    transmission: "Automatic",
    price: 40000,
    drivetrain: "AWD",
    image: CLSImg,
    horsepower: 585,
    engine: 5.5,
    seats: 5,
  },
  {
    id: 3,
    brand: "Audi",
    model: "S8",
    fuel: "Gasoline",
    year: 2014,
    mileage: 150000,
    transmission: "Automatic",
    price: 30000,
    drivetrain: "AWD",
    image: AudiS8,
    horsepower: 519,
    engine: 4.0,
    seats: 5,
  },
  {
    id: 4,
    brand: "Toyota",
    model: "Camry",
    fuel: "Hybrid",
    year: 2021,
    mileage: 200000,
    transmission: "Automatic",
    price: 15000,
    drivetrain: "FWD",
    image: ToyotaCamryImg,
    horsepower: 218,
    engine: 2.5,
    seats: 5,
  },
  {
    id: 5,
    brand: "Lexus",
    model: "GS 350",
    fuel: "Gasoline",
    year: 2010,
    mileage: 250000,
    transmission: "Automatic",
    price: 8000,
    drivetrain: "RWD",
    image: LexusGSImg,
    horsepower: 305,
    engine: 3.5,
    seats: 5,
  },
  {
    id: 6,
    brand: "Honda",
    model: "Civic",
    fuel: "Hybrid",
    year: 2021,
    mileage: 200000,
    transmission: "CVT",
    price: 14000,
    drivetrain: "FWD",
    image: HondaCivicImg,
    horsepower: 180,
    engine: 2,
    seats: 5,
  },
  {
    id: 7,
    brand: "Jeep",
    model: "Grand Cherokee ",
    fuel: "Gasoline",
    year: 2018,
    mileage: 120000,
    transmission: "Automatic",
    price: 60000,
    drivetrain: "AWD",
    image: JeepGrandCherokeeTrckhw,
    horsepower: 700,
    engine: 6.2,
    seats: 5,
  },
  {
    id: 8,
    brand: "Dodge",
    model: "Charger",
    fuel: "Gasoline",
    year: 2018,
    mileage: 150000,
    transmission: "Automatic",
    price: 16000,
    drivetrain: "RWD",
    image: DodgeCharger,
    horsepower: 370,
    engine: 5.7,
    seats: 5,
  },
  {
    id: 9,
    brand: "Chrysler",
    model: "300S",
    fuel: "Gasoline",
    year: 2021,
    mileage: 100000,
    transmission: "Automatic",
    price: 30000,
    drivetrain: "AWD",
    image: Chrysler300S,
    horsepower: 363,
    engine: 5.7,
    seats: 5,
  },
];
