import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/Layout'
import theme from '../lib/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
        <meta
          name='description'
          content='I am Maneth a guy from Sri Lanka who love to code and experiment with new technologies.'
        />
        <script
          type='module'
          defer
          src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
        ></script>
        <script
          defer
          src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
        ></script>
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
