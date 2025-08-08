'use client';
import { useEffect, useState } from 'react';


export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // listener  
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches)

    const handler = (event : MediaQueryListEvent) => {setIsMobile(event.matches)}
   
    
    mediaQuery.addEventListener('change',handler)

    return () => mediaQuery.removeEventListener('change', handler)

  }, [] )
  return isMobile
}