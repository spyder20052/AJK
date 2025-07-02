import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';
import News from '@/pages/News.jsx';
import Projects from '@/pages/Projects.jsx';
import MediaLibrary from '@/pages/MediaLibrary.jsx';
import BecomeMember from '@/pages/BecomeMember.jsx';
import Contact from '@/pages/Contact.jsx';
import Donate from '@/pages/Donate.jsx';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-beige font-sans">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/actualites" element={<News />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/mediatheque" element={<MediaLibrary />} />
          <Route path="/devenir-membre" element={<BecomeMember />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faire-un-don" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;