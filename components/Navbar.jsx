import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ModeToggle from './ModeToggle'
import Link from 'next/link'

const LinkItem = ({ children, to = '/', ...rest }) => {
  return (
    <ChakraLink href={to}>
      <Text px='1' py='1' cursor='pointer' display='block' {...rest}>
        {children}
      </Text>
    </ChakraLink>
  )
}

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
        position='sticky'
        top='0'>
        <Box>
          <Text fontWeight='bold' fontSize='3xl'>
            <Image src='/logo.png' w='13%' alt='' />
          </Text>
        </Box>

        {/* Links */}
        <Box
          display={['none', 'none', 'block', 'block']}
          flexBasis={{ base: '100%', md: 'auto' }}>
          <Stack
            spacing={8}
            align='center'
            justify={'center'}
            direction={'row'}
            pt={[4, 4, 0, 0]}>
            <Link href='/#about'>About Me</Link>
            <Link href='/#skills'>Skills</Link>
            <Link href='/#work'>Work</Link>
            <Link href='/#contact'>Contact</Link>
            {/* <Link href='/blog'>Blog</Link> */}

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
              <MenuItem>About Me</MenuItem>
              <MenuItem>Skills</MenuItem>
              <MenuItem>Work</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Container>
  )
}

export default Navbar
