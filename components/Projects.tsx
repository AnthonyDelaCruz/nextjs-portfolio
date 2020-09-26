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
      tech: ["NextJS", "ReactJS", "HTML", "CSS", "Sass", "React Icons"],
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
      tech: ["Unsplash", "NextJS", "ReactJS", "HTML", "CSS", "Sass"],
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
      tech: ["HTML", "CSS", "Bootstrap", "Create React App"],
    },
    githubUrl: "https://github.com/AnthonyDelaCruz/zivmi",
    siteUrl: "https://zivmi.vercel.app/",
  },
  {
    label: "Github User Search",
    background: "/images/projects/githubUserSearch.png",
    content: {
      title: "Github User Search",
      description: "React app using Fusion charts to display Github users,",
      tech: [
        "Fusion Charts",
        "Auth0",
        "React Router",
        "Styled Components",
        "React Icons",
        "Create React App",
      ],
    },
    githubUrl: "https://github.com/AnthonyDelaCruz/GithubSearch",
    siteUrl: "https://user-github-search.vercel.app/",
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
                <img className="img-fluid project__snapshot" src={background} />
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
