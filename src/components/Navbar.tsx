import  { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import { FaBlog } from "react-icons/fa";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import "../style.css";
import profileImg from "../assets/profile.jpg";


export default function MyNav() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <AiOutlineHome style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/about",
      label: "about",
      icon: <AiOutlineUser style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/Projects",
      label: "Projects",
      icon: <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/resume",
      label: "Resume",
      icon: <CgFileDocument style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/certificate",
      label: "Certifications",
      icon: <ImBlog style={{ marginBottom: "2px" }} />,
    },
    {
      path: "/contact",
      label: "Contact me",
      icon: <FaBlog style={{ marginBottom: "2px" }} />,
    },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <img src={profileImg} className="img-fluid logo" alt="brand" />
            <h5
              id="navhead"
              style={{ marginLeft: "21px", paddingTop: "6px", color: "#fbd9ad" }}
            >
              VISWANAND M
            </h5>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-100"
          >
            <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
              <Nav className="ml-auto" defaultActiveKey="#home">
                {navItems.map(({ path, label, icon }, idx) => (
                  <Nav.Item key={idx}>
                    <Nav.Link
                      as={Link}
                      to={path}
                      onClick={() => updateExpanded(false)}
                    >
                      {icon} {label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
                <Nav.Item className="fork-btn">
                  <Button
                    href="https://github.com/viswanandMuruganantham"
                    target="_blank"
                    className="fork-btn-inner"
                  >
                    <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                    <AiFillStar style={{ fontSize: "1.1em" }} />
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Navbar>
  );
}
