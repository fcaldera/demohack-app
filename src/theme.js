import { theme as primer } from "@primer/components";
import { rgba } from 'polished';


const colors = {
  ...primer.colors,
  blue: '#374AD3',
  pink: '#E1A2A3'
}

const buttons = {
  outline: {
    color: colors.blue,
    backgroundColor: 'transparent',
    border: `1px solid ${colors.blue}`, //rgba(255,255,255, .75),
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.blue,
      borderColor: colors.blue,
    },
  },
  [`no-border`]: {
    backgroundColor: 'transparent',
    border: 'none',
  },
  success: {
    color: 'white',
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    '&:hover': {
      color: 'white',
      backgroundColor: rgba(colors.blue, 0.95),
      borderColor: colors.blue,
    },
  },
  active: {
    color: 'black',
    backgroundColor: colors.white,
    borderColor: colors.white,
    '&:hover': {
      color: colors.white,
      backgroundColor: rgba(colors.black, 0.95),
      borderColor: colors.blue,
    },
  },
};


const Theme = {
  ...primer,
  colors,
  fonts: {
    normal: "Manjari, Arial, sans-serif",
    mono: "Manjari, Arial, sans-serif",
  },
  fontWeights: {
    light: 100,
    normal: 400,
    bold: 700
  },
  buttons
}

export default Theme
