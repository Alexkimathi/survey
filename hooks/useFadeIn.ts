'use client';

import { useEffect, useRef } from 'react';

export function useFadeIn() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () => {
      container.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    };

    observe();

    const mutation = new MutationObserver(observe);
    mutation.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return ref;
}
