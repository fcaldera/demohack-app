import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {
  fontWeight,
  border,
  buttonStyle,
  variant,
  system,
  color,
  typography,
} from 'styled-system';
import { Box } from "@primer/components";
import BeatLoader from 'react-spinners/BeatLoader';

const buttonSizes = variant({
  key: 'buttonSizes',
  prop: 'size',
});

const Button = styled(Box)(
  {
    display: 'inline-block',
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    transition:
      'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
  },
  color,
  fontWeight,
  border,
  buttonStyle,
  buttonSizes,
  typography,
);

Button.propTypes = {
  ...fontWeight.propTypes,
  ...border.propTypes,
  ...buttonStyle.propTypes,
  ...buttonSizes.propTypes,
};

Button.defaultProps = {
  type: 'button',
  as: 'button',
  m: 0,
  fontSize: '16px',
  border: '1px solid',
  borderRadius: 2,
  size: 'default',
  textTransform: 'uppercase',
  textAlign: 'center',
};

const Wrapper = React.forwardRef(
  (
    { isLoading, disabled, children, loaderProps, containerProps, ...rest },
    ref
  ) => {
    return (
      <Box {...containerProps}>
        {isLoading ? (
          <Button ref={ref} disabled={isLoading || disabled} {...rest}>
            <BeatLoader
              sizeUnit={'px'}
              size={8}
              color="white"
              loading={isLoading}
              {...loaderProps}
            />
          </Button>
        ) : (
          <Button disabled={disabled} {...{ children, ...rest }} />
        )}
      </Box>
    );
  }
);

Wrapper.defaultProps = {
  isLoading: false,
};

Wrapper.propTypes = {
  isLoading: PropTypes.bool,
};

export default Wrapper;
