import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'

function Contact() {
  return (
    <Container id='contact' mt='100' maxW='container.xl'>
      <Heading mb='35' as='h2' className='section-heading'>
        Contact Me
      </Heading>
      <Flex
        direction={['column', 'column', 'row', 'row']}
        justify='space-around'>
        <Box flex='1'>
          <Box maxW={{ lg: '85%', xl: '85%' }}>
            <Heading as='h3' fontWeight='900' fontSize='4xl' mb='3'>
              Any, Collaborators ? Let&apos;s have a chat!
            </Heading>

            <Text lineHeight='2'>
              I am always up for cool ideas and projects. If you want to have a
              chat about any of the projects I worked on feel free to get in
              touch!
            </Text>

            <Box mt='10'>
              <Flex>
                <ion-icon name='call-outline' size='large'></ion-icon>
                <Text fontSize='lg' ml='6'>
                  +94 78 112 7220
                </Text>
              </Flex>
            </Box>
            <Box mt='8'>
              <Flex>
                <ion-icon name='mail-outline' size='large'></ion-icon>
                <Text fontSize='lg' ml='6'>
                  hello@maneth.me
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>

        <Box mt={[10, 10, 0, 0]} flex='1'>
          <Box w={['100%', '100%', '85%', '85%']}>
            <form>
              <FormControl colorScheme='teal' mb='5'>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input id='text' type='text' />
              </FormControl>
              <FormControl colorScheme='teal' mb='5'>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input id='email' type='email' />
              </FormControl>
              <FormControl colorScheme='teal' mb='4'>
                <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea id='message' />
              </FormControl>

              <Button w='full' colorScheme='teal' type='submit'>
                Send
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

export default Contact
