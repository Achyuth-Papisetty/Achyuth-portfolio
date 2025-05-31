import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const FooterSection = styled.footer`
  padding: 3rem 0;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid var(--neon-primary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--neon-primary);
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const MadeWith = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: #ff4d4d;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.3);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.3);
    }
    70% {
      transform: scale(1);
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <SocialLinks>
          <SocialLink
            href="https://github.com/Achyuth-Papisetty"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/papisetty-achyuth/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://x.com/ACHYUTH_11?t=eJpr21gMwU1MQ3wFYP3VGQ&s=08"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © {currentYear} Achyuth Papisetty. All rights reserved.
        </Copyright>
        <MadeWith>
          Made with <FaHeart /> using React
        </MadeWith>
      </Container>
    </FooterSection>
  );
};

export default Footer; 