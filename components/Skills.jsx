import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  Stack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const StatCrd = ({ statTitle, statVal }) => {
  const cardColor = useColorModeValue('whiteAplha.400', 'blackAlpha.400')

  return (
    <Box p='5' flex='1' bg={cardColor} boxShadow='lg' borderRadius='md'>
      <Text opacity='.8'>{statTitle}</Text>
      <Text fontSize='xl' mt='1'>
        {statVal}
      </Text>
    </Box>
  )
}

function Skills() {
  const [githubStats, setGithubStats] = useState({})
  const [loading, setLoading] = useState(true)

  const skillImages = {
    tools: [
      'adobe-photoshop.png',
      'figma.png',
      'git.png',
      'visual-studio-code.png',
    ],
    languages: ['html.png', 'css.png', 'python.png', 'javascript.png'],
    frameworks: ['react.png', 'django.png', 'arduino.png', 'wordpress.png'],
  }

  useEffect(() => {
    const fetchGithubStats = async () => {
      const res = await fetch('https://api.github.com/users/manethye', {
        method: 'GET',
        headers: {
          Authorization: process.env.GITHUB_ACCESS_TOKEN,
        },
      })
      const data = await res.json()

      setGithubStats(data)
      setLoading(false)
    }

    fetchGithubStats()
  }, [])

  return (
    <Container id='skills' maxW='container.xl' mt='100'>
      <Text
        mb='30'
        fontWeight='bold'
        textTransform='uppercase'
        fontSize='4xl'
        className='section-heading'>
        Skills
      </Text>
      <Flex direction={['column', 'column', 'row', 'row']}>
        <Box flex='1'>
          <Text mb='6' w={['100%', '100%', '85%', '85%']}>
            With over than 3 years of development experience I am familier with
            technologies like Arduino, Svelte, React, Node, Django and Wordpres.
            I love to make cool and modern projects to sharpen my skills.
            Wan&apos;t to view some of my Work?
          </Text>

          <Button colorScheme='teal'>
            Projects <ChevronRightIcon fontSize='lg' />
          </Button>

          {/* Github stats */}
          <Box pt='14' w='85%'>
            {loading ? (
              <h1>Loading</h1>
            ) : (
              <Box>
                <HStack>
                  {/* Public Repos */}
                  <StatCrd
                    statTitle='Repos'
                    statVal={githubStats.public_repos}
                  />

                  <StatCrd
                    statTitle='Followers'
                    statVal={githubStats.followers}
                  />

                  <StatCrd
                    statTitle='Following'
                    statVal={githubStats.following}
                  />
                </HStack>
              </Box>
            )}
          </Box>
        </Box>

        <Box mt={[30, 30, 0, 0]} flex='1'>
          {/* Languages */}
          <Box>
            <Text fontSize='xl' mb='5'>
              Languages
            </Text>
            <Flex>
              {skillImages.languages.map((img, i) => (
                <SkillItem key={i} imgSrc={`/skills/${img}`} />
              ))}
            </Flex>
          </Box>

          {/* Frameworks */}
          <Box mt='6'>
            <Text fontSize='xl' mb='5'>
              Frameworks
            </Text>
            <Flex>
              {skillImages.frameworks.map((img, i) => (
                <SkillItem imgSrc={`/skills/${img}`} key={i} />
              ))}
            </Flex>
          </Box>

          {/* Tools */}
          <Box mt='6'>
            <Text fontSize='xl' mb='5'>
              Tools
            </Text>
            <Flex>
              {skillImages.tools.map((img, i) => (
                <SkillItem imgSrc={`/skills/${img}`} key={i} />
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
      cursor='pointer'>
      <Image alt='Skill Image' w='70%' src={imgSrc} />
      {helper && <Text className='helper'>{helper}</Text>}
    </Box>
  )
}

export default Skills
