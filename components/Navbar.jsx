import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ModeToggle from './ModeToggle'

const LinkItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text px='1' py='1' display='block' {...rest}>
        {children}
      </Text>
    </Link>
  )
}

function Nabvar() {
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
        top='0'
      >
        <Box>
          <Text fontWeight='bold' fontSize='3xl'>
            Portfolio
          </Text>
        </Box>

        {/* Links */}
        <Box
          display={['none', 'none', 'block', 'block']}
          flexBasis={{ base: '100%', md: 'auto' }}
        >
          <Stack
            spacing={8}
            align='center'
            justify={'center'}
            direction={'row'}
            pt={[4, 4, 0, 0]}
          >
            <LinkItem to='#'>About Me</LinkItem>
            <LinkItem to='#'>Skills</LinkItem>
            <LinkItem to='#'>Work</LinkItem>
            <LinkItem to='#'>Contact</LinkItem>

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
              <MenuItem>Skils</MenuItem>
              <MenuItem>Work</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Container>
  )
}

export default Nabvar
