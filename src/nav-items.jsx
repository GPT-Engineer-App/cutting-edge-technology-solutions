import { Home, Briefcase, Users, BookOpen, Phone } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <Briefcase className="h-4 w-4" />,
    page: null, // We'll implement this later
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: null, // We'll implement this later
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <BookOpen className="h-4 w-4" />,
    page: null, // We'll implement this later
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: null, // We'll implement this later
  },
];