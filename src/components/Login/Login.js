import React from "react";
import styled, { keyframes } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const Wrapper = styled.section`
  display: grid;
  // justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Form = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgb(46,46,46);
  border-radius: 25px;
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: rgb(227, 151, 64);
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  color: #FFFFFF;
  font-size: 22px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding-top: 10px;
`;

function LogIn(props) {
  const { handleLogin } = props;
  return (
    <Wrapper>
      <Form>
        <img src={'/Images/ .png'} alt='Logo Datamatics'/> 
        <Title>Login to Amazon Connect</Title>
        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </Wrapper>
  );
}

export default LogIn;