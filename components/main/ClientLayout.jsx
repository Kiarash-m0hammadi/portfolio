'use client';

import StarsCanvas from './StarBackground';
import Navbar from './Navbar';
import ProgressBar from './ProgressBar';
import Footer from './Footer';

export default function ClientLayout({ children }) {
  return (
    <>
      <StarsCanvas />
      <ProgressBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
