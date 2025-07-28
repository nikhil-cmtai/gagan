import Login from './login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Empire Blue',
  description: 'Login to your account to access your water purification system.',
};

export default function LoginPage() {
  return <Login />;
}