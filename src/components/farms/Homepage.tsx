"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Building2,
  ClipboardCheck,
  Droplets,
  Thermometer,
  Package,
  Bike,
  ArrowRight,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import buffalo from "../../../public/images/buffalo.png";
import cow from "../../../public/images/cow.jpg";
import cow2 from "../../../public/images/cow2.jpg";
// import buffaloMilk from "../../../public/images/buffalo-milk.jpg";
// import cowMilk from "../../../public/images/cow-milk.jpg";

const carouselImages = [
  { src: buffalo, alt: "Buffalo herd eating grass" },
  { src: cow, alt: "Cow in a green field" },
  { src: cow2, alt: "Fresh milk bottles" },
];

const milkTypes = [
  {
    name: "Buffalo Milk",
    image: buffalo,
    description: [
      "Rich and creamy buffalo milk, perfect for your daily needs.",
      "Higher in fat and protein content compared to cow milk.",
      "Ideal for making rich dairy products like ghee and paneer.",
      "Known for its distinctive taste and creamy texture.",
    ],
    prices: {
      daily: "₹98/day",
      weekly: "₹678/week",
      monthly: "₹2888/month",
    },
  },
  {
    name: "Cow Milk",
    image: cow,
    description: [
      "Fresh and nutritious cow milk, straight from our local farms.",
      "Lower in calories and cholesterol compared to buffalo milk.",
      "Rich in essential nutrients like calcium, vitamin D, and potassium.",
      "Versatile milk suitable for drinking and cooking various dishes.",
    ],
    prices: {
      daily: "₹78/day",
      weekly: "₹538/week",
      monthly: "₹2288/month",
    },
  },
];

const processSteps = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Direct Sourcing",
    description:
      "Partner with local farmers to source fresh milk daily, ensuring it's free from intermediaries and preserving the milk's natural freshness.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Quality Assurance",
    description:
      "Regular checks on milk quality, ensuring the absence of additives or contaminants. Only milk from healthy, well-maintained farms is selected.",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Eco-Friendly Bottling",
    description:
      "Milk is bottled in hygienic, reusable glass bottles, minimizing plastic use and ensuring purity.",
  },
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Fast Delivery Process",
    description:
      "Milk is collected and delivered to households within 3-4 hours of milking, ensuring freshness without the need for refrigeration hubs.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Targeted Delivery Areas",
    description:
      "Focus on delivering to apartments and colonies in tier 2-4 cities, building a reputation in these communities for purity and convenience.",
  },
  {
    icon: <Bike className="w-8 h-8" />,
    title: "Subscription Model",
    description:
      "Monthly subscription plans provide customers with fresh milk daily, simplifying access to high-quality farm milk for consistent customer satisfaction.",
  },
];

