import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 4rem 0;
  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--neon-primary);
  text-shadow: 0 0 10px var(--neon-primary);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--neon-primary);
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.1);

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: #1a1a1a;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
  background: #1a1a1a;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--neon-primary);
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: rgba(0, 255, 157, 0.1);
  border: 1px solid var(--neon-primary);
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--neon-primary);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  
  &:hover {
    color: var(--neon-primary);
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const Projects = () => {
  const projects = [
    {
      title: 'CineStream - OTT Platform',
      description: 'A modern OTT platform built with React, featuring movie streaming, user authentication, and a responsive design. Users can browse movies, watch trailers, and manage their watchlist.',
      iframe: 'https://achyuth-cinestream.netlify.app/',
      tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'API Integration'],
      github: 'https://github.com/Achyuth-Papisetty/CineStream',
      live: 'https://achyuth-cinestream.netlify.app/'
    },
    {
      title: 'PayEase - Payment Integration Platform',
      description: 'A comprehensive payment solution platform that enables seamless transactions with multiple payment methods. Features include Razorpay integration, UPI support, payment tracking, and transaction history.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tech: ['React.js', 'Razorpay API', 'UPI Integration', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Achyuth-Papisetty',
      live: '#'
    },
    {
      title: 'AI ChatBot - Smart Assistant',
      description: 'An intelligent chatbot assistant built with React and advanced AI APIs. Features include natural language processing, context-aware responses, and a modern, user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      tech: ['React.js', 'AI APIs', 'Natural Language Processing', 'WebSocket', 'Context API'],
      github: 'https://github.com/Achyuth-Papisetty',
      live: '#'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0, 255, 157, 0.2)' }}
            >
              {project.iframe ? (
                <ProjectIframe
                  src={project.iframe}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
              )}
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconWrapper>
                      <FaGithub /> Code
                    </IconWrapper>
                  </ProjectLink>
                  <ProjectLink
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconWrapper>
                      <FaExternalLinkAlt /> Live Demo
                    </IconWrapper>
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 