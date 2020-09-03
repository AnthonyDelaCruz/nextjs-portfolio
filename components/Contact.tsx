import React from "react";
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa";
import { motion } from "framer-motion";

const variants = {
  hover: { scale: 1.2 },
};
export default function Contact() {
  return (
    <div className="contact-container">
      <motion.div whileHover="hover" variants={variants}>
        <FaGithub size={35} />
      </motion.div>
      <motion.div whileHover="hover" variants={variants}>
        <FaLinkedin size={35} />
      </motion.div>
      {/* <motion.div whileHover="hover" variants={variants}>
        <FaAt size={35} />
      </motion.div> */}
    </div>
  );
}
