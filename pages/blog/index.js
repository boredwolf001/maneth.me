import { Box, Container, Text } from '@chakra-ui/react'
import Link from 'next/link'

function PostItem({ post }) {
  return (
    <Box p='5' rounded='md'>
      <Text className='blog-link' fontWeight='bold' fontSize='3xl'>
        <Link href={`/blog/${post.id}`}>{post.title}</Link>
      </Text>
      <Text mb='3' fontSize='sm' opacity='.6'>
        By {post.user.login}
      </Text>
    </Box>
  )
}

function BlogPage({ posts }) {
  return (
    <Container maxW='container.xl'>
      {posts.map(post => (
        <PostItem post={post} key={post.number} />
      ))}
    </Container>
  )
}

export const getStaticProps = async () => {
  const posts = await fetch(
    'https://api.github.com/repos/manethye/chakra-ui-portfolio/issues'
  ).then(r => r.json())

  return {
    props: { posts },
  }
}

export default BlogPage
