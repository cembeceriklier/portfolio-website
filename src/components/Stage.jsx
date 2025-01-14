import { useRef } from 'react';
import { motion } from 'framer-motion';

const Stage = ({content}) => {
    const stageContent = [content.HERO_CONTENT.stage_1, content.HERO_CONTENT.stage_2]
    console.log(stageContent)
    console.log(content)
    const stageRefs = useRef([]);
    return (
        <div className="personal-info">
            {stageContent.map((item, index) => {
                return (
                    <div className={`stage-${index + 1}-wrapper`} key={index}>
                        <div 
                            className={`stage-${index + 1}`}
                            ref={(stageRef) => stageRefs.current[index] = stageRef}
                        >
                            {item}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Stage
