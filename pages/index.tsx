import Head from "next/head";
import Navbar from "@components/Navbar";
import Contact from "@components/Contact";
import About from "@components/About";
import Projects from "@components/Projects";

export default function Home() {
  return (
    <div className="page-home">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <div className="home__content">
        <section>
          <div className="home__main container">
            <div className="main--wrapper">
              <div className="main__content">
                <span className="content__name">👋 Hi I'm Tony!</span>
                <div className="content__short-intro container">
                  I like making <span>fun</span>, interactive things with code.
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}
