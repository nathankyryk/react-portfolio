import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// To add a project, add an entry here. Images live in public/projects/.
const projects = [
  {
    name: "PitchView",
    tagline: "Soccer game state from broadcast video",
    image: "/projects/pitchview.jpg",
    imageAlt: "PitchView output: players masked in team colours with name tags and a pitch radar",
    description:
      "Turns broadcast soccer video into every player's team, role, jersey number, and position on the pitch, frame by frame. SAM 3.1 tracking plus three models I fine-tuned: an RF-DETR detector, a PARSeq jersey reader, and pitch calibration.",
    stats: [
      { value: "39.7", label: "GS-HOTA on the SoccerNet test set (baseline 23.1)" },
      { value: "1.5 m", label: "median error in pitch position" },
    ],
    tech: ["PyTorch", "SAM 3.1", "RF-DETR", "PARSeq"],
    links: [
      { label: "Live demo", href: "https://huggingface.co/spaces/kyryk/pitchview" },
      { label: "GitHub", href: "https://github.com/nathankyryk/pitchview" },
    ],
  },
  {
    name: "FilingFigures",
    tagline: "A fine-tuned small LLM that reads 10-K filings",
    image: "/projects/filing-figures.png",
    imagePosition: "top",
    imageAlt: "FilingFigures results viewer: accuracy and cost of six models on the test set",
    description:
      "Fine-tuned Qwen3.5-4B to extract six financial figures from SEC 10-K filings, scored against each company's own XBRL data on 36 companies it never saw. Ties Qwen3.5-397B, sits 1.2 points behind Claude Opus 5.5, and runs in 4-bit with vLLM.",
    stats: [
      { value: "98.8%", label: "of figures right (95.4% before fine-tuning)" },
      { value: "$0.07", label: "per 1,000 filings, about 400x cheaper than Opus" },
    ],
    tech: ["PyTorch", "LoRA", "vLLM", "Hugging Face"],
    links: [
      { label: "Results viewer", href: "https://huggingface.co/spaces/kyryk/filing-figures" },
      { label: "GitHub", href: "https://github.com/nathankyryk/filing-figures" },
      { label: "Model", href: "https://huggingface.co/kyryk/filing-figures-qwen3.5-4b-nvfp4" },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Splits "$0.07" into ["$", "0.07", ""] so the number part can count up.
const NUMBER = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/;

const format = (value, n) => {
  const [, pre, num, post] = value.match(NUMBER);
  const decimals = (num.split(".")[1] || "").length;
  return `${pre}${n.toFixed(decimals)}${post}`;
};

// Counts a stat up from zero the first time it scrolls into view.
const CountUp = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const countable = NUMBER.test(value) && !reduce;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!countable || !inView) return;
    const target = parseFloat(value.match(NUMBER)[2]);
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setN,
    });
    return () => controls.stop();
  }, [inView, countable, value]);

  return <span ref={ref}>{countable ? format(value, n) : value}</span>;
};

// Moves the card's soft glow to follow the cursor.
const trackCursor = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2>Recent Projects</h2>
        </motion.div>

        <motion.div
          className="project-grid"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {projects.map((p) => (
            <motion.article
              key={p.name}
              className="project-card"
              variants={fadeInUp}
              onMouseMove={trackCursor}
            >
              <a
                className="project-image"
                href={p.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name}: ${p.links[0].label}`}
              >
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
                />
              </a>

              <div className="project-body">
                <h3>
                  <span>{p.name}</span>
                </h3>
                <p className="project-tagline">{p.tagline}</p>
                <p className="project-description">{p.description}</p>

                <dl className="project-stats">
                  {p.stats.map((s) => (
                    <div key={s.value}>
                      <dt>
                        <CountUp value={s.value} />
                      </dt>
                      <dd>{s.label}</dd>
                    </div>
                  ))}
                </dl>

                <div className="project-footer">
                  <ul className="project-tech">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        <span className="label">{l.label}</span>
                        <span className="arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
