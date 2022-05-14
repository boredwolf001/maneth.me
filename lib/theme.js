import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    teal: {
      100: '#3b94d9',
      200: '#3bd3d9',
    },
  },
})

export default theme
