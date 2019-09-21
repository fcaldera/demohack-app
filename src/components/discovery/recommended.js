import React from 'react'
import numeral from 'numeral'
import { Heading, Text, Flex } from '@primer/components'

import { Img, Tag } from './styled'

const tranformReadableAmount = (amount) => {
  return numeral(amount).format('0a')
}

function Recommended({ image, tag, title, donors, members }) {
  return (
    <Flex flex="1" alignItems="center">
      <Img
        src={image}
        width="196"
        height="119"
        title="test"
      />
      <Flex
        ml={5}
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        pr={3}
      >
        <Tag>{tag}</Tag>
        <Heading as="h2" fontSize={3} mt={3} mb={1}>
          {title}
        </Heading>
        <Flex alignItems="center">
          <Text fontSize={0} color="gray.5">
            {tranformReadableAmount(donors)} donor
          </Text>
          <Text as="span" fontSize={0}  color="gray.5" mx={1}>&middot;</Text>
          <Text fontSize={0} color="gray.5">
            {tranformReadableAmount(members)} members
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Recommended
