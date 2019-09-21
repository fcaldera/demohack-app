import Avatar from 'react-avatar'
import styled from 'styled-components'

export const Img = styled.img`
  border-radius: 8px;
  max-width: 100%;
`

export const Tag = styled.div`
  padding: ${ props=> props.theme.space[2]}px;
  border-radius: 8px;
  font-size: ${ props=> props.theme.fontSizes[0]}px;
  background-color: ${ props=> props.theme.colors.gray[2]};
`

export const SmallAvatar = styled(Avatar)`
  z-index: ${props => props.zIndex};
  margin-left: ${props => props.marginLeft};
`;
