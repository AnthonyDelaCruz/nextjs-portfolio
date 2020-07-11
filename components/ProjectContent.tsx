import React from "react";

export default function ProjectContent({ title, description, tech }: any) {
  return (
    <div className="container-project-content">
      <h1>{title}</h1>
      <div className="project-content__tech">
        {tech.map((item) => (
          <span>* {item}</span>
        ))}
      </div>
      <div className="project-content__description">
        {description}
        <div className="description__links">
          <span className="link__item">
            GITHUB REPO :{" "}
            <a href="#" className="item__link">
              https://sample.com
            </a>
          </span>
          <span className="link__item">
            SITE URL :{" "}
            <a href="#" className="item__link">
              https://sample.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
