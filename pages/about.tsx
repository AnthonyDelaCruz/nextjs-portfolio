import Layout from "@components/Layout";
import Navbar from "@components/Navbar";

export default function About() {
  return (
    <Layout>
      <section className="page-about">
        <Navbar customClassName="about__nav" />
        <div className="about__content-container">
          <div className="about__content content--1">
            <h1>A little bit about myself.</h1>
            <div className="content__text">
              I'm a career shifter that started my web development career 2
              years ago. Since then, I have worked with some startup companies
              and now currently doing freelance work.
            </div>
          </div>
          <div className="about__content content--2">
            <h1></h1>
            <div className="content__text">
              I mainly use <span>Javascript</span>, <span>ReactJS</span>,{" "}
              <span>HTML</span>, <span>CSS</span> for all the work I have done.
              For more details of my over all experience, you can find them
              here. <a href="#">My CV</a>
            </div>
          </div>
          <div className="about__content content--3">
            <div className="content__text">
              If I'm not working on a project, I use my free time to continue
              and polish what I know to keep up to date with the latest trends,
              and if I'm not doing that, you can find me reading a lot of Light
              novels and mangas. :))
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
