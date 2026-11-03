import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        className="container hero-content"
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
      >
        {/* One span per letter for the hover ripple; screen readers get the aria-label. */}
        <motion.h1 variants={fadeInUp} className="hero-name" aria-label="Nathan Kyryk">
          {"Nathan Kyryk".split("").map((ch, i) =>
            ch === " " ? (
              <span key={i} className="space" aria-hidden="true" />
            ) : (
              <span key={i} className="char" aria-hidden="true">
                {ch}
              </span>
            )
          )}
        </motion.h1>

        <motion.p className="hero-subtitle" variants={fadeInUp}>
          Machine Learning Scientist
        </motion.p>

        <motion.p className="hero-meta" variants={fadeInUp}>
          <span>B.S. in Data Science, Indiana University (2026)</span>
          <span className="sep" aria-hidden="true">·</span>
          <span>Minors in Computer Science &amp; Statistics</span>
        </motion.p>

        <motion.p className="hero-tagline" variants={fadeInUp}>
          My recent projects fine-tune computer vision and language models, score them against
          strong baselines, and measure what they cost to run.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeInUp}>
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact me
          </a>
          <span className="hero-social">
            <a
              href="https://github.com/nathankyryk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-kyryk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
