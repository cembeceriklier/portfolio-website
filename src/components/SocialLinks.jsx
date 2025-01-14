import { useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';

const SocialLinks = ({ content }) => {
    const socialRef = useRef(null);
    
    return (
        <div
            className="social"
            ref={socialRef}
        >
            <div
                className="links">
                {content.SOCIAL_LINKS.map((item, index) => (
                    <a
                        className="social-link"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                    >
                        {item.svg}
                    </a>
                ))}
            </div>
            <span className="divider" />
        </div>
    )
}

export default SocialLinks
