import React from 'react';
import Avatar from 'react-avatar'
import { Text, Flex } from '@primer/components';

function UserCard({ image, title, name }) {
  return (
    <Flex flex="1" alignItems="center">
      <Avatar
        round
        size="72px"
        src={image}
      />
      <Flex
        ml={5}
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        pr={3}
      >
        <Text fontSize={2} color="gray.6">
          {title}
        </Text>
        <Text fontSize={3} color="black">
          {name}
        </Text>
      </Flex>
    </Flex>
  )
}

export default UserCard;
