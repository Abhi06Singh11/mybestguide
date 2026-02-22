'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState('');
  const [show, setShow] = useState(true);

  // Typewriter effect logic
  useEffect(() => {
    if (!visible) return;

    const fullText = "We Build. You Grow. Simple..!";
    const speed = 60;
    let i = 0;
    let isDeleting = false;
    let typeTimeout: NodeJS.Timeout;

    function typeEffect() {
      const currentText = isDeleting ? fullText.substring(0, i--) : fullText.substring(0, i++);
      setText(currentText);

      let timeoutDelay = isDeleting ? speed / 2 : speed;

      if (!isDeleting && i > fullText.length) {
        isDeleting = true;
        timeoutDelay = 1200; // Pause at the end
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        timeoutDelay = 500; // Pause before restarting
      }
      
      typeTimeout = setTimeout(typeEffect, timeoutDelay);
    }
    
    // Start after a short delay
    typeTimeout = setTimeout(typeEffect, 100);

    return () => clearTimeout(typeTimeout);
  }, [visible]);

  // Hiding logic
  useEffect(() => {
    document.body.classList.add('js-loading');

    const minDisplayPromise = new Promise(resolve => setTimeout(resolve, 2500));
    const pageLoadPromise = new Promise(resolve => {
        // If window is already loaded, resolve immediately.
        if (document.readyState === 'complete') {
            resolve(true);
        } else {
            window.addEventListener('load', () => resolve(true), { once: true });
        }
    });

    const hidePreloader = () => {
        setVisible(false);
    };

    Promise.all([minDisplayPromise, pageLoadPromise]).then(hidePreloader);

    // Fallback to hide preloader after 10 seconds to prevent it from getting stuck
    const fallbackTimeout = setTimeout(hidePreloader, 10000);

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, []);

  // Remove from DOM after fade-out transition
  useEffect(() => {
    if (!visible) {
      const removeTimeout = setTimeout(() => {
        setShow(false);
        document.body.classList.remove('js-loading');
      }, 600); // This duration should match your CSS transition duration

      return () => clearTimeout(removeTimeout);
    }
  }, [visible]);

  if (!show) {
    return null;
  }

  return (
    <div id="preloader" className={cn(!visible && 'hide')}>
      <svg className="infinity" viewBox="0 0 187.3 93.7" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop id="preloader_gradient_start" offset="0%"/>
            <stop id="preloader_gradient_end" offset="100%"/>
          </linearGradient>
        </defs>
        <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" fill="none" stroke="url(#gradient)" id="outline"></path>
        <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" strokeWidth="5" fill="none" id="outline-bg"></path>
      </svg>
      <div className="brand">MyBestGuide</div>
      <div className="tagline" id="typewriter">{text}</div>
    </div>
  );
}
