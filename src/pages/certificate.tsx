
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
//import Particle from "../../Particle";

export default function CertificatePage() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="home-section">
      <Container fluid id="home">
        
        <Container className="home-content">
          <div className="d-flex justify-content-center" style={{ backgroundColor: "#fbd9ad" }}>
            <motion.h1
              style={{ color: "rgb(134, 61, 176)" }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Certificates
            </motion.h1>
          </div>

          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>
                <Col md={12} className="mt-5">
                  <Row className="g-5">
                    {[
                      { title: "Data Structures and Algorithms in Java", issuer: "NPTEL", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "Blockchain Development", issuer: "Microsoft Certified", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "AWS Cloud Foundations", issuer: "AWS Academy Graduate", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "Build an App on Android Studio", issuer: "Coursera", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "ReactJS and Figma Training", issuer: "Infosys Springboard", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "Full-Stack Development 101", issuer: "Simplilearn", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "AR Development and Applications", issuer: "TCS iON", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "Data Science", issuer: "Acmegrade (IIT Bombay), LinkedIn Learning", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "NLP and Text Mining", issuer: "Simplilearn", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "AI Fundamentals (ASCEND)", issuer: "Accenture, FutureSkills Prime", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "Google Play Store Listing", issuer: "Google Play Academy", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "Cyber Security Foundations", issuer: "Coursera", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                      { title: "Cyber Security Analysis and Design", issuer: "NASSCOM", link: "https://drive.google.com/drive/folders/1d6IFcptoH0kfHw2E4FNilDvluowE8PaS?usp=sharing" },
                    ].map((cert, index) => (
                      <Col md={4} key={index}>
                        <motion.div
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          variants={fadeInVariants}
                        >
                          <div className="cert-card">
                            <div className="content">
                              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                <div className="content-overlay"></div>
                                <div className="cert-header" style={{ backgroundColor: "white" }}>
                                  <img className="logo_img" src="" alt="" />
                                </div>
                                <div className="content-details fadeIn-top">
                                  <h3 className="content-title" style={{ color: "black" }}>
                                    Certificate
                                  </h3>
                                </div>
                              </a>
                            </div>
                            <div className="cert-body">
                              <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                                {cert.title}
                              </h2>
                              <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                                - {cert.issuer}
                              </h3>
                            </div>
                          </div>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
