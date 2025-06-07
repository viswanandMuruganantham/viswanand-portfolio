
import { Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import resumeFile from "../assets/VISWANAND_M_RESUME.pdf";

function Resume() {
  return (
    <section
      style={{
        background: "linear-gradient(to right, #111827, #000000)", // from-gray-900 to-black
        minHeight: "100vh",
        paddingTop: "100px", // adjust this to match your navbar height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "2rem",
        color: "#ecf0f1",
      }}
    >
      <Container
        fluid
        className="home-content"
        style={{
          maxWidth: "600px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontWeight: "700", fontSize: "3rem", margin: 0 }}
        >
          RESUME
        </motion.h1>

        {/* Animated Download Icon */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 15, 0, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AiOutlineDownload size={64} color="#ecf0f1" />
        </motion.div>

        {/* Animated Download Button */}
        <motion.a
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.3rem",
            padding: "0.75rem 3rem",
            borderRadius: "12px",
            fontWeight: 600,
            backgroundColor: "#8641b0",
            color: "#ecf0f1",
            textDecoration: "none",
            boxShadow: "0 6px 12px rgba(134, 61, 176, 0.7)",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <AiOutlineDownload style={{ marginBottom: "3px" }} />
          &nbsp;Download My Resume
        </motion.a>
      </Container>
    </section>
  );
}

export default Resume;
