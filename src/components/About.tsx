import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: var(--background-dark);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--neon-primary);
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  color: var(--text-primary);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const EducationSection = styled.div`
  margin-top: 2rem;
`;

const EducationItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--neon-primary);
  border-radius: 8px;
  background: rgba(0, 255, 157, 0.05);
`;

const EducationTitle = styled.h3`
  color: var(--neon-primary);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const EducationDetails = styled.p`
  color: var(--text-primary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const SkillsSection = styled.div`
  margin-top: 2rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Skill = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 157, 0.1);
  border: 1px solid var(--neon-primary);
  border-radius: 20px;
  color: var(--neon-primary);
  font-size: 0.9rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <Content
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <Text>
              I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
              My journey in software development began during my MCA program, where I developed a deep interest in creating 
              efficient and user-friendly applications.
            </Text>
            <Text>
              I specialize in building modern web applications using React.js, Node.js, and various other cutting-edge 
              technologies. My approach combines technical expertise with creative problem-solving to deliver solutions 
              that are both functional and aesthetically pleasing.
            </Text>
            <EducationSection>
              <EducationItem>
                <EducationTitle>Master of Computer Applications (MCA)</EducationTitle>
                <EducationDetails>Jawaharlal Nehru Technological University, Anantapur</EducationDetails>
                <EducationDetails>2022 - 2024</EducationDetails>
                <EducationDetails>CGPA: 8.06</EducationDetails>
              </EducationItem>
              <EducationItem>
                <EducationTitle>Bachelor's Degree</EducationTitle>
                <EducationDetails>K.T.S. Government Degree College, Rayadurgam,Anantapur</EducationDetails>
                <EducationDetails>2019 - 2022</EducationDetails>
                <EducationDetails>CGPA: 8.63</EducationDetails>
              </EducationItem>
            </EducationSection>
          </div>
          <div>
            <SkillsSection>
              <Title style={{ fontSize: '1.8rem', textAlign: 'left' }}>Skills</Title>
              <SkillsList>
                <Skill>Java</Skill>
                <Skill>OOPs</Skill>
                <Skill>Python</Skill>
                <Skill>SQL</Skill>
                <Skill>SDLC</Skill>
                <Skill>Git</Skill>
                <Skill>React.js</Skill>
                <Skill>HTML5</Skill>
                <Skill>CSS3</Skill>
                <Skill>JavaScript</Skill>
                <Skill>MongoDB</Skill>
                <Skill>Express.js</Skill>
                <Skill>Node.js</Skill>
              </SkillsList>
            </SkillsSection>
          </div>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About; 