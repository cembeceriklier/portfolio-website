import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}

export const HeaderBreakpointMobile = () => useMediaQuery('(max-width: 767px)');
export const HeaderBreakpointTablet = () => useMediaQuery('(min-width: 768px)');
export const PageBreakpointTablet = () => useMediaQuery('(min-width: 600px)');