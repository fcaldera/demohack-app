import React from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import { Flex, Text } from '@primer/components'
import Container from '../common/container'
import Spacer from '../common/spacer'
import { getDateDifference } from '../../utils/date'

import UserCard from './user-card'
import Description from './description'
import {
  Img
} from './styled'


const ULWrapper = styled.ul`
  list-style: none;
`

const LIWrapper = styled.li`
  margin-bottom: ${props => props.theme.space[4]}px;

  &::before {
    content: "•";
    color: ${props => props.theme.colors.blue};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`

const transformReadableAmount = amount => {
  return numeral(amount).format('0a')
}

function Overview() {
  return (
    <Container py={5}>
      <Flex flex="1">
        <UserCard
          image="https://i.pravatar.cc/300?img=7"
          title="Algatuse eestvedaja"
          name="Guy-Philippe Goldstein"
        />
        <UserCard
          image="https://i.pravatar.cc/300?img=5"
          title="Peasekretär"
          name="Dianne Robertson"
        />
      </Flex>
      <Spacer my={7} />
      <Flex flex="1">
        <Flex flex="1" ml={3} alignItems="flex-start" flexDirection="column">
          <Text fontSize={5} mr={2}>
            200 / 500
          </Text>
          <Text fontSize={1} color="gray.5">
            liiget
          </Text>
        </Flex>
        <Spacer variant="vertical" mx={3} height="50px" />
        <Flex flex="1" ml={3} alignItems="flex-start" flexDirection="column">
          <Text fontSize={5} mr={2}>
            150
          </Text>
          <Text fontSize={1} color="gray.5">
            annetajat
          </Text>
        </Flex>
        <Spacer variant="vertical" mx={3} height="50px" />
        <Flex flex="1" ml={3} alignItems="flex-start" flexDirection="column">
          <Text fontSize={5} mr={2}>
            {getDateDifference({
              current: new Date(),
              dateTo: '2019-10-30',
              unit: 'weeks'
            })}{' '}
            weeks
          </Text>
          <Text fontSize={1} color="gray.5">
            kampaania tähtaeg
          </Text>
        </Flex>
        <Spacer variant="vertical" mx={3} height="50px" />
        <Flex flex="1" ml={3} alignItems="flex-start" flexDirection="column">
          <Text fontSize={5} mr={2}>
            {transformReadableAmount(150000)}
          </Text>
          <Text fontSize={1} color="gray.5">
            inimest räägivad sellest
          </Text>
        </Flex>
      </Flex>
      <Description title="Kirjeldus">
        From voting to safety in cars & robots, Cybersec is #1 issue to defend
        freedom and democracy in the digital age. THIS is the frontline. No
        leniency here: Mobilize!
      </Description>
      <Img
        src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
        width="100%"
        borderRadius="none"
        height="386px"
        alt="test"
      />

      <Description title="Oodatav kasu">
        <p>
          We dont do political clientele here: Everyone will benefit! From 7 to
          77, whether you are a young couple with children or an older retired
          worker, you need to be CyberSafe! Your money, your lights & heating
          your safety when you work near a machine at the plant - the safety of
          yourself or your children when taking a car or a plane, or eating &
          drinking: all your life is now at risk, including even democracy!
          Especially since enemies are at the gate, ready to strike with
          cyberweapons. Unfortunately, the government and too many companies are
          still just too lenient. They dont get it. But now you do. So let us
          move forward together.
        </p>
        <p>
          Our motto: "We shall fight on the breaches, we shall fight on the
          landing page, we shall fight in the fields and in the data centers, we
          shall never surrender!"
        </p>
      </Description>
      <Description title="Tegevusplaan">
        <ULWrapper>
          <LIWrapper>
            Establishment of a yearly cyber civil service for children, citizens &
            companies to test, practice and learn
          </LIWrapper>
          <LIWrapper>
            Create tax rebates or grants to companies so that they invest in
            cybersecurity at levels of people, procedures & techniques
          </LIWrapper>
          <LIWrapper>
            {' '}
            Establish dedicated funding, grants or guarantees schemes to help
            local and foreign VC funds invest in the local cyber startup ecosystem
          </LIWrapper>
          <LIWrapper>
            Create an interdisciplinary cyber research center, open to foreign
            research centers, working wih startups, and dedicated to turning
            cybersecurity into a scientific domain, including social sciences &
            economics.
          </LIWrapper>
        </ULWrapper>
      </Description>
    </Container>
  )
}

export default Overview
