import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if SimpleBar is available and has a ref
    const simpleBarRef = document.querySelector('.custom-scrollbar [data-simplebar]');
    if (simpleBarRef) {
      // Access the SimpleBar instance and scroll to top
      const simpleBarInstance = SimpleBar.instances.get(simpleBarRef);
      if (simpleBarInstance) {
        simpleBarInstance.getScrollElement().scrollTop = 0;
      }
    } else {
      // Fallback to window.scrollTo if SimpleBar is not present
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // This component doesn't render anything, it just handles scrolling
  return null;
}

export default ScrollToTop;
