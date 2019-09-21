import React from 'react'
import numeral from 'numeral'
import { Heading, Text, Flex } from '@primer/components'

import { Img } from './styled'

const transformReadableAmount = amount => {
  return numeral(amount).format('0a')
}

function Card({ image, title, donors, members }) {
  return (
    <Flex mr={2} flexDirection="column" alignItems="flex-start" mb={3}>
      <Img src={image} width="240px" height="160px" title="test"  loading="lazy" />
      <Heading as="h2" fontSize={3} mt={3} mb={1}>
        {title}
      </Heading>
      <Flex alignItems="center">
        <Text fontSize={0} color="gray.5">
          {transformReadableAmount(donors)} annetajat
        </Text>
        <Text as="span" fontSize={0} color="gray.5" mx={1}>
          &middot;
        </Text>
        <Text fontSize={0} color="gray.5">
          {transformReadableAmount(members)} liiget
        </Text>
      </Flex>
    </Flex>
  )
}

export default Card
