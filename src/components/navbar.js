import React from 'react';
import styled from 'styled-components'
import Avatar from 'react-avatar'
import {withRouter} from 'react-router-dom';
import {Heading, Flex, Text, TextInput} from "@primer/components";
import { border, color } from 'styled-system'

import Bell from '../assets/img/notification.svg'
import Search from '../assets/img/search.svg'

import Button from './common/button'

const AppBar = styled(Flex)`
  ${border}
  ${color}
`

const Img = styled.img`
  max-width: 100%;
  margin-bottom: 0;
`;

const SearchInput = styled(TextInput)`
  margin-left: ${props=> props.theme.space[2]}px;
  width: 230px;
  box-shadow: none;
  border: none;
  outline: none;
`

function NavBar(props) {
  const {history} = props;

  return (
    <AppBar alignItems="center" p={3} borderBottom="1px solid" borderColor="gray.2">

      <Heading mt={2} fontSize={4} mr={5} onClick={() => history.push('/')} css="cursor:pointer">
        DemoHack.
      </Heading>
      <Flex alignItems="center">
        <Img src={Search} />
        <SearchInput placeholder="Search parties or initatives" aria-label="search" name="search" />
      </Flex>

      <Flex ml="auto" alignItems="center">
        <Button
          backgroundColor="blue"
          color="white"
          onClick={() => history.push('/registration')}
          mr={3}
        >
          Start new initiative
        </Button>
        <Img src={Bell} />
        <Flex alignItems="center" ml={3}>
          <Avatar src="https://i.pravatar.cc/300"
            round
            size="40px"
          />
          <Text ml={3}>
            Liisa Mets
            </Text>
        </Flex>
      </Flex>

    </AppBar>
  );
}

export default withRouter(NavBar);
