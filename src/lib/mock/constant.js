import cappuccino from "@/assets/images/Rectangle 7.png";
import chai from "@/assets/images/Rectangle 9.png";
import macchiato from "@/assets/images/Rectangle 11.png";
import espresso from "@/assets/images/Rectangle 13.png";
import coffeeBeans from "@/assets/images/coffee-beans 1.png";
import badge from "@/assets/images/badge 1.png";
import coffeeCup from "@/assets/images/coffee-cup 1.png";
import bestPrice from "@/assets/images/best-price 1.png";
export const coffeeCards = [
  {
    id: 1,
    name: "Cappuccino",
    src: cappuccino,
    structure: "Coffee 33% | Milk 67%",
    price: "$4.50",
  },
  {
    id: 2,
    name: "Chai Latte",
    src: chai,
    structure: "Coffee 0% | Milk 100%",
    price: "$4.75",
  },
  {
    id: 3,
    name: "Macchiato",
    src: macchiato,
    structure: "Coffee 75% | Milk 25%",
    price: "$3.75",
  },
  {
    id: 4,
    name: "Espresso",
    src: espresso,
    structure: "Coffee 100% | Milk 0%",
    price: "$2.50",
  },
];

export const featureCards = [
  {
    id: 1,
    title: "Supreme Beans",
    description: "Beans that provide great taste.",
    image: coffeeBeans,
    alt: "Coffee beans icon",
    featured: true,
  },

  {
    id: 2,
    title: "High Quality",
    description: "We provide the highest quality.",
    image: badge,
    alt: "Quality badge icon",
    featured: false,
  },

  {
    id: 3,
    title: "Extraordinary",
    description: "Coffee like you have never tasted.",
    image: coffeeCup,
    alt: "Coffee cup icon",
    featured: false,
  },

  {
    id: 4,
    title: "Affordable Price",
    description: "Our coffee prices are easy to afford.",
    image: bestPrice,
    alt: "Best price icon",
    featured: false,
  },

];

