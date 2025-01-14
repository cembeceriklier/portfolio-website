import { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import { HEADER_CONTENT } from '../constants/index.js';

const Navbar = (content) => {
    const navRefs = useRef([]);
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(null);
    const [itemCoords, setItemCoords] = useState(0);

    useEffect(() => {
        navRefs.current.forEach((item) => {

            if(item.ariaCurrent === 'page') {
                setActiveItem(item);
            }
        })
    }, [location])

    const navLinkHandler = () => {

        document.getElementById('nav-underline').classList.add('active');
        setTimeout(() => {
            document.getElementById('nav-underline').classList.remove('active');
        }, 200);
    }

    useEffect(() => {
        if (activeItem) {
            const calculateCoords = () => {
                const coords = activeItem.getBoundingClientRect();
                setItemCoords(coords);
            };
            calculateCoords(); 
            window.addEventListener('resize', calculateCoords);

            return () => {
                window.removeEventListener('resize', calculateCoords);
            };
        }
    }, [activeItem]);

    return (
        <nav className='navbar'>
            <div
                className='link-container'
            >
                {content.navbarContent.map((page, index) =>
                <NavLink
                    key={index}
                    to={page.path}
                    end={page.name === 'Home'}
                    className="link"
                    onClick={navLinkHandler}
                    ref={(e) => navRefs.current[index] = e}
                >
                    {page.name}
                </NavLink>
                )}
            </div>
            <span id="nav-underline" className='nav-underline' style={{left: `${(itemCoords.x - 45) + (itemCoords.width / 2)}px`}}></span>
        </nav>
    )
}

export default Navbar
