import { Box, Text, Container, Link, Flex, Button } from '@chakra-ui/react'

function Footer() {
  return (
    <Box mt='100' bg='rgba(0, 0, 0, 0.2)' py='6'>
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
          <Box flex='1'>
            <Link
              // p='3'
              mr='3'
              href='https://twitter.com/manethye'
              target='_blank'
              rel='no-referrer'
            >
              <Button>
                <ion-icon
                  style={{ fontSize: '25px' }}
                  name='logo-twitter'
                ></ion-icon>
              </Button>
            </Link>
            <Link
              // p='3'
              mr='3'
              href='https://github.com/manethye'
              target='_blank'
              rel='no-referrer'
            >
              <Button>
                <ion-icon
                  style={{ fontSize: '25px' }}
                  name='logo-github'
                ></ion-icon>
              </Button>
            </Link>
            <Link
              // p='3'
              mr='3'
              href='mailto:hello@maneth.me'
              target='_blank'
              rel='no-referrer'
            >
              <Button>
                <ion-icon
                  style={{ fontSize: '25px' }}
                  name='mail-outline'
                ></ion-icon>
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
