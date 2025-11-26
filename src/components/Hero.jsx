import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Nathan Kyryk
          </motion.h1>
          
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Data Scientist
          </motion.h2>
          
          <motion.p className="hero-description" variants={fadeInUp}>
            I work with data to uncover insights, build predictive models, and
            drive informed decision-making. I'm proficient in Python, R, SQL, and data
            visualization tools.
          </motion.p>
          
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/nathankyryk" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a href="https://linkedin.com/in" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};