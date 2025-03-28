import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '../components/main/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `Kia's Portfolio`,
  description: 'This is my portfolio'
};

// Root Layout (Server Component)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
