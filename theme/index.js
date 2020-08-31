import theme from '@hackclub/theme'

const base = {
  ...theme,
  sectionbox: {
    mx: [3, 3, 4, 5],
    pb: [5],
    fontSize: [3],
    h1: {
      fontSize: [5, 5, 6, 6],
      lineHeight: ['100%', 'initial'],
      mb: 3,
    },
  },
}

/**Disable dark mode */
base.useColorSchemeMediaQuery = false
base.colors.modes = {}

export default base
