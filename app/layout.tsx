import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { FloatingButton } from "@/components/layouts/floating-button";

export const metadata: Metadata = {
  title: "Empire Blue - For Health Conscious People",
  description: "Empire Blue - For Health Conscious People",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
