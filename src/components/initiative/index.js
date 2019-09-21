import React from 'react';
import styled from 'styled-components'
import Avatar from 'react-avatar'
import {Route, Switch} from 'react-router-dom'
import {color} from 'styled-system'
import { Heading, Text, Box, Flex } from '@primer/components';

import Bookmark from "../../assets/img/bookmark.svg";
import Container from '../common/container';
import Button from '../common/button'
import Spacer from '../common/spacer'

import Tabs from './initiative-tabs'
import Overview from './overview'

const Hero = styled(Box)`
  ${color};
  background-image: linear-gradient(181.61deg, rgba(46, 49, 49, 0) 24%, #2F3232 86.75%), url(${props => props.illustration});
  background-size: cover;
`;

export const SmallAvatar = styled(Avatar)`
  z-index: ${props => props.zIndex};
  margin-left: ${props => props.marginLeft};
`;

export const Img = styled.img`
  border-radius: 8px;
  max-width: 100%;
`

const StatusProgress = ({ active }) => {
  const ActiveButton = ({ id, ...rest }) => {
    return (
      <Button color="gray.1" variant={id === active ? 'active' : 'no-border'} {...rest} />
    )
  }

  return (
  <Flex alignItems="center">
    <ActiveButton id="funding"> Käivitus </ActiveButton>
    <Spacer width="48px" mx={3}/>
    <ActiveButton id="in-progress"> Asutamine </ActiveButton>
    <Spacer width="48px" mx={3}/>
    <ActiveButton id="funded"> Asutatud </ActiveButton>
  </Flex>
)}

function Initiative(props) {
  console.log(props)
  return (
    <Box>
      <Hero color="white" width="100%" minHeight="700px" illustration="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80">
        <Container pt={8}>
          <StatusProgress active="funding" />
          <Box maxWidth="512px" my={7}>
            <Heading as="h1" fontSize="58px">
            CyberSafe Nation Party
            </Heading>
            <Text as="p" fontSize="18px" lineHeight="32px" pb={4}>
              Big changes happen from one person. Join and crowdfund a cause you
              believe in and help to shape the future of your country.
            </Text>
            <Flex mt={3} alignItems="center">
              <Box>
                <SmallAvatar
                  round
                  size="40px"
                  marginLeft="-0px"
                  src="https://i.pravatar.cc/300"
                />
                <SmallAvatar
                  round
                  size="40px"
                  marginLeft="-10px"
                  src="https://i.pravatar.cc/300?v1"
                />
                <SmallAvatar
                  round
                  size="40px"
                  marginLeft="-10px"
                  src="https://i.pravatar.cc/300?v2"
                />
              </Box>
              <Flex ml={3} alignItems="flex-start" flexDirection="column">
                <Text fontSize={5} mr={2}>
                  200 / 500
                </Text>
                <Text fontSize={1} color="gray.2">
                  inimest toetavad
                </Text>
              </Flex>
              <Spacer variant="vertical" mx={3} height="50px"/>
              <Flex ml={3} alignItems="flex-start" flexDirection="column">
                <Text fontSize={5} mr={2}>
                  €560.00
                </Text>
                <Text fontSize={1} color="gray.2">
                  kogutud €2500 eesmärgist
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Spacer my={7}/>
          <Flex alignItems="center" mb={7}>
            <Button fontSize={1} p={3} color="white" backgroundColor="pink" border="none">
              Toeta algatust
            </Button>
            <Flex ml={3} color="white" css="cursor:pointer" alignItems="center">
              <Img src={Bookmark} />
              <Text ml={2} fontSize={1} width="100px"> 
                Salvesta hilisemaks
              </Text>
            </Flex>
          </Flex>
          <Tabs />
        </Container>
      </Hero>
      <Switch>
        <Route path="/initiative/1" component={Overview} />
      </Switch>
    </Box>
  )
}

export default Initiative;
