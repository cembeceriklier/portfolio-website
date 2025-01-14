import { useState, useEffect, useRef} from 'react'
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { HOME_CONTENT } from '../constants/index.jsx';
import { PageBreakpointTablet } from "../hooks/useBreakpoints.js";

const Skills = ({ content }) => {
    // console.log(content)
    const [skillDescriptionIndex, setSkillDescriptionIndex] = useState(0);
    const skillsRef = useRef(null);
    const isTablet = PageBreakpointTablet();
    const controls = useAnimation();

    useEffect(() => {
        controls.start(isTablet ? "mobileVisible" : "desktopVisible");
    }, [isTablet, controls]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(`${entry.target.className} is visible`);
                        controls.start({ opacity: 1 });
                    } else {
                        console.log(`${entry.target.className} is not visible`);
                        controls.start({ opacity: 0 });
                    }
                });
            },
            {
                root: null,
                threshold: 0.5,
            }
        );

        if (skillsRef.current) observer.observe(skillsRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    
    return (
        <motion.div
            className="skills-sticky-container"
        >
            <motion.div
                className="skills-bg"
                ref={skillsRef}
            >
                <div className="skills-container">
                    <div className="skills">
                        {content.SKILLS.map((item, index) => {
                            return (
                                <div
                                    className="skill"
                                    key={index}
                                    onClick={() => setSkillDescriptionIndex(index)}
                                    style={{
                                        // marginBottom: `${skillDescriptionIndex === index ? '15px' : ''}`,
                                        transition: `all 0.3s ease`,
                                        backgroundColor: `${skillDescriptionIndex === index ? 'var(--important)' : ''}`,
                                        borderRadius: `${skillDescriptionIndex === index ? '6px' : ''}`,
                                        color: `${skillDescriptionIndex === index ? 'var(--important-text)' : ''}`
                                    }}
                                >
                                    {item.name}
                                    <div
                                        className="skill-bar"
                                    >
                                        <span
                                            className="degree"
                                            style={{
                                                // animationDelay: `${index * 0.1}s`,
                                                width: item.degree,
                                            }}
                                        >
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div
                        className="skill-description"
                    >
                        <h4>{content.SKILLS[skillDescriptionIndex].name}</h4>
                        <p>{content.SKILLS[skillDescriptionIndex].description}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Skills
