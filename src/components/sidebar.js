import React, { useState, useEffect, createElement } from 'react';
import styled from 'styled-components';

const WORKING_HOURS = [6, 15];
const TIMEZONE = 3;

const StyledSidebar = styled.div`
  background-color: white;

  @media (min-width: ${props => props.theme.screen.lg}) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 450px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.24), 0 4px 4px 0 rgba(0, 0, 0, 0.12);
  }
`;

const SidebarContent = styled.div`
  height: ${props => `calc(100% - ${props.theme.headerHeight})`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Greeting = styled.div`
  padding: 0 60px 25px;

  h2 {
    font-family: ${props => props.theme.fontBase};
    font-size: 26px;
  }
`;

const About = styled.p`
  font-weight: bold;
`;

const WorkingHours = styled.span`
  display: block;
  margin-top: 10px;
  font-weight: bold;
`;

const getHumanWorkingHours = () =>
  `${WORKING_HOURS[0] + TIMEZONE}:00 - ${WORKING_HOURS[1] + TIMEZONE}:00 MSK`;

const WorkingMessage = () => (
  <p>
    Прямо сейчас я работаю над чем-то интересным{' '}
    <span aria-label="работаю за компьютером" role="img">
      👨‍💻
    </span>
  </p>
);

const SleepingMessage = () => (
  <p>
    Прямо сейчас я сплю{' '}
    <span aria-label="сплю Zzz" role="img">
      💤
    </span>
    , но вы можете написать мне) И я отвечу в рабочие часы:
    <WorkingHours>{getHumanWorkingHours()}</WorkingHours>
  </p>
);

const CrazyStuffMessage = () => (
  <p>
    Прямо сейчас я делаю какие-то сумасшедшие штуки{' '}
    <span aria-label="серфинг у меня на уме" role="img">
      🏄
    </span>
    , но вы можете написать мне) И я отвечу в рабочие часы:
    <WorkingHours>{getHumanWorkingHours()}</WorkingHours>
  </p>
);

const getMessageType = ([start, end]) => {
  const sleepingTime = [start - 3, end + 5];
  const date = new Date();
  const hour = date.getUTCHours();

  return hour >= start && hour < end
    ? 'WorkingMessage'
    : hour < sleepingTime[0] || hour >= sleepingTime[1]
    ? 'SleepingMessage'
    : 'CrazyStuffMessage';
};

const messageMap = {
  WorkingMessage,
  SleepingMessage,
  CrazyStuffMessage,
};

const Sidebar = ({ children }) => {
  const [messageType, setMessageType] = useState();

  useEffect(() => {
    const nextMessageType = getMessageType(WORKING_HOURS);
    nextMessageType !== messageType && setMessageType(nextMessageType);
  });

  return (
    <StyledSidebar>
      {children}
      <SidebarContent>
        <Greeting>
          <div>
            <h2>
              Привет{' '}
              <span aria-label="машу ручкой" role="img">
                👋
              </span>
            </h2>
            <About>Я Front End Engineer</About>
            {messageType && createElement(messageMap[messageType])}
          </div>
        </Greeting>
      </SidebarContent>
    </StyledSidebar>
  );
};

export default Sidebar;