const benefits = [
  {
    title: "Farm to Home Before 8AM",
    description:
      "Experience the unparalleled freshness of farm-fresh milk delivered directly to your doorstep by 8AM every day. Our milk comes straight from healthy, local buffaloes and cows, ensuring maximum nutrition and natural goodness. We skip intermediaries and warehouses, delivering milk within hours of milking to maintain its pure, wholesome flavor and essential nutrients.",
  },
  {
    title: "Eco-Friendly, Reusable Glass Bottles",
    description:
      "Our commitment to sustainability means we deliver your milk in high-quality, reusable glass bottles. This eco-friendly approach not only helps reduce plastic waste but also preserves the rich, natural taste and nutritional quality of the milk. With every bottle, you’re supporting a cleaner planet and a healthier lifestyle, ensuring that freshness reaches you in the best way possible.",
  },
  {
    title: "Empowering and Supporting Local Farmers",
    description:
      "When you choose RaaFarms Fresh Milk, you're doing more than just buying milk – you're supporting local farmers directly. By cutting out middlemen, we ensure that farmers receive fair compensation for their hard work, promoting sustainable farming practices within your community. This choice helps foster a strong local economy, fair wages for farmers, and a healthier food chain for everyone.",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("daily");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-[#F5E6CA] text-[#8B5E3C]">
      <header className="bg-[#005C3B] py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#F5E6CA]">RaaFarms</div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-[#F5E6CA]"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-[#F5E6CA] border-l-[#005C3B]"
            >
              <nav className="flex flex-col space-y-4 mt-6">
                <a
                  href="#"
                  className="text-[#8B5E3C] hover:text-[#005C3B] text-lg font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-[#8B5E3C] hover:text-[#005C3B] text-lg font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-[#8B5E3C] hover:text-[#005C3B] text-lg font-medium"
                >
                  Contact
                </a>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-[#F5E6CA] hover:text-white font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#F5E6CA] hover:text-white font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#F5E6CA] hover:text-white font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative h-[600px] md:h-[800px] bg-[#005C3B] overflow-hidden">
          <div className="absolute inset-0">
            {carouselImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#F5E6CA]">
              Farm-Fresh Milk Delivered Daily
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-[#F5E6CA]/90">
              Experience the richness of pure, farm-fresh milk in eco-friendly
              bottles.
            </p>
            <Button className="bg-[#8B5E3C] text-[#F5E6CA] hover:bg-[#F5E6CA] hover:text-[#8B5E3C] text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Subscribe Now
            </Button>
          </div>

          <Button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#F5E6CA]/20 hover:bg-[#F5E6CA]/40 text-[#F5E6CA] rounded-full p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#F5E6CA]/20 hover:bg-[#F5E6CA]/40 text-[#F5E6CA] rounded-full p-2"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </section>

        <section className="py-20 bg-[#F5E6CA]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#8B5E3C]">
              Our Premium Milk Selection
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {milkTypes.map((milk, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl bg-white border border-[#005C3B]/10"
                >
                  <div className="relative h-64">
                    <Image
                      src={milk.image}
                      alt={milk.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#8B5E3C]">
                      {milk.name}
                    </CardTitle>
                    <CardDescription className="text-md text-left text-[#8B5E3C]/80">
                      <ul className="list-disc pl-5 space-y-1">
                        {milk.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="daily" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 mb-4 bg-[#005C3B]/10">
                        <TabsTrigger
                          value="daily"
                          className="text-sm md:text-base data-[state=active]:bg-[#005C3B] data-[state=active]:text-[#F5E6CA]"
                        >
                          Daily
                        </TabsTrigger>
                        <TabsTrigger
                          value="weekly"
                          className="text-sm md:text-base data-[state=active]:bg-[#005C3B] data-[state=active]:text-[#F5E6CA]"
                        >
                          Weekly
                        </TabsTrigger>
                        <TabsTrigger
                          value="monthly"
                          className="text-sm md:text-base data-[state=active]:bg-[#005C3B] data-[state=active]:text-[#F5E6CA]"
                        >
                          Monthly
                        </TabsTrigger>
                      </TabsList>
                      {Object.entries(milk.prices).map(([period, price]) => (
                        <TabsContent key={period} value={period}>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-[#8B5E3C]">
                              {price}
                            </p>
                            <Button className="mt-4 bg-[#005C3B] text-[#F5E6CA] hover:bg-[#8B5E3C] text-lg px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                              Subscribe
                            </Button>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#005C3B]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-16 text-center text-[#F5E6CA]">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#F5E6CA] flex items-center justify-center mb-4 group-hover:bg-[#8B5E3C] transition-colors duration-300">
                      <div className="text-[#005C3B] group-hover:text-[#F5E6CA] transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#F5E6CA]">
                      {step.title}
                    </h3>
                    <p className="text-md text-[#F5E6CA]/80">
                      {step.description}
                    </p>
                  </div>
                  {index < 5 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8">
                      <ArrowRight className="w-8 h-8 text-[#F5E6CA]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-2xl font-bold text-center text-[#F5E6CA]/90">
              Bottling is recommended within 60 minutes of reception
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F5E6CA]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#8B5E3C]">
              Why Choose RaaFarms?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-white border-2 border-[#005C3B] shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-[#8B5E3C]">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-md text-[#8B5E3C]/80">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#005C3B] py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#F5E6CA] mb-2">
                RaaFarms Milk
              </h3>
              <p className="text-[#F5E6CA]/80">
                Delivering pure, farm-fresh milk since 2024
              </p>
            </div>
            <div className="flex space-x-6">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[#F5E6CA] hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
