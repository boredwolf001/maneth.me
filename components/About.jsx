import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Atropos from 'atropos/react'

function About() {
  return (
    <Box id='about' mt='100'>
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
              experience to my clients with great UI/UX and the functionality.
            </Text>
          </Box>
        </Box>

        {/* Img */}
        <Box mt={['30', '30', '0', '0']} flex='3'>
          <a href='https://app.daily.dev/manethye'>
            <Image
              src='https://api.daily.dev/devcards/cf00ddd260da4b1f87e9f4f3d997f0f8.png?r=mhs'
              w={400}
              ml={['0', '0', '24', '24']}
              alt="Maneth's Dev Card"
            />
          </a>
        </Box>
      </Flex>
    </Box>
  )
}

export default About
