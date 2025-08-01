import Login from "./book-now";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Empire Blue",
  description: "Access your Empire Blue account to manage your orders and preferences.",
};

export default function LoginPage() {
  return <Login />;
}