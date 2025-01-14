import { useRef } from 'react';

const About = ({content}) => {
    const aboutRef = useRef(null);
    const aboutContent = content.HERO_CONTENT
    // console.log(aboutContent)

    return (
        <div
            className="about"
            ref={aboutRef}
        >
            <span className="hero-name">{aboutContent.name}</span>
            <span className="small-text">{aboutContent.job}</span>
            <p className="paragraph">
                {aboutContent.title}
            </p>
            <div className='about-icons row'>
                {aboutContent.skillsIcons.map((item, index) => {
                    // console.log(item.svg);
                    return (
                        <div className='icon' key={item.name}>{item.svg}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default About
