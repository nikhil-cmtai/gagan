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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9WRZ9ZR9P4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9WRZ9ZR9P4');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
