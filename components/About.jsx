import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'

function About() {
  return (
    <Container id='about' mt='100' maxW='container.xl'>
      <Heading
        className='section-heading'
        mb='50'
        as='h2'
        fontSize='4xl'
        fontWeight='bold'
        textTransform='uppercase'>
        About
      </Heading>
      <Flex direction={['column', 'column', 'row', 'row']}>
        <Box flex='2'>
          <Text fontSize='4xl' mb='6' fontWeight='bold'>
            Hey, I am maneth
          </Text>
          <Box>
            <Text lineHeight='2' mb='3' fontSize='lg'>
              I am maneth, a full stack dev from Sri Lanka. I love experimenting
              with the newest technologies and always look to learn new things.
              With over 3 years of experience in web development, I am highly
              skilled in JavaScript, React and Node.
            </Text>

            <Text lineHeight='2' fontSize='lg'>
              I am an expert in developing robust and scalable web applications
              using all the modern technologies. I want to give a great
              experience to my users with design that work, code that is
              beautiful and user interaction that feels natural.
            </Text>
          </Box>
        </Box>

        {/* Img */}
        <Box mt={['30', '30', '0', '0']} flex='3'>
          <Image
            alt='Profile image for the about section'
            w='90%'
            rounded='md'
            src='/profile.png'
          />
        </Box>
      </Flex>
    </Container>
  )
}

export default About
