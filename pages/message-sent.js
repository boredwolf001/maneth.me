import React from 'react'
import { Link, Flex, Heading, Button, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Lottie from 'react-lottie-player'
import lottieData from '../assets/message-sent.json'

const formSuccessPage = () => (
  <Box textAlign='center'>
    <Head>
      <title>I will reach you soon!</title>
    </Head>
    <Lottie
      loop
      animationData={lottieData}
      play
      style={{
        width: 350,
        height: 350,
        marginTop: '30px',
        marginInline: 'auto',
        zIndex: -10,
      }}
    />
    <Heading>Thanks for Contacting me! I&apos;ll reach you soon!</Heading>
    <Button colorScheme='teal' marginTop='6'>
      <Link href='/'>Go Back</Link>
    </Button>
  </Box>
)

export default formSuccessPage
