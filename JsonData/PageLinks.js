import {
  AiOutlineDashboard,
  MdOutlineHomeWork,
  FaMagnifyingGlassLocation,
  FaPersonShelter,
  IoNewspaperOutline,
} from "../Utils/ApplicationIcon";

export const asidebarOptions = [
  {
    name: "Dashboard",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/super-admin",
  },
  {
    name: "PROJECT",
    iconComponent: MdOutlineHomeWork, // Use the imported component
    link: "/super-admin/projects",
  },
  {
    name: "BLOG",
    iconComponent: IoNewspaperOutline, // Use the imported component
    link: "/super-admin/blog",
  },
  {
    name: "CITY PAGE",
    iconComponent: FaMagnifyingGlassLocation, // Use the imported component
    link: "/super-admin/cities",
  },
  {
    name: "DEVELOPER",
    iconComponent: FaPersonShelter, // Use the imported component
    link: "/super-admin/developer",
  },
];

// projects

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
