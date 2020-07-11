import Head from "next/head";
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <div className="page-home">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="home__sidebar">
        <h1>TonyDC</h1>
      </section>
      <section className="home__main">
        <Navbar />
        <div className="main--wrapper d-flex">
          <div className="main__content">
            <span className="content__name">👋 Hi I'm Tony!</span>
            <div className="content__short-intro container">
              I like making <span>fun</span>, interactive things with code.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
