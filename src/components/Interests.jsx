import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const Interests = () => {
  return (
    <motion.section
      id="interests"
      className="interests"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Interests
      </motion.h2>

      <motion.div
        className="interests-card"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <p>
          Interested in sports analytics, performance optimization, and
          data-driven decision systems.
        </p>
        <p>
          Background in athletics and long-term commitment to fitness drive
          interest in performance data.
        </p>
      </motion.div>
    </motion.section>
  );
};
