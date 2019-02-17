import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin-bottom: 42px;
  font-size: 1.8rem;
`;

const Knowledge = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: calc(42px - 1.45rem);

  @media (min-width: ${props => props.theme.screen.md}) {
    flex-direction: row;
  }
`;

const Skills = styled.section`
  h2 {
    font-size: 1rem;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    &:not(:last-of-type) {
      margin-right: 120px;
    }
  }
`;

const ExperienceSection = styled.section`
  margin-bottom: 42px;
  h2,
  h3 {
    font-size: 1rem;
  }
  p {
    margin-bottom: 0.75rem;
  }
`;

const skills = [
  'JavaScript',
  'CSS3/LESS/CSS Modules',
  'CSS-in-JS',
  'HTML5',
  'Mobile & Responsive Design',
  'React.js/Redux/React Router',
  'Next.js',
];

const learning = ['TypeScript', 'GraphQL'];

const experience = [
  {
    position: 'Front-end Developer, Full-time',
    period: 'Июль/2018 - настоящее время',
    company: 'ООО «Инстамарт Технолоджис»',
    responsibilities: ['Разработка/доработка приложений на React/Redux'],
  },
  {
    position: 'Front-end Developer, Freelance',
    period: '2014 год - настоящее время',
    responsibilities: [
      `Разработка/доработка приложений на React.js (Redux, Thunk, React Router),
    работа с Google Firebase`,
      'Написание Unit тестов (Jest, Enzyme)',
      'Адаптивная верстка (Mobile First CSS, Semantic HTML)',
    ],
  },
];

const peviously = [
  {
    position: 'System Engineer (Virtualization and Storage Systems), Full-time',
    period: 'Август/2012 - Июль/2018',
  },
];

const renderSkills = (skill, index) => <li key={index}>{skill}</li>;

const Experience = ({
  experience: { position, period, company, responsibilities },
}) => (
  <div>
    <p>
      <b>{position}</b> -<i> {period}</i>
      {company && (
        <React.Fragment>
          <br />
          {company}
        </React.Fragment>
      )}
    </p>
    {responsibilities && responsibilities.length ? (
      <ul>
        {responsibilities.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    ) : null}
  </div>
);

const About = () => (
  <div>
    <Title>Обо мне</Title>
    <Knowledge>
      <Skills>
        <h2>Умения/Знания</h2>
        <ul>{skills.map(renderSkills)}</ul>
      </Skills>
      <Skills>
        <h2>Изучаю/Пробую</h2>
        <ul>{learning.map(renderSkills)}</ul>
      </Skills>
    </Knowledge>
    <ExperienceSection>
      <h2>Опыт</h2>
      {experience.map((exp, index) => (
        <Experience key={index} experience={exp} />
      ))}
      <hr />
      <h3>До этого</h3>
      {peviously.map((exp, index) => (
        <Experience key={index} experience={exp} />
      ))}
    </ExperienceSection>
  </div>
);

export default About;
