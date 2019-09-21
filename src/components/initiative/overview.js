import React from 'react'
import numeral from 'numeral'
import { Flex, Text } from '@primer/components'
import Container from '../common/container'
import Spacer from '../common/spacer'
import { getDateDifference } from '../../utils/date'

import UserCard from './user-card'

const transformReadableAmount = (amount) => {
  return numeral(amount).format('0a')
}

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
              dateTo: "2019-10-30",
              unit: 'weeks'
            })} weeks
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
    </Container>
  )
}

export default Overview
