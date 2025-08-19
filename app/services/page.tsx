import React from "react";
import ServicesPage from "./services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services - Empire Blue",
    description: "Explore our premium water solutions including non-expiry water, home care, and vehicle care services.",
};

export default function Services() {
    return <ServicesPage />;
}