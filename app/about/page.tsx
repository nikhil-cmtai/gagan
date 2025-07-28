import About from "./about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Empire Blue",
  description: "Learn about our revolutionary water technology and our mission to provide safe, non-expiry water worldwide.",
};

export default function AboutPage() {
  return <About />;
}