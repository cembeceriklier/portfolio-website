// import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profile_image from "../../public/portfolio_img.png";

const Profile = () => {
    // const profileRef = useRef(null);
    const { scrollYProgress } = useScroll(); 

    const heightTransform = useTransform(scrollYProgress, [0, 0.2, 0.7], ["calc(100vh)", "calc(100vh)", "calc(80vh)"]);

    return (
        <div className="profile">
            <motion.div
                className="profile-container"
                style={{ height: heightTransform }}
            >
                <span className="text_dev">DEV</span>
                <img
                    className="profile_img"
                    src={profile_image}
                    alt="Profile"
                />
            </motion.div>
        </div>
    );
};

export default Profile;
