import React from "react";
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="contact-container">
      <motion.div
        onClick={() => window.open("https://github.com/AnthonyDelaCruz")}
        whileHover="hover"
      >
        <FaGithub color="#fff" size={40} />
      </motion.div>
      <motion.div
        onClick={() =>
          window.open("https://www.linkedin.com/in/anthony-delacruz-956a97167/")
        }
        whileHover="hover"
      >
        <FaLinkedin color="#007dbb" size={44} />
      </motion.div>
    </div>
  );
}
