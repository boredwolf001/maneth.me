import { IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

function ModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      onClick={toggleColorMode}
      variant='outline'
      icon={
        colorMode === 'dark' ? (
          <SunIcon fontSize='xl' />
        ) : (
          <MoonIcon fontSize='xl' />
        )
      }
    />
  )
}

export default ModeToggle
