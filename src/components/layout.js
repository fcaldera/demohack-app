import React from 'react';

import NavBar from './navbar';
import Routes from './routes';
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  flex-shrink: 0;
`;

const Main = styled.main`
  flex-grow: 1;
`;

function Layout(props) {
  return (
    <Container>

      <Nav>
        <NavBar/>
      </Nav>

      <Main>
        <Routes/>
      </Main>

    </Container>
  );
}

export default Layout;
