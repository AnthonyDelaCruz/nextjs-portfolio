import { FaLock, FaGithubSquare, FaLink } from "react-icons/fa";
import { useState } from "react";

import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Modal from "@components/Modal";
import ProjectContent from "@components/ProjectContent";
import Zoom from "react-reveal/Zoom";

const projects = [
  {
    label: "Portfolio",
    background: "/images/projects/portfolio.png",
    content: {
      title: "Personal portfolio",
      description:
        "Personal portfolio made to showcase some React, HTML, CSS skills so far. But also to show some of the projects I work on my free time.",
      tech: ["NextJS", "ReactJS", "HTML", "CSS", "Sass"],
    },
    githubUrl: "https://github.com/AnthonyDelaCruz/prtflo",
    siteUrl: "",
  },
  {
    label: "SplashPhotography",
    background: "/images/projects/unsplash.png",
    content: {
      title: "SplashPhotography",
      description:
        "A simple client application that consumes the Unsplash API to display all kinds of data regarding images. But here, I built the UI to display images, their users info, collections, related collections and tags.",
      tech: ["Unsplash API", "NextJS", "ReactJS", "HTML", "CSS", "Sass"],
    },
    githubUrl: "https://github.com/AnthonyDelaCruz/unsplash_client",
    siteUrl: "https://unsplash-client.now.sh/",
  },
  {
    label: "Zivmi",
    background: "/images/projects/zivmi.png",
    content: {
      title: "Zivmi",
      description:
        "A fictional landing page ( desktop only ) for a mobile application.",
      tech: ["ReactJS", "HTML", "CSS", "Sass", "Create React App"],
    },
    githubUrl: "https://github.com/AnthonyDelaCruz/zivmi",
    siteUrl: "https://zivmi.vercel.app/",
  },
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
    <section className="page-projects-container container">
      <div className="projects__header mb-5">
        Current <span>projects</span>.
      </div>
      <Zoom cascade>
        <div className="projects">
          {projects.map(
            ({ label, background, content, githubUrl, siteUrl }, i) => (
              <div className="project__item mb-4">
                <div>
                  <img
                    style={{
                      objectFit: "cover",
                      border: "1px solid #8B4789",
                      boxShadow: "-5px 5px 0px 0px #8B4789",
                    }}
                    height={220}
                    width={350}
                    src={background}
                  />
                </div>
                <div className="project__info">
                  <div>
                    <h2 className="mb-md-1">{label}</h2>
                    <div>{content.tech.join(", ")}</div>
                  </div>
                  <p>{content.description}</p>
                  <div className="project__links">
                    <span onClick={() => window.open(githubUrl)}>
                      <FaGithubSquare size={25} />
                      Github repo
                    </span>
                    {label !== "Portfolio" && (
                      <span onClick={() => window.open(siteUrl)}>
                        <FaLink size={25} />
                        Live site
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Zoom>
      <div className="projects__notif">More projects coming soon!</div>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        customStyle={{
          content: { background: "#00203fff", border: "none", height: "85%" },
        }}
      >
        <ProjectContent {...currentContent} />
      </Modal>
    </section>
  );
}
