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
  ecommerce
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
      "Creating ecommerce stores with capability to connect to Amazon/Ebay using Woocommerce/Shopify",
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
    name: "Ecommerce Website",
    content:
      "This full-stack e-commerce application was developed using React and Next.js for the front end, with Supabase serving as the backend for data storage, authentication, and file handling. The interface was styled using Tailwind CSS, with MUI's DataGrid used for admin product management.",
    imgScreen: macbookScreen,
    imgProject: ecommerce,
    ProjectLink: "https://khe-commerce.netlify.app/",
    CodeLink: "https://github.com/KaiHDev/ecommerce-site",
  },
  {
    id: "project-2",
    name: "Movie Finder App",
    content:
      "This movie finder application was built using React for the front end and styled with Tailwind CSS. It utilizes a third-party movie API to fetch and display movie data dynamically. It works by searching and displaying key movie details, demonstrating API integration and responsive interface design.",
    imgScreen: macbookScreen,
    imgProject: moviefinderapp,
    ProjectLink: "https://moviefinderkh.netlify.app",
    CodeLink: "https://github.com/KaiHDev/MovieFinder",
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
    value: "2 Years",
  },
  {
    id: 3,
    title: "Development",
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
