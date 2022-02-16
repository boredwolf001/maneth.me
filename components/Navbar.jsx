import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Link,
} from '@chakra-ui/react'
import { HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import ModeToggle from './ModeToggle'
import NextLink from 'next/link'

function Navbar() {
  return (
    <Container maxW='container.xl'>
      <Flex
        as='nav'
        align='center'
        justify='space-between'
        py='5'
        w='100%'
        mb={8}
        bg='transparent'
        color={{ dark: 'white', light: 'black' }}
        style={{ position: 'sticky', top: 0 }}>
        <Box>
          <Link passHref href='/'>
            <Image src='/logo.png' w='13%' alt='Logo' />
          </Link>
        </Box>

        <Box
          display={['none', 'none', 'block', 'block']}
          flexBasis={{ base: '100%', md: 'auto' }}>
          <Stack
            spacing={8}
            align='center'
            justify={'center'}
            direction={'row'}
            pt={[4, 4, 0, 0]}>
            <NextLink href='/#about'>
              <Link>About</Link>
            </NextLink>
            <NextLink href='/#skills'>
              <Link>Skills</Link>
            </NextLink>
            <Link href='/#work'>
              <Link>Work</Link>
            </Link>
            <NextLink href='/#contact'>
              <Link>Contact</Link>
            </NextLink>
            <NextLink passHref href='https://maneth.hashnode.dev'>
              <Link>
                Blog <ExternalLinkIcon />
              </Link>
            </NextLink>

            <ModeToggle />
          </Stack>
        </Box>

        {/* Ham Menu */}
        <Box display={['block', 'block', 'none', 'none']}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant='outline'
            />

            <MenuList>
              <MenuItem>
                <Link passHref href='/#about'>
                  About Me
                </Link>
              </MenuItem>
              <MenuItem>
                <Link passHref href='/#skills'>
                  Skills
                </Link>
              </MenuItem>
              <MenuItem>
                <Link passHref href='/#work'>
                  Work
                </Link>
              </MenuItem>
              <MenuItem>
                <Link passHref href='/#contact'>
                  Contact
                </Link>
              </MenuItem>
              <MenuItem>
                <Link passHref href='https://maneth.hashnode.dev'>
                  Blog
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Container>
  )
}

export default Navbar
