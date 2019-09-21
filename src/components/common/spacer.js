import styled from 'styled-components'
import {Box} from "@primer/components";

export const Spacer = styled(Box)`
  border-bottom: 1px solid ${props => props.theme.colors.gray[3]};
`;

export default Spacer
