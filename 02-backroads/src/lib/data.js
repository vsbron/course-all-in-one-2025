import tour1 from "../assets/tour-1.jpg";
import tour2 from "../assets/tour-2.jpg";
import tour3 from "../assets/tour-3.jpg";
import tour4 from "../assets/tour-4.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://twitter.com/", icon: "fab fa-twitter" },
  { id: 2, href: "https://facebook.com/", icon: "fab fa-facebook" },
  { id: 3, href: "https://instagram.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    days: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    img: tour2,
    date: "October 11th, 2020",
    title: "Best of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    days: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    img: tour3,
    date: "September 15th, 2020",
    title: "Explore Hong Kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    days: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    img: tour4,
    date: "December 5th, 2019",
    title: "Kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    days: "20 days",
    price: "from $3300",
  },
];
