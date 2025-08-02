import Terms from "./terms";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | Empire Blue",
    description: "Terms and Conditions",
};

export default function TermsPage() {
    return (
        <Terms />
    );
}