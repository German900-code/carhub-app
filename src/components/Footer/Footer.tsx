import { Link, NavLink } from "react-router-dom";
import { CarFront } from "lucide-react";
import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import { ArrowRightIcon, ArrowRight } from "lucide-react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/70 p-5 mt-5 rounded-lg relative overflow-hidden">
      {/* <div className=""> */}

      <div className="flex flex-col md:flex-row md:justify-between md:gap-3 md:items-center">
        <div className="flex flex-col items-start gap-3 w-full md:w-[40%]">
          <Link to="/" className="flex items-center gap-2">
            <CarFront className="size-6 text-primary" />

            <span className="text-xl font-bold tracking-tight">
              CAR<span className="text-primary">HUB</span>
            </span>
          </Link>
          <h3 className="text-bold">Find your perfect ride.</h3>
          <p className="text-muted-foreground">
            We bring you the best cars, reliable information and a smooth
            experience. Your next adventure starts here.
          </p>
        </div>

        <div className="flex flex-row items-center mt-7 justify-between gap-x-10 md:">
          <div className="">
            <h3 className="text-primary font-bold text-center">Quick Links</h3>
            <div className="flex flex-row gap-3 mt-2 justify-center md:flex-col">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/cars">Cars</NavLink>
              <NavLink to="/about">About Us</NavLink>
            </div>
          </div>

          <div className="">
            <h3 className="text-primary font-bold text-center">Follow Us</h3>
            <div className="flex flex-row gap-3 mt-2 justify-center md:flex-col">
              <NavLink to="https://www.youtube.com/" target="_blank">
                <Icon icon="mdi:youtube" className="text-red-500 w-6 h-6" />
              </NavLink>
              <NavLink to="https://www.instagram.com/" target="_blank">
                <Icon icon="mdi:instagram" className="text-pink-500 w-6 h-6" />
              </NavLink>
              <NavLink to="https://www.facebook.com" target="_blank">
                <Icon icon="mdi:facebook" className="text-blue-500 w-6 h-6" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <Card className="">
            <CardHeader className="flex flex-row  justify-between gap-3">
              <Mail className="text-primary bg-primary/10 rounded-sm p-2 w-12 h-10" />
              <div className="flex flex-col gap-2 items-start">
                <CardTitle>Stay in the loop</CardTitle>
                <CardDescription>
                  Get the latest cars, updates and exclusive offers.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ButtonGroup className="w-full relative h-10 ">
                <Mail className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Enter your email address"
                  className="w-full pl-10 h-auto"
                />
                <Button className="h-auto cursor-pointer">
                  <ArrowRight />
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </div>
      </div>
      <hr className="mt-5 mb-3 w-full" />
      <div className="flex flex-row items-center justify-center gap-2 mt-3">
        <h4 className="text-muted-foreground">
          &copy; {new Date().getFullYear()}
        </h4>
        <p className="text-muted-foreground">All rights reserved.</p>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
