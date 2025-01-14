import {
    Skills,
    Profile,
    SocialLinks,
    Stage,
    About,
} from "./index.js";

const Hero = ({ content }) => {

    return (
        <div className="hero">
            <SocialLinks content={content} />
            <div className="profile-wrapper">
                <div className="personal-wrapper">
                    <Stage content={content} />
                    <About content={content} />
                </div>
                <div
                    className="skills-wrapper"
                >
                    <Skills content={content} />
                </div>
            </div>
            <div
                className="photo-wrapper"
            >
                <Profile content={content} />
            </div>
        </div>
    );
};

export default Hero;
