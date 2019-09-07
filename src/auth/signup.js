import React from 'react';
import { Flex, Box, Text, Heading, Button , ButtonPrimary} from '@primer/components';
import illustration from './2.svg';
import swedbank from './swedbank.svg';
import seb from './seb.svg';
import lhv from './lhv.svg';
import styled from 'styled-components';

const Content = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  max-width: 712px;
`;

const BankLink = styled.a`
  text-decoration: none;
  display: block;
  border-radius: 7px;
  background: ${props => props.theme.colors.gray[2]};
  box-shadow: 0px 2px 2px rgba(176, 182, 193, 0.06);
  border-radius: 7px;
  padding: 10px 20px;
  flex: 1;
  text-align: center;
  max-width: 136px;
`

const FormWrapper = styled.div`
  max-width: 416px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function Signup() {
  return (
    <Flex alignItems="stretch" height="100vh">
      <Box width={[1/2]}>
        <FormWrapper>
          <Box>
            <Heading mb={5}>
              Sign Up
            </Heading>
            <Flex justifyContent="space-between" mb={5}>
              <Button>ID-Card</Button>
              <Button>Mobile-ID</Button>
              <Button>Smart-ID</Button>
            </Flex>
            <Text as="p" mb={5}>
              Insert your ID-card into the card reader and click "Continue".
            </Text>
            <ButtonPrimary width={1} mb={7}>
              Continue
            </ButtonPrimary>
            <Text as="p" color="gray.5" mb={4} textAlign="center">
              or sign up via your bank...
            </Text>
            <Flex justifyContent="space-between" alignContent="stretch">
              <BankLink><img height="20px" src={swedbank}/></BankLink>
              <BankLink><img height="20px" src={seb} /></BankLink>
              <BankLink><img height="20px" src={lhv} /></BankLink>
            </Flex>
          </Box>
        </FormWrapper>
      </Box>
      <Flex  width={[1/2]} bg="primary" alignItems="center" alignContent="stretch">
        <Content>
          <Text as="div" textAlign="center" mb={[8]}>
            <Img src={illustration} />
          </Text>
          <Box color="white" px={[6, 6, 6, 12]}>
            <Text as="h2">Voice your needs</Text>
            <Text as="p">It’s you who are going to make a difference.</Text>
          </Box>
        </Content>
      </Flex>
    </Flex>
  )
}

export default Signup;
