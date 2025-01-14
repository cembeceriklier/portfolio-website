// Import react and components

import { Hero, Contact, Projects } from '../components/index.js';
import { HOME_CONTENT } from '../constants/index.jsx';

// Import motion and observer for animation

const Home = () => {

  return (
    <>
      <div className='page homePage'>
        <Hero content={HOME_CONTENT} />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default Home
