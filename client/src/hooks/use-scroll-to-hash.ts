import { useEffect } from 'react';

/**
 * Hook to handle smooth scrolling to hash sections
 */
export function useScrollToHash() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      
      const elementId = href === '#' ? 'top' : href.slice(1);
      const element = elementId === 'top' 
        ? document.body 
        : document.getElementById(elementId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        
        // Update URL but don't scroll again
        window.history.pushState(null, '', href);
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Handle initial hash in URL
    if (window.location.hash) {
      const elementId = window.location.hash.slice(1);
      const element = document.getElementById(elementId);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
}
