import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, selectTheme } from '../features/theme/themeSlice.js';
import { IconLight, IconNight } from '../constants/index.jsx';

const ToggleTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('theme', theme);
        document.documentElement.setAttribute('animation', 'themeAnimation');
    }, [theme])

    const handleClick = () => {
        if (clicked) return;
        setClicked(true);

        dispatch(toggleTheme());

        setTimeout(() => {
            setClicked(false);
        },500);
    }
    
    return (
        <div 
            className={`toggle-container ${theme} ${clicked ? `${theme}-animate` : ''}`} 
            onClick={() => handleClick()}
        >
            <span className='toggle-text'>Make it</span>
            <span className='theme-text'>{theme === 'dark' ? 'light' : 'dark'}</span>
            <div className="toggle-icon">
                <IconLight />
                <IconNight />
            </div>
        </div>
    )
}

export default ToggleTheme