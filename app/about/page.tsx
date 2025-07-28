import About from './about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Empire Blue',
  description: 'Learn more about our mission and commitment to providing clean and safe water solutions.',
};  

export default function AboutPage() {
  return <About />;
}