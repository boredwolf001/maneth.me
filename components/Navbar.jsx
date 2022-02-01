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
            <Link href='/#about'>
              <Text opacity='.9' cursor='pointer' _hover={{ opacity: 1 }}>
                About Me
              </Text>
            </Link>
            <Link href='/#skills'>
              <Text opacity='.9' cursor='pointer' _hover={{ opacity: 1 }}>
                Skills
              </Text>
            </Link>
            <Link href='/#work'>
              <Text opacity='.9' cursor='pointer' _hover={{ opacity: 1 }}>
                Work
              </Text>
            </Link>
            <Link href='/#contact'>
              <Text opacity='.9' cursor='pointer' _hover={{ opacity: 1 }}>
                Contact
              </Text>
            </Link>
            <Link href='/blog'>
              <Text opacity='.9' cursor='pointer' _hover={{ opacity: 1 }}>
                Blog
              </Text>
            </Link>

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
                <Link href='/#about'>About Me</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/#skills'>Skills</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/#work'>Work</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/#contact'>Contact</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/blog'>Contact</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Container>
  )
}

export default Navbar
