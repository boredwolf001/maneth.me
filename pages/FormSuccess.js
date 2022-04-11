import React from 'react'
import { Link, Flex, Heading, Button } from '@chakra-ui/react'
import Head from 'next/head'
import Lottie from 'react-lottie-player'
import lottieData from '../assets/message-sent.json'

const formSuccessPage = () => (
  <Flex alignItems='center' justifyContent='center' direction='column'>
    <Head>
      <title>Thanks!</title>
    </Head>
    <Lottie
      loop
      animationData={lottieData}
      play
      style={{ width: 350, height: 350, marginTop: '30px' }}
    />
    <Heading>
      Thanks for Contacting me! I&apos;ll reply you as soon as possible.
    </Heading>
    <Button colorScheme='teal' marginTop='6'>
      <Link href='/'>Go Back</Link>
    </Button>
  </Flex>
)

export default formSuccessPage
