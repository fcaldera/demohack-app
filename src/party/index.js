import React from 'react';
import { Heading, Text } from '@primer/components';
import Container from '../common/container';

function Party() {
  return (
    <Container>
      <Heading>Name!</Heading>
      <Text as="p">
        Welcome to this party!
      </Text>
    </Container>
  )
}

export default Party;
