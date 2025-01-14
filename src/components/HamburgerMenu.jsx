import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = ({ navbarContent, isOpen, setIsOpen }) => {

    return (
        <div className={`hamburger-menu-container ${isOpen ? 'open' : ''}`}>
            <div className={`icon-container ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <svg className='icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <g id="SVGRepo_bgCarrier" ></g>
                    <g id="SVGRepo_tracerCarrier" ></g>
                    <g id="SVGRepo_iconCarrier">
                        <path className='icon-line top' d="M5 8H13.75" stroke="#464455" ></path>
                        <path className='icon-line middle' d="M5 12H19" stroke="#464455" ></path>
                        <path className='icon-line bottom' d="M10.25 16L19 16" stroke="#464455" ></path>
                    </g>
                </svg>
            </div>
            <div className="hamburger-menu">
                <div className="link-container">
                    {navbarContent.map(index => {
                        return (
                            <NavLink className="hamburger-menu-item" onClick={() => setIsOpen(!isOpen)} key={index.name} to={index.path}>{index.name}</NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu
