import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  colors: {
    brand: {
      100: "#16a18a"
    }
  },
})

export default theme
