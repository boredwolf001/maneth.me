import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  Link,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react'
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
      img: '2.jpg',
      githubLink: 'https://github.com/manethye/questacks-django',
    },
    {
      title: 'Netflix UI Clone',
      desc: 'This is a clone Netflix UI made with pure HTML/CSS',
      img: '3.jpg',
      githubLink: 'https://github.com/manethye/netflix-ui-clone',
    },
  ]

  return (
    <Container id='work' maxW='container.xl' mt='100'>
      <Heading as='h2' className='section-heading' fontSize='3xl' mb='10'>
        Top Projects
      </Heading>
      <Flex
        alignItems='center'
        direction={['column', 'column', 'row', 'row']}
        justifyContent='center'>
        {projects.map((project, i) => (
          <ProjectCrd
            key={i}
            img={`/projects/${project.img}`}
            github={project.githubLink}
            title={project.title}
            desc={project.desc}
          />
        ))}
      </Flex>
    </Container>
  )
}

const ProjectCrd = ({ img, github, title, desc }) => {
  const cardColor = useColorModeValue('whiteAlpha.400', 'blackAlpha.400')

  return (
    <Box
      p='4'
      className='project-card'
      bg={cardColor}
      boxShadow='lg'
      rounded='md'
      mr={['0', '0', '4', '4']}
      mb={['4', '4', '0', '0']}>
      <Heading
        as='h3'
        textAlign='center'
        mb='6'
        fontWeight='800'
        fontSize='3xl'>
        {title}
      </Heading>
      <Image
        alt='Project Image'
        src={img}
        rounded='md'
        objectFit='cover'
        w='90%'
        m='0 auto'
        mb='5'
      />

      <Text textAlign='center' mb='5' maxW='85%'>
        {desc}
      </Text>

      <Link textDecor='none !important' href={github}>
        <Button variant='outline' colorScheme='teal' w='full'>
          View on Github
        </Button>
      </Link>
    </Box>
  )
}

export default Work
