import { useEffect, useState } from 'react';
import { ScrollDirection, useScrollDirection } from 'react-use-scroll-direction';
import { throttle } from '@/utils/throttle';

export function useNavigation(): {
  scrollDirection: ScrollDirection;
  isMounted: boolean;
  menuOpen: boolean;
  toggleMenu: () => void;
} {
  const [isMounted, setMounted] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { scrollDirection } = useScrollDirection();

  const toggleMenu = () => setMenuOpen((s: boolean) => !s);

  const handleResize = () => {
    if (window.innerWidth > 768 && menuOpen) {
      toggleMenu();
    }
  };

  const handleKeydown = e => {
    if (!menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      toggleMenu();
    }
  };

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
    window.addEventListener('resize', throttle(handleResize));
    window.addEventListener('keydown', handleKeydown);
    return () => {
      setMounted(false);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return {
    scrollDirection,
    isMounted,
    menuOpen,
    toggleMenu,
  };
}
