import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

function Hero() {
  return (
    <Box mt='50' w='full'>
      <Container w='full' maxW='container.xl'>
        <Flex
          direction={['column', 'column', 'row', 'row']}
          justify={'space-between'}
        >
          <Box maxW='lg' marginBottom={['50', '50', '0', '0']}>
            <Text fontSize='6xl' lineHeight='1' mb='6' fontWeight='black'>
              Let&apos;s Build Something{' '}
              <Box
                textColor='white'
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                display='inline-block'
              >
                More
              </Box>
              {''}
              Exciting
            </Text>

            {/* Para */}
            <Text maxW='xl' mt='2' mb='5'>
              I&apos;m a guy from Sri Lanka who love to code and experiment with
              new technologies and solutions. I build unique and fullstack web
              apps. Want to hire me?
            </Text>

            <Link display='block' textDecor='none !important' href='#contact'>
              <Button colorScheme='whatsapp'>
                Let&apos;s Talk <ChevronRightIcon ml='1' fontSize='xl' />
              </Button>
            </Link>
          </Box>
          <Box>
            <Image w='80%' src='/banner.png' />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Hero
