import { gql } from '@apollo/client'
import { Box, Container, Grid, GridItem, Input, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import client from '../../lib/apollo'

function PostItem({ post }) {
  return (
    <GridItem w='100%'>
      <Link href={`/articles/${post.slug}`} passHref>
        <Box
          className='blog-card'
          bg='blackAlpha.300'
          boxShadow='lg'
          mb='8'
          cursor='pointer'
          border='2px'
          p='10'
          borderColor='teal.500'
          rounded='md'>
          <Text fontWeight='bold' fontSize='2xl'>
            {post.title}
          </Text>
          <Text mb='3' fontSize='sm' opacity='.6'>
            {new Date(post.date).toDateString()}
          </Text>

          <Text maxW='600' noOfLines={[1, 2, 3, 3]}>
            {post.excerpt.replace(/<[^>]*>?/gm, '') ||
              post.content.replace(/<[^>]*>?/gm, '')}
          </Text>
        </Box>
      </Link>
    </GridItem>
  )
}

function BlogPage({ posts }) {
  const [term, setTerm] = useState('')
  const [newPosts, setNewPosts] = useState([...posts])

  useEffect(() => {
    setNewPosts(
      posts.filter(
        post =>
          post?.node?.title.toLowerCase().includes(term.toLocaleLowerCase()) ||
          post?.node?.content.toLowerCase().includes(term.toLocaleLowerCase())
      )
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term])

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Container maxW='container.xl'>
        <Input
          w='600px'
          placeholder='Search term..'
          onInput={e => setTerm(e.target.value)}
        />

        <Grid
          mt='12'
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={10}>
          {newPosts.map(post => (
            <PostItem post={post.node} key={parseInt(post.id)} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const query = gql`
    {
      posts {
        edges {
          node {
            author {
              node {
                name
              }
            }
            date
            title
            content
            slug
            excerpt
          }
        }
      }
    }
  `
  const { data } = await client.query({
    query,
  })

  return {
    props: { posts: data.posts.edges },
  }
}

export default BlogPage
