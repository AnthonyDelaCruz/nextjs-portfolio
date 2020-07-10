import { FaLock } from "react-icons/fa";

import Layout from "@components/Layout";
import Navbar from "@components/Navbar";

const projects = [
  { label: "Portfolio", exists: true },
  { label: "SplashPhotography", exists: true },
  { label: "Coming Soon!", exists: false },
  { label: "Coming Soon!", exists: false },
  { label: "Coming Soon!", exists: false },
];

export default function Projects() {
  return (
    <Layout>
      <Navbar customClassName="projects__nav" />
      <section className="page-projects">
        <h1>Current existing projects.</h1>
        <div className="projects">
          {projects.map(({ label, exists }) => (
            <div className="project__item">
              <div className="item__details">
                {!exists && <FaLock size={50} />}
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="projects__notif">More projects coming soon!</div>
      </section>
    </Layout>
  );
}
