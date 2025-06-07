import  { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";
import { AiFillGithub, AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaCode, FaLinkedinIn } from "react-icons/fa";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://formspree.io/f/mldngzja", // ✅ Your actual Formspree endpoint
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert(`Thanks ${formData.name}, your message has been sent!`);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <motion.h1
                className="aboutme-heading"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Contact me
              </motion.h1>
            </Col>

            <Col md={12} id="contact" className="mt-3">
              <Row>
                {/* Contact Form */}
                <Col md={4}>
                  <motion.div
                    className="contacts-form"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          id="email"
                          name="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows={3}
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </Col>

                {/* Contact Info + Map */}
                <Col md={7}>
                  <motion.div
                    className="contacts-details"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="mailto:viswanandmuruganantham23@gmail.com"
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        viswanandmuruganantham23@gmail.com
                      </p>
                    </a>

                    <a href="tel:+91 7868957285" className="personal-details">
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+91 7868957285</p>
                    </a>

                    <a
                      href="https://maps.app.goo.gl/n929U1pE4FGEKbY67"
                      className="personal-details"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          2.9/1, Main Road, Puduppathur, Tiruvarur.
                        </p>
                      </div>
                    </a>
                  </motion.div>

                  <motion.div
                    className="contact-map"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.656617806948!2d79.6721833!3d10.7218191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55416082db6c3d%3A0xd97b1030913c0877!2sPuduppathur%2C%20Tamil%20Nadu%20610106!5e0!3m2!1sen!2sin!4v1747337210761!5m2!1sen!2sin"
                      frameBorder="0"
                      allowFullScreen
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex={0}
                      loading="lazy"
                      className="w-100 mt-3"
                      height="300"
                    ></iframe>
                  </motion.div>
                </Col>

                <div className="flex justify-center lg:justify-start gap-4 mb-2 text-2xl text-white z-20 relative">
                  <a
                    href="https://github.com/viswanandMuruganantham"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/viswanand-muruganantham-28147a253/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://leetcode.com/u/VISWANAND_M/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    <FaCode />
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
