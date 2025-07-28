import Contact from './contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Empire Blue',
  description: 'Contact us for any questions or inquiries about our water purification systems.',
};

export default function ContactPage() {
  return <Contact />;
}