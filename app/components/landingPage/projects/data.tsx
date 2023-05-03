import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as BsIcons from "react-icons/bs";
import { IconType } from "react-icons";

interface TagListProps {
  name: string;
  icon: IconType;
}
export interface ProjectProps {
  name: string;
  links: string[];
  tags: TagListProps[];
  content: string;
  img: string;
  // icons?: JSX.Element[];
}

export const projects = [
  {
    name: "Youtube Bot",
    links: ["https://github.com/voyagebagage/view-booster-pwa"],
    img: "",
    content:
      "A personal project to boost the views of videos youtube, this is made as a progressive web app, with NextJs on the front and Back end, This works locally only as it is currently 2mb to big to be deployed,and that is why I won't use pupeteer for boting... I'm looking at EC2 to deploy it",

    tags: [
      { name: "NextJs", icon: TbIcons.TbBrandNextjs },
      { name: "React", icon: SiIcons.SiReact },
      { name: "Puppeteer", icon: SiIcons.SiPuppeteer },
      { name: "Bootstrap", icon: BsIcons.BsBootstrap },
    ],
  },
  {
    name: "Dashboard Gamification",
    links: ["https://github.com/voyagebagage/dashboard-gamification-demo"],
    img: "",
    content:
      "My first project at the company, I was tasked to create a dashboard for the company's gamification system deployed on AWS, I used ReactJs, Amplify and Semantic UI. The API is made with GraphQl, the App can CRUD clients, campaigns, and agents. it has a search function, a login/sign up system that creates agent, a filtered daily/weekly/monthly leaderboard, and last a taks system that rewards points, uptdate to agents based on their actions.",
    tags: [
      { name: "React", icon: SiIcons.SiReact },
      { name: "AWS", icon: SiIcons.SiAmazonaws },
      { name: "Amplify", icon: SiIcons.SiAwsamplify },
      { name: "GraphQL", icon: SiIcons.SiGraphql },
      { name: "DynamoDB", icon: SiIcons.SiAmazondynamodb },
      { name: "Semantic UI", icon: SiIcons.SiChakraui },
    ],
  },
  {
    name: "Happy Cow App clone",
    links: [
      "https://github.com/voyagebagage/oliv-happyCow-native",
      "https://github.com/voyagebagage/test-location-withinRay",
      "https://github.com/voyagebagage/active-box-filter-component",
    ],
    img: "",
    content:
      "This is a clone of the Happy Cow app, which was the last project at Le Reacteur (Bootcamp name), I used React Native and Expo. it is a mobile app that allows you to find vegan restaurants, and filter them by distance, price, and rating. It is responsice on every app devices",
    tags: [
      { name: "React Native", icon: SiIcons.SiReact },
      { name: "NodeJs", icon: SiIcons.SiNodedotjs },
      { name: "Express", icon: SiIcons.SiExpress },
      { name: "Expo", icon: SiIcons.SiExpo },
      { name: "MongoDB", icon: SiIcons.SiMongodb },
    ],
  },
  {
    name: "Vinted clone",
    links: [""],
    img: "",
    content:
      "First full stack project, made with ReactJs and NodeJs, during the bootcamp",
    tags: [
      { name: "React", icon: SiIcons.SiReact },
      { name: "NodeJs", icon: SiIcons.SiNodedotjs },
      { name: "Express", icon: SiIcons.SiExpress },
      { name: "Expo", icon: SiIcons.SiExpo },
      { name: "MongoDB", icon: SiIcons.SiMongodb },
    ],
  },
  {
    name: "Portfolio",
    links: ["https://github.com/voyagebagage/portfolio"],
    img: "",
    content: "",
    tags: [
      { name: "NextJs", icon: TbIcons.TbBrandNextjs },
      { name: "React", icon: SiIcons.SiReact },
      { name: "Typescript", icon: SiIcons.SiTypescript },
      { name: "Framer Motion", icon: TbIcons.TbBrandFramerMotion },
      { name: "Tailwindcss", icon: SiIcons.SiTailwindcss },
      { name: "Chakra UI", icon: SiIcons.SiChakraui },
    ],
  },
  {
    name: "AirTable app",
    links: [""],
    img: "",
    content:
      "My boss ask me to create small app to manage his messy AirTable, I was collection data from reply.io in his marketing campaings ",
    tags: [
      { name: "Air Table", icon: TbIcons.TbBrandAirtable },
      { name: "Javascript", icon: SiIcons.SiJavascript },
      { name: "API calls", icon: TbIcons.TbApi },
    ],
  },
  {
    name: "Sixt.fr",
    links: ["https://github.com/voyagebagage/oliv-thailand-exam-front-sixt"],
    img: "",
    content: "this is a clone of the Sixt.fr website, made during my bootcamp",
    tags: [
      { name: "React", icon: SiIcons.SiReact },
      { name: "NodeJs", icon: SiIcons.SiNodedotjs },
      { name: "Express", icon: SiIcons.SiExpress },
    ],
  },
  {
    name: "Marvel",
    links: [
      "https://github.com/voyagebagage/Marvel-API-React-Remake",
      "https://github.com/voyagebagage/oliDev-back-Marvel",
    ],
    img: "",
    content:
      "This is a app that search for marvel and comics books, you can add them to your favorites. I added a cubic space background made with ThreeJs. This is currently not working because it was deployed on Heroku, and it is not free anymore",
    tags: [
      { name: "React", icon: SiIcons.SiReact },
      { name: "ThreeJs", icon: SiIcons.SiThreedotjs },
      { name: "NodeJs", icon: SiIcons.SiNodedotjs },
      { name: "Express", icon: SiIcons.SiExpress },
    ],
  },
];

//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
//   { name: "",img:'' ,tags: ["", ""] },
