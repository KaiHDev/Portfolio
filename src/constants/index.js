import {
  html,
  css,
  javascript,
  react,
  tailwind,
  githubLogo,
  macbookScreen,
  moviefinderapp,
  shoppingcart,
  service,
  seo,
  comingsoon,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "KaiHallamCV.pdf",
    title: "",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: service,
    title: "Service website experience",
    content:
      "Working with clients to create services based websites, with sometimes complex forms for lead gathering",
  },
  {
    id: "feature-2",
    icon: shoppingcart,
    title: "Ecommerce website experience",
    content:
      "Creating ecommerce stores with capability to connect to Amazon/Ebay using Woocommerce",
  },
  {
    id: "feature-3",
    icon: seo,
    title: "Site Optimization Experience",
    content:
      "All sites I created were tested and optimized for performance and checked for device compatability",
  },
];

export const projects = [
  {
    id: "project-1",
    name: "Movie Finder App",
    content:
      "This project was created to showcase pulling in data from an API and also adding functionality to search the data within that API call.",
    imgScreen: macbookScreen,
    imgProject: moviefinderapp,
    ProjectLink: "https://moviefinderkh.netlify.app",
    CodeLink: "https://github.com/KaiHDev/MovieFinder",
  },
  {
    id: "project-2",
    name: "Ecommerce Store",
    content:
      "This project consisted of connecting to CommerceJS to host the products/payment gateway and was built with React",
    imgScreen: macbookScreen,
    imgProject: comingsoon,
    ProjectLink: "https://github.com/KaiHDev/",
    CodeLink: "https://github.com/KaiHDev/",
  },
  {
    id: "project-3",
    name: "Dashboard App",
    content:
      "This project consisted of connecting to CommerceJS to host the products/payment gateway and was built with React",
    imgScreen: macbookScreen,
    imgProject: comingsoon,
    ProjectLink: "https://github.com/KaiHDev/",
    CodeLink: "https://github.com/KaiHDev/",
  },
];

export const experience = [
  {
    id: 1,
    title: "Wordpress Experience",
    value: "4 Years",
  },
  {
    id: 2,
    title: "Software Engineering",
    value: "1 Year",
  },
  {
    id: 3,
    title: "Design Experience",
    value: "2 Years",
  },
];

export const logoList = [
  {
    id: 1,
    logo: html,
    name: "HTML",
  },
  {
    id: 2,
    logo: css,
    name: "CSS",
  },
  {
    id: 3,
    logo: javascript,
    name: "JavaScript",
  },
  {
    id: 4,
    logo: react,
    name: "React",
  },
  {
    id: 5,
    logo: tailwind,
    name: "Tailwind",
  },
  {
    id: 6,
    logo: githubLogo,
    name: "GitHub",
  },
];
