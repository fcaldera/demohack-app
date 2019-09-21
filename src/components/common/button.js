/**
 * We cannot use the primer directly cause it has coupled github
 * We should use different ui
 */
import React from 'react';
import styled from 'styled-components'
import {Button as PrimerButton} from "@primer/components";

const StyledButton = styled(PrimerButton)`
  background-image: none;
`

function Button(props) {
  return (
    <StyledButton {...props} />
  );
}

export default (Button);
