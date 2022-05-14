import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container } from '@chakra-ui/react'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container w='full' maxW='container.xl'>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
