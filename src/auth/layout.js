import React from 'react';
import { Flex, Box, Text } from '@primer/components';
import illustration from './2.svg';
import styled from 'styled-components';

const Content = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  max-width: 712px;
`;

function Layout({ children, illustration, copy }) {
  return (
    <Flex alignItems="strech" height="100vh">
      <Box width={[1/2]}>{
        children
      }</Box>
      <Flex  width={[1/2]} bg="primary" alignItems="center" alignContent="strech">
        <Content>
          <Text as="div" textAlign="center" mb={[8]}>
            <Img src={illustration} />
          </Text>
          <Box color="white" px={[6, 6, 6, 12]}>
            {copy}
          </Box>
        </Content>
      </Flex>
    </Flex>
  )
}

export default Layout;
