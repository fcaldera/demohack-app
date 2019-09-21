import styled from 'styled-components'
import {Box} from "@primer/components";

export const Spacer = styled(Box)`
  border-bottom: ${({theme, variant }) => variant === 'vertical' ? 'none' : `1px solid ${theme.colors.gray[3]}`};
  border-right: ${({theme, variant }) => variant === 'vertical' ? `1px solid ${theme.colors.gray[3]}` : 'none' };
`;

Spacer.defaultProps = {
  variant: 'horizontal'
}

export default Spacer
