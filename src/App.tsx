/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Process from './components/Process';
import Infrastructure from './components/Infrastructure';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Infrastructure />
        <Quality />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
