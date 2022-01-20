import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, Text, Image } from '@chakra-ui/react'
import Particles from 'react-tsparticles'

function Skills() {
  const skillImages = {
    tools: [
      'adobe-photoshop.png',
      'figma.png',
      'git.png',
      'visual-studio-code.png',
    ],
    languages: ['html.png', 'css.png', 'python.png', 'javascript.png'],
    frameworks: [
      'react.png',
      // 'nodejs.png',
      'django.png',
      'arduino.png',
      'wordpress.png',
    ],
  }

  const textureLayout = [1, 2, 1, 1, 2, 1, 2, 2]

  return (
    <Container maxW='container.xl' mt='100'>
      <Text
        mb='30'
        fontWeight='bold'
        textTransform='uppercase'
        fontSize='4xl'
        className='section-heading'
      >
        Skills
      </Text>
      <Flex direction={['column', 'column', 'row', 'row']}>
        <Box flex='1'>
          {/* <Text
            // bgGradient='linear(90deg, #e3ffe7 0%, #d9e7ff 100%)'
            // bgClip='text'
            mb='3'
            fontSize='4xl'
            fontWeight='900'
          >
            Wanna hire me Right now?
          </Text> */}
          <Text mb='6' w='85%'>
            With over than 3 years of development experience I am familier with
            technologies like Arduino, Svelte, React, Node, Django and Wordpres.
            I love to make cool and modern projects to sharpen my skills. Wan't
            to view some of my Work?
          </Text>

          <Button colorScheme='whatsapp'>
            Projects <ChevronRightIcon fontSize='lg' />
          </Button>

          {/* Web Texture */}
          {/* <Box mt='5' w='full' height='full' position='relative'>
            {textureLayout.map((choice) => (
              <Image w='7' src={choice === 1 ? '/www.png' : '/https.png'} />
            ))}
          </Box> */}
          <Box position='relative' w='200px'>
            {/* <Particles
              style={{
                zIndex: '10000',
                positon: 'absolute !important',
                top: '0',
                left: '0',
                width: '100%',
              }}
              params={{
                fps_limit: 28,
                particles: {
                  collisions: {
                    enable: false,
                  },
                  number: {
                    value: 200,
                    density: {
                      enable: false,
                    },
                  },
                  line_linked: {
                    enable: true,
                    distance: 30,
                    opacity: 0.4,
                  },
                  move: {
                    speed: 1,
                  },
                  opacity: {
                    anim: {
                      enable: true,
                      opacity_min: 0.05,
                      speed: 1,
                      sync: false,
                    },
                    value: 0.4,
                  },
                },
                polygon: {
                  enable: true,
                  scale: 0.5,
                  type: 'inline',
                  move: {
                    radius: 10,
                  },
                  url: '/small-deer.2a0425af.svg',
                  inline: {
                    arrangement: 'equidistant',
                  },
                  draw: {
                    enable: true,
                    stroke: {
                      color: 'rgba(255, 255, 255, .2)',
                    },
                  },
                },
                retina_detect: false,
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'bubble',
                    },
                  },
                  modes: {
                    bubble: {
                      size: 6,
                      distance: 40,
                    },
                  },
                },
              }}
            /> */}
          </Box>
        </Box>

        <Box mt={[30, 30, 0, 0]} flex='1'>
          {/* Languages */}
          <Box>
            <Text fontSize='xl' mb='5'>
              Languages
            </Text>
            <Flex>
              {skillImages.languages.map((img) => (
                <SkillItem imgSrc={`/skills/${img}`} />
              ))}
            </Flex>
          </Box>

          {/* Frameworks */}
          <Box mt='6'>
            <Text fontSize='xl' mb='5'>
              Frameworks
            </Text>
            <Flex>
              {skillImages.frameworks.map((img) => (
                <SkillItem imgSrc={`/skills/${img}`} />
              ))}
            </Flex>
          </Box>

          {/* Tools */}
          <Box mt='6'>
            <Text fontSize='xl' mb='5'>
              Tools
            </Text>
            <Flex>
              {skillImages.tools.map((img) => (
                <SkillItem imgSrc={`/skills/${img}`} />
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

const SkillItem = ({ imgSrc, helper }) => {
  return (
    <Box
      mr='5'
      py='2'
      display='flex'
      alignItems='center'
      justifyContent='center'
      className='skillItem'
      cursor='pointer'
    >
      <Image w='70%' src={imgSrc} />
      {helper && <Text className='helper'>{helper}</Text>}
    </Box>
  )
}

export default Skills
