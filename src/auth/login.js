import React from 'react';
import { Flex, Box } from '@primer/components';
import illustration from './login-illustration.svg';

function Login() {
  return (
    <Flex alignItems="strech" height="100vh">
      <Box width={[1/2]}>Left</Box>
      <Box width={[1/2]} bg="primary">
        <img src={illustration} />
      </Box>
    </Flex>
  )
}

export default Login;
