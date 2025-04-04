'use client';

import StarBackground from './StarBackground';
import Navbar from './Navbar';
import ProgressBar from './ProgressBar';
import Footer from './Footer';

export default function ClientLayout({ children }) {
  return (
    <>
      <StarBackground />
      <ProgressBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
