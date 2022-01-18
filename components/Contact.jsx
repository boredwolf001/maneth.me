import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'

function Contact() {
  return (
    <Container id='about' mt='100' maxW='container.xl'>
      <Text
        mb='35'
        fontSize='4xl'
        fontWeight='bold'
        textTransform='uppercase'
        className='section-heading'
      >
        Contact Me
      </Text>
      <Flex
        direction={[
          'column-reverse',
          'column-reverse',
          'row-reverse',
          'row-reverse',
        ]}
        justify='space-around'
      >
        <Box mb={{ md: '10', sm: '10' }} flex='1'>
          <Box w={['100%', '100%', '85%', '85%']}>
            <form>
              <FormControl mb='5'>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input id='text' type='text' />
              </FormControl>
              <FormControl mb='5'>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input id='email' type='email' />
              </FormControl>
              <FormControl mb='4'>
                <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea id='message' />
              </FormControl>

              <Button
                w='full'
                variant='outline'
                type='submit'
                colorScheme='teal'
              >
                Send
              </Button>
            </form>
          </Box>
        </Box>

        {/* 2 */}
        <Box flex='1'>
          <Box maxW={{ lg: '85%', xl: '' }}>
            <Text fontWeight='900' fontSize='4xl' mb='3'>
              Any,{' '}
              {/* <Box
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                display='inline-block'
              > */}
              <span className='gradient-text'>Collaborators</span>
              {/* </Box> */}? Let's have a chat!
            </Text>

            {/* Text */}
            <Text fontSize='md' lineHeight='2'>
              I am always up for cool ideas and projects. If you want to have a
              chat about any of the projects I worked on feel free to get in
              touch!
            </Text>

            {/* Detail boxes */}
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
      </Flex>
    </Container>
  )
}

export default Contact
