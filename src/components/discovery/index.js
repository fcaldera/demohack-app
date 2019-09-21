import React from 'react';
import { Flex } from '@primer/components';

import Container from '../common/container';
import Spacer from '../common/spacer';

import Popular from './popular'
import Recommended from './recommended'

function Discovery() {
  return (
    <Container py={6}>
      <Popular/>
      <Spacer my={7}/>
      <Flex flex="1">
        <Recommended
          image="https://images.unsplash.com/photo-1569017388730-020b5f80a004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          tag="Reccomended"
          title="Make Cats Great Again"
          donors={24}
          members={56}
        />
        <Recommended
          image="https://images.unsplash.com/photo-1569017388730-020b5f80a004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          tag="Reccomended"
          title="Democray 2.0"
          donors={67000}
          members={1500}
        />
      </Flex>
    </Container>
  )
}

export default Discovery;
