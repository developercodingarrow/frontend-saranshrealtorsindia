import { AiOutlineDashboard } from "../Utils/ApplicationIcon";

export const asidebarOptions = [
  {
    name: "Dashboard",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/super-admin",
  },
  {
    name: "ADD PROJECT",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/super-admin/projects/create-project",
  },
  {
    name: "CITY PAGE",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/super-admin/cities",
  },
  {
    name: "DEVELOPER",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/super-admin/developer",
  },
];

export const asidefooterLink = [
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "Contact Us",
    link: "/",
  },
  {
    name: "Privacy Policy",
    link: "/",
  },
];
