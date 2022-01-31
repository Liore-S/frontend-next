import { ChakraProvider } from '@chakra-ui/react'
import { ChakraTheme } from '../styles/theme.js'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={ChakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>)
}

export default MyApp
