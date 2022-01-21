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
    <Box mt='75' w='full'>
      <Container w='full' maxW='container.xl'>
        <Flex
          justify='space-between'
          direction={['column', 'column', 'row', 'row']}>
          <Box marginBottom={['50', '50', '0', '0']} mr='75'>
            <Text
              fontSize='6xl'
              lineHeight='1'
              mb='6'
              fontWeight='800'
              // fontFamily='Playfair Display'
              w={['full', 'full', '80%', '80%']}>
              Let&apos;s Build Something More Exciting
            </Text>

            {/* Para */}
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
              // transform={[
              //   'translateY(0) rotate(45deg) scale(.8)',
              //   'translateY(0) rotate(45deg) scale(.8)',
              //   'translateY(-100px) rotate(45deg) scale(.8)',
              //   'translateY(-100px) rotate(45deg) scale(.8)',
              // ]}
              w='75%'
              src='/banner.svg'
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Hero
