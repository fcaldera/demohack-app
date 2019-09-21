import React from 'react'
import { Heading, Text, Flex, Box } from '@primer/components'

import { Img, Tag, SmallAvatar } from './styled'

function Popular() {
  return (
    <Flex alignItems="center">
      <Img
        src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        width="404"
        height="255"
        title="test"
      />
      <Flex
        ml={5}
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Tag>Populaarseim</Tag>
        <Heading as="h2" fontSize={5} my={3}>
          CyberSafe Nation Party
        </Heading>
        <Text fontSize={2}>
          Seventy-seven percent of anti-abortion leaders are men - 100% of them
          will never be pregnant
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
            <Text fontSize="18px" mr={2}>
              200 / 500
            </Text>
            <Text fontSize={1} color="gray.5">
              inimest toetavad
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Popular
