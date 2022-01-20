import {
  Box,
  Text,
  Container,
  Link,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

function Footer() {
  const footerColor = useColorModeValue('whiteAlpha.500', 'blackAlpha.400')

  return (
    <Box mt='100' bgColor={footerColor} py='6'>
      <Container maxW='container.xl'>
        <Flex direction={{ sm: 'column', md: 'column', lg: 'row', xl: 'row' }}>
          <Box flex='1'>
            <Text mb='2' fontWeight='bold' fontSize='lg'>
              Maneth.me - Personal Portfolio
            </Text>
            <Text fontSize='md' opacity='.7'>
              Copyright @ {new Date().getFullYear()}
            </Text>
          </Box>

          {/* Social */}
          <Box mt={['10', '10', '0', '0']} flex='1'>
            <Link
              // p='3'
              mr='5'
              href='https://twitter.com/manethye'
              target='_blank'
              rel='no-referrer'
            >
              <ion-icon
                style={{ fontSize: '25px' }}
                name='logo-twitter'
              ></ion-icon>
            </Link>
            <Link
              // p='3'
              mr='5'
              href='https://github.com/manethye'
              target='_blank'
              rel='no-referrer'
            >
              <ion-icon
                style={{ fontSize: '25px' }}
                name='logo-github'
              ></ion-icon>
            </Link>
            <Link
              // p='3'
              mr='5'
              href='mailto:hello@maneth.me'
              target='_blank'
              rel='no-referrer'
            >
              <ion-icon
                style={{ fontSize: '25px' }}
                name='mail-outline'
              ></ion-icon>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
