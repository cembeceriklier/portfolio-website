import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./styles/styles.scss";
import { Home, About, Blog, Contact, NotFound } from "./pages/index.js";
import { Header, Footer } from "./components/index.js";
import { motion } from "framer-motion";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <Router>
            <motion.div
                className='app'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0, ease: "easeOut" }}
            >
                <Header isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className={`page-container ${isOpen ? 'open' : ''}`}>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </motion.div>
        </Router>
    )
}

export default App;
