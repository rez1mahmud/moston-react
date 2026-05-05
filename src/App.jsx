// Author: Rezwan Mahmud
// Create: 05/05/2026
// Update: 05/05/2026


import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Services from './components/Services';
import About from './components/About';
import Rent from './components/Rent';
import Commercial from './components/Commercial';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.body.classList.add('js-ready');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el));
      setTimeout(() => {
        document.querySelectorAll('.fade-up:not(.visible)').forEach((el) => el.classList.add('visible'));
      }, 800);
    }, 100);
    return () => { clearTimeout(timer); obs.disconnect(); };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <Services />
        <About />
        <Rent />
        <Commercial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
