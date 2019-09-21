import React from 'react';
import styled from 'styled-components'
import Avatar from 'react-avatar'
import {Heading, Text, Flex} from '@primer/components';
import Container from '../common/container';

import UserCard from './user-card'

function Overview() {
  return (
    <Container py={5}>
      <Flex flex="1">
        <UserCard
          image="https://i.pravatar.cc/300?v2"
          title="Algatuse eestvedaja"
          name="Guy-Philippe Goldstein"
        />
        <UserCard
          image="https://i.pravatar.cc/300?v2"
          title="Peasekretär"
          name="Dianne Robertson"
        />
      </Flex>
    </Container>
  )
}

export default Overview;
