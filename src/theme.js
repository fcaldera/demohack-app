import { theme as primer } from "@primer/components";


const colors = {
  ...primer.colors,
  blue: '#374AD3'
}

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
}

export default Theme