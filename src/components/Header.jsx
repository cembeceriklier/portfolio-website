// Import layout
import { CookieConsent, ToggleTheme, HamburgerMenu, Navbar } from '../components/index.js';
import { HEADER_CONTENT } from '../constants/index.jsx';

// Import motion and intersection observer
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import breakpoint hook
import { HeaderBreakpointMobile, HeaderBreakpointTablet } from '../hooks/useBreakpoints.js';
import { useEffect } from 'react';

const Header = ({ isOpen, setIsOpen }) => {

  const navbarItems = HEADER_CONTENT.NAV_LINKS;
  const isMobile = HeaderBreakpointMobile();
  const isTablet = HeaderBreakpointTablet();
  // close the hamburger menu when the screen size changes to tablet or ...
  useEffect(() => {

    if (isMobile || isTablet) {
      setIsOpen(false);
    }
  }, [isMobile, isTablet]);

  return (
    <motion.header
      className={`header ${isTablet ? 'tablet' : ''} ${isMobile ? 'mobile' : ''}`}
    >
      <div className='logo_container'>
        <span className='logo_name'>Cem Beceriklier</span>
      </div>

      {isTablet &&
        <Navbar navbarContent={navbarItems} />
      }

      <div className={`mobile-container ${isMobile ? 'mobile' : ''}`} >
        <ToggleTheme />
        {isMobile &&
          <HamburgerMenu navbarContent={navbarItems} isOpen={isOpen} setIsOpen={setIsOpen} />
        }
        <CookieConsent />
      </div>
    </motion.header>
  )
}

export default Header