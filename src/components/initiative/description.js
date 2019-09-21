import React from 'react'
import styled from 'styled-components'
import { Heading, Box } from '@primer/components'

const DescriptionWrapper = styled(Box)`
  margin: auto;
  max-width: 704px;
  font-size: ${props => props.theme.fontSizes[3]}px;
  text-align: justify;
  margin-top: ${props => props.theme.space[7]}px;
  margin-bottom: ${props => props.theme.space[7]}px;
`

function Description({ title, children }) {
  return (
    <DescriptionWrapper my={5}>
      <Heading as="h3" fontSize="5" mb={3}>
        { title }
      </Heading>
      {children}
    </DescriptionWrapper>
  )
}

export default Description
