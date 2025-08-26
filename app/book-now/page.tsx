import BookNow from "./book-now";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Now - Empire Blue",
  description: "Access your Empire Blue account to manage your orders and preferences.",
};

export default function BookNowPage() {
  return <BookNow />;
}