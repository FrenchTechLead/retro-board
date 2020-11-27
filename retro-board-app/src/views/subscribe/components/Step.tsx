import React from 'react';
import styled from 'styled-components';
import { colors } from '@material-ui/core';

interface StepProps {
  index: number;
  title?: string;
  description?: string;
}

const Step: React.FC<StepProps> = ({ index, title, description, children }) => {
  return (
    <Container>
      <Index>{index}</Index>
      <Main>
        <Header>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Header>
        <Content>{children}</Content>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${colors.grey[200]};
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  display: flex;

  @media screen and (max-width: 450px) {
    padding: 5px;
  }
`;

const Index = styled.div`
  align-self: center;
  font-size: 4em;
  font-weight: 100;
  margin-right: 20px;
  color: ${colors.grey[500]};

  @media screen and (max-width: 450px) {
    margin-right: 5px;
    font-size: 2em;
    align-self: flex-start;
  }
`;

const Main = styled.div``;

const Header = styled.div`
  padding-bottom: 20px;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 100;
  padding-bottom: 10px;
`;

const Description = styled.div``;

const Content = styled.div``;

export default Step;