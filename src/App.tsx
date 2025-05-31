import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 2rem;
`;

const Logo = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  color: var(--neon-primary);
  text-shadow: 0 0 10px var(--neon-primary);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeaderProfilePic = styled(motion.img)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--neon-primary);
  box-shadow: 0 0 10px rgba(0, 255, 157, 0.3);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  color: var(--text-primary);
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--neon-primary);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--neon-primary), var(--neon-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  color: var(--text-primary);
  font-size: 1.5rem;
  
  &:hover {
    color: var(--neon-primary);
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const ProfileImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 3px solid var(--neon-primary);
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid var(--neon-primary);
  border-radius: 4px;
  color: var(--neon-primary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--neon-primary);
    color: var(--background-dark);
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AnimatedBackground />
      <AppContainer>
        <Header>
          <Logo
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeaderProfilePic
              src="/Achyuth Formal pic.png"
              alt="Achyuth"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            Achyuth's Portfolio
          </Logo>
          <Nav>
            <NavLink
              href="#about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </NavLink>
            <NavLink
              href="#projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </NavLink>
            <NavLink
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </NavLink>
          </Nav>
        </Header>

        <Main>
          <Hero>
            <ProfileImage
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/Achyuth Formal pic.png" alt="Achyuth Papisetty" />
            </ProfileImage>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Achyuth Papisetty
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full Stack Developer | MCA Graduate | Problem Solver
            </Subtitle>
            <ResumeButton
              href="/CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </ResumeButton>
            <SocialLinks>
              <SocialIcon
                href="https://github.com/Achyuth-Papisetty"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconWrapper>
                  <FaGithub />
                </IconWrapper>
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/papisetty-achyuth/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconWrapper>
                  <FaLinkedin />
                </IconWrapper>
              </SocialIcon>
              <SocialIcon
                href="https://x.com/ACHYUTH_11?t=eJpr21gMwU1MQ3wFYP3VGQ&s=08"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconWrapper>
                  <FaTwitter />
                </IconWrapper>
              </SocialIcon>
            </SocialLinks>
          </Hero>

          <About />
          <Projects />
          <Contact />
        </Main>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
