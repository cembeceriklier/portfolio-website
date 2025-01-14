import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className='page aboutPage'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut"}}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse natus iure ipsa ipsam, saepe vitae autem laborum corporis consequatur tempora rerum dolor voluptas harum quod perspiciatis nobis omnis eveniet sunt.   
    </motion.div>
  )
}

export default About
