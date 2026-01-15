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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
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
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/nba-analysis.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
            </motion.div>
          <h3> NBA 3-Pointer Analysis</h3>
          <p>
            Collected data from NBA API and analyzed 3-point shooting trends.
            Useful datasets were created for NBA teams and NBA players from 1996-2024. 
            <a href="https://nba-app-nk.streamlit.app/" target="_blank" rel="noopener noreferrer" style={{color:"#7C0A02"}}> <br />Live Demo </a>
            |
            <a href="https://nathankyryk.github.io/nba" target="_blank" rel="noopener noreferrer" style={{color:"#7C0A02"}}> Analysis </a>
            |
            <a href="https://github.com/nathankyryk/nba" target="_blank" rel="noopener noreferrer" style={{color:"#7C0A02"}}> GitHub</a>
          </p>
          <div className="project-tech">
            <span>Python</span>
            <span>Excel</span>
            <span>Streamlit</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/gf_dashboard.jpeg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Google Finance Data Analysis</h3>
          <p>
            Stock price analysis over many companies across various industries
            collected using the Google Finance API. Visualized trends and patterns.
            <a href="https://nathankyryk.github.io/google-finance" target="_blank" rel="noopener noreferrer" style={{color:"#7C0A02"}}> <br />Analysis </a>
            |
            <a href="https://github.com/nathankyryk/google_finance" target="_blank" rel="noopener noreferrer" style={{color:"#7C0A02"}}> GitHub</a>
          </p>
          <div className="project-tech">
            <span>Google Sheets</span>
            <span>Python</span>
            <span>Power BI</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/weather-app.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Weather App</h3>
          <p>
            Application using the OpenWeatherMap API to display current weather
            information and forecasts for any location worldwide. Built with a light
            and dark theme. 
            <a href="https://nathankyryk.github.io/weather" target="_blank" rel="noopener noreferrer" style={{color:"#7C0A02"}}> <br />Live Demo </a>
            | 
            <a href="https://github.com/nathankyryk/weather-app" target="_blank" rel="noopener noreferrer" style={{color:"#7C0A02"}}> GitHub</a>
          </p>
          <div className="project-tech">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};