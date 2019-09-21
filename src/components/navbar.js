import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from "@primer/components";

import styled from "styled-components";

const AppBar = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.space[2]};
`;

const Logo = styled.div`
  font-size: 21px;
  font-weight: 700;
  cursor: pointer;
`;

function NavBar(props) {
  const {history} = props;

  return (
    <AppBar>

      <Logo onClick={() => history.push('/')}>
        DemoHack.
      </Logo>

      <div style={{flexGrow: 1, textAlign: 'right'}}>
        <Button
          variant={"contained"}
          color={"primary"}
          style={{margin: 5}}
          onClick={() => history.push('/registration')}
        >Sign up
        </Button>

        <Button
          variant={"outlined"}
          color={"primary"}
          style={{margin: 5}}
          onClick={() => history.push('/login')}
        >Login
        </Button>
      </div>

    </AppBar>
  );
}

export default withRouter(NavBar);
