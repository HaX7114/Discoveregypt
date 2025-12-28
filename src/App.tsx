import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { TempleGallery } from './components/TempleGallery';
import { TimelineSection } from './components/TimelineSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-[#0a0a0a] min-h-screen">
      <Hero />
      <StorySection />
      <TempleGallery />
      <TimelineSection />
      <Footer />
    </div>
  );
}