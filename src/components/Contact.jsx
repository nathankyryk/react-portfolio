import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const emptyForm = { name: "", email: "", message: "" };

export const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false, message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });
      setFormData(emptyForm);
    } catch {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="section">
      <motion.div
        className="container split"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.h2 variants={fadeInUp}>Contact</motion.h2>

        <motion.form className="contact-form" onSubmit={handleSubmit} variants={fadeInUp}>
          <div className="form-row">
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
            />
          </label>

          <div className="form-actions">
            <button className="btn btn-primary" type="submit" disabled={formStatus.submitting}>
              {formStatus.submitting ? "Sending..." : "Send message"}
            </button>
            {formStatus.message && (
              <p
                className={`form-status ${formStatus.success ? "success" : "error"}`}
                role="status"
              >
                {formStatus.message}
              </p>
            )}
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};
