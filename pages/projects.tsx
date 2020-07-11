import { FaLock } from "react-icons/fa";
import { useState } from "react";

import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Modal from "@components/Modal";
import ProjectContent from "@components/ProjectContent";

const projects = [
  {
    label: "Portfolio",
    exists: true,
    background: "/images/projects/portfolio.png",
    content: {
      title: "Personal portfolio",
      description:
        "Personal portfolio made to showcase some React, HTML, CSS skills so far. But also to show some of the projects I work on my free time.",
      tech: ["NextJS", "ReactJS", "HTML", "CSS", "Sass"],
    },
  },
  {
    label: "SplashPhotography",
    exists: true,
    background: "/images/projects/unsplash.png",
    content: {
      title: "SplashPhotography",
      description:
        "A simple client application that consumes the Unsplash API to display all kinds of data regarding images. But here, I built the UI to display images, their users info, collections, related collections and tags.",
      tech: ["Unsplash API", "NextJS", "ReactJS", "HTML", "CSS", "Sass"],
    },
  },
  { label: "Coming Soon!", exists: false },
  { label: "Coming Soon!", exists: false },
  { label: "Coming Soon!", exists: false },
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState({});
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const toggleModalAndSetContent = (content, exists) => () => {
    if (!exists) return;
    setCurrentContent(content);
    toggleModal();
  };

  return (
    <Layout>
      <Navbar customClassName="projects__nav" />
      <section className="page-projects">
        <div className="projects__header">Current existing projects.</div>
        <div className="projects">
          {projects.map(({ label, exists, background, content }, i) => (
            <div
              key={`${label}_${i}`}
              className="project__item"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={toggleModalAndSetContent({ ...content }, exists)}
            >
              <div
                className={`item__details ${exists && "item__details--exists"}`}
              >
                {!exists && <FaLock size={50} />}
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="projects__notif">More projects coming soon!</div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        customStyle={{
          content: { background: "#00203fff", border: "none", height: "85%" },
        }}
      >
        <ProjectContent {...currentContent} />
      </Modal>
    </Layout>
  );
}
