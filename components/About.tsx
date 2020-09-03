import React from "react";
import { Button } from "react-bootstrap";
import { FaReact, FaJs, FaHtml5, FaCss3, FaSass, FaGit } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <Fade bottom>
      <section className="about container">
        <h1>
          About <span>me</span>.
        </h1>
        <div className="about__content">
          I am a Frontend web developer based in the <span>Philippines</span>. I
          shifted careers and pursued web development back in 2017, since then I
          have been building applications with startup companies using
          Javascript and ReactJS.
        </div>
        <div className="about__experience">
          <h2>Experience.</h2>
          <div className="experience__item item--active d-flex justify-content-between align-items-center">
            <h4>Freelancer</h4>
            <div>Frontend developer</div>
            <div>May 2020 - Present</div>
          </div>
          <div className="experience__item d-flex justify-content-between align-items-center">
            <h4>PushfitTV</h4>
            <div>Frontend developer</div>
            <div>Nov 2019 - March 2020</div>
          </div>
          <div className="experience__item d-flex justify-content-between align-items-center">
            <h4>Dynameyes</h4>
            <div>Frontend developer</div>
            <div>Jan 2019 - Oct 2020</div>
          </div>
          <div className="experience__item d-flex justify-content-between align-items-center">
            <h4>MedCheck</h4>
            <div>Intern / Frontend developer</div>
            <div>Jan 2018 - Nov 2018</div>
          </div>
        </div>
        <div className="about__skills">
          <h2>Technologies.</h2>
          <div className="skills__icons">
            <FaReact size={40} />
            <FaJs size={40} />
            <FaHtml5 size={40} />
            <FaCss3 size={40} />
            <FaSass size={40} />
            <FaGit size={40} />
          </div>
        </div>
        {/* <Button className="about__resume-btn mt-5" variant="primary">
          View my CV for more details
        </Button> */}
      </section>
    </Fade>
  );
}
