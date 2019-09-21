import Avatar from 'react-avatar'
import styled from 'styled-components'

export const SmallAvatar = styled(Avatar)`
  z-index: ${props => props.zIndex};
  margin-left: ${props => props.marginLeft};
`;

export const Img = styled.img`
  border-radius: ${({borderRadius}) => borderRadius || `8px`};
  width: ${({width}) => width || 'auto'};
  max-width: 100%;
`
