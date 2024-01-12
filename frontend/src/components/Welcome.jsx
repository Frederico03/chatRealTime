import React from 'react'
import styled from 'styled-components'
import Robot from "../assets/robot.gif"
export default function Welcome({ currentUser }) {
  if (currentUser) {
    return (
      <Container>
        <img
          src={Robot}
          alt="Robot"
        />
        <h1>
          Bem-vindo, <span>{currentUser.username}!</span>
        </h1>
        <h3>
          Por favor, selecione um chat
        </h3>
      </Container>
    )
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e00ff;
  }
`;
