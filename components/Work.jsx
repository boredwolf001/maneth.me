import { Box, Button, Container, Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Work = () => {
  const projects = [
    {
      title: 'Other Portfolio',
      desc: 'This is my other portfolio wich built with NextJS and SASS',
      img: '1.jpg',
      githubLink: 'https://github.com/manethye/portfolio',
    },
    {
      title: 'Stackoverflow Clone',
      desc: 'This is a stackoverflow clone which made with Django',
      img: '1.jpg',
      githubLink: 'https://github.com/manethye/django-questacks',
    },
    {
      title: 'Netflix UI Clone',
      desc: 'This is a clone Netflix UI made with pure HTML/CSS',
      img: '1.jpg',
      githubLink: 'https://github.com/manethye/netflix-ui-clone',
    },
  ]

  return (
    <Container maxW='container.xl' mt='100'>
      <Text
        className='section-heading'
        fontSize='3xl'
        fontWeight='bold'
        mb='30'
      >
        Top Projects
      </Text>
      <Flex
        alignItems='center'
        direction={{ md: 'column', sm: 'column', lg: 'row', xl: 'row' }}
        justifyContent='center'
      >
        {projects.map((project) => (
          <Box
            p='4'
            bg={{
              dark: 'rgba(0, 0, 0, 0.8)',
              light: 'rgba(255, 255, 255, 0.6)',
            }}
            boxShadow='lg'
            rounded='md'
            mr='4'
          >
            <Text
              fontFamily='Playfair Display'
              textAlign='center'
              mb='6'
              fontWeight='800'
              fontSize='3xl'
            >
              {project.title}
            </Text>
            <Image
              src={`/projects/${project.img}`}
              rounded='md'
              objectFit='cover'
              w='90%'
              m='0 auto'
              mb='5'
            />

            <Text mb='5' maxW='85%'>
              {project.desc}
            </Text>

            <Button variant='outline' colorScheme='whatsapp' w='full'>
              View on Github
            </Button>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default Work
