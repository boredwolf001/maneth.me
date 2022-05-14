import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

function Hero() {
  return (
    <Box mt='75' w='full'>
      <Flex
        justify='space-between'
        direction={['column', 'column', 'row', 'row']}>
        <Box marginBottom={['50', '50', '0', '0']} mr='75'>
          <Heading
            as='h1'
            fontSize='6xl'
            fontWeight='black'
            lineHeight='1'
            mb='6'
            w={['full', 'full', '80%', '80%']}>
            Let&apos;s Build Something More{' '}
            <Text
              bgGradient='linear(to-l, #3bd3d9, #3b94d9)'
              bgClip='text'
              fontSize='6xl'
              display='inline'
              fontWeight='extrabold'>
              Exciting
            </Text>
          </Heading>

          <Text maxW='xl' mt='2' mb='5'>
            I&apos;m a guy from Sri Lanka who love to code and experiment with
            new technologies and solutions. I build unique and fullstack web
            apps. Want to hire me?
          </Text>

          <Link display='block' textDecor='none !important' href='#contact'>
            <Button colorScheme='teal'>
              Let&apos;s Talk <ChevronRightIcon ml='1' fontSize='xl' />
            </Button>
          </Link>
        </Box>
        <Box>
          <Image
            alt='3d Rocket Banner Image For The Hero Section'
            display={['none', 'none', 'block', 'block']}
            w='75%'
            src='/banner.svg'
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
