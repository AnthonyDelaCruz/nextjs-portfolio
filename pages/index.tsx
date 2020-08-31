import Head from "next/head";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

import Navbar from "@components/Navbar";
import Contact from "@components/Contact";
import About from "@components/About";
import Projects from "@components/Projects";

const template_params = {
  reply_to: "reply_to_value",
  from_name: "Sample from",
  to_name: "Tony mah boi.",
  message_html: "Sample message from emailjs",
};

// const service_id = "default_service";
// const template_id = "template_1vcwVvAF";
// const user_id = "user_9tKg1D3DrUI6BoD3bquBc";

export default function Home() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://quotes.rest/qod")
      .then((res) => res.json())
      .then((res) => {
        setQuote(res.contents.quotes[0].quote);
      });
    // emailjs.send(service_id, template_id, template_params, user_id).then(
    //   (response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //   },
    //   (err) => {
    //     console.log("FAILED...", err);
    //   }
    // );
  }, []);
  return (
    <div className="page-home">
      <div className="home__content">
        <section>
          <div className="home__main container">
            <div className="main--wrapper">
              <div className="main__content">
                <motion.span
                  initial={{ opacity: 0, y: -80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="content__name"
                >
                  👋 Hi I'm Tony!
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="content__short-intro container"
                >
                  I like making <span>fun</span>, interactive things with code.
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Projects />
        <footer className="py-md-4 mb-4">
          <div className="container">
            <div className="d-flex">
              <div style={{ flex: 1 }} className="quote-container pr-md-4">
                <div className="quote-header">QUOTE OF THE DAY.</div>
                <div className="text-white quote">{quote}</div>
              </div>
              <div style={{ flex: 1 }}>
                <h2 className="font-weight-bold mb-3">Get in touch</h2>
                <Form className="h-100">
                  <Form.Group>
                    <Form.Control placeholder="your-email@gmail.com" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      placeholder="Let's have a chat!"
                    />
                  </Form.Group>
                  <Button
                    style={{
                      backgroundColor: "#14a76c",
                      borderRadius: 0,
                      borderColor: "#14a76c",
                    }}
                    className="form__btn--send form__btn px-5 py-2 mr-md-3"
                  >
                    Send
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "#ffffff",
                      borderRadius: 0,
                    }}
                    className="form__btn px-5 py-2"
                  >
                    Clear
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Contact />
    </div>
  );
}
