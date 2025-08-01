import Contact from "./contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us for more information",
};

export default function ContactPage() {
  return <Contact />;
}