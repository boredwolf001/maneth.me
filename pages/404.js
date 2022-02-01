import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Container mt='32' maxW='container.xl'>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <Box display='grid' placeItems='center'>
        <Heading textAlign='center' as='h1' fontSize='5xl'>
          404 - Oops!! This page doesn't exists 🥺
        </Heading>
        <Text mt='6'>
          Sorry, The Page you were looking for could not be found
        </Text>

        <Link passHref href='/'>
          <Button
            colorScheme='teal'
            mt='10'
            variant='solid'
            rightIcon={<ChevronRightIcon fontSize='20' />}>
            Go Back
          </Button>
        </Link>
      </Box>
    </Container>
  )
}
