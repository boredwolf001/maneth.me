import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'

function About() {
  return (
    <Container id='about' mt='70' maxW='container.xl'>
      <Text
        className='section-heading'
        mb='35'
        fontSize='4xl'
        fontWeight='bold'
        textTransform='uppercase'
      >
        About
      </Text>
      <Flex direction={['column', 'column', 'row', 'row']}>
        <Box mb={['30', '30', '0', '0']} flex='1'>
          <Image
            boxSize='90%'
            objectFit='cover'
            rounded='md'
            src='/profile.jpg'
          />
        </Box>
        <Box flex='2'>
          <Text fontSize='4xl' mb='6' fontWeight='bold'>
            Hey, I am maneth
          </Text>
          <Box maxW='md'>
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
      </Flex>
    </Container>
  )
}

export default About
