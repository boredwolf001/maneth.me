import {
  Box,
  Button,
  Container,
  Divider,
  Text,
  Heading,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import styles from '../../styles/BlogPage.module.css'
import { DiscussionEmbed } from 'disqus-react'
import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../../lib/apollo'

function PostPage({ post }) {
  const disqusShortname = 'portfolio-9vskmfotbh'
  const disqusConfig = {
    url: `http://maneth.me/${post.id}`,
    identifier: post.id,
    title: post.title,
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Container maxW='container.lg' className={styles.container}>
        <Heading as='h1' fontSize='4xl' fontWeight='bold'>
          {post.title}
        </Heading>
        <Text opacity='.7' mb='2'>
          By {post.author.node.name}
        </Text>

        <Divider mb='8' />

        <Box
          className={styles.htmlWrapper}
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}></Box>

        <Link href='/articles' passHref>
          <Button
            leftIcon={<ChevronLeftIcon fontSize='20' />}
            my='10'
            variant='outline'
            colorScheme='teal'>
            Go Back
          </Button>
        </Link>

        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Container>
    </>
  )
}

export const getStaticPaths = async () => {
  const query = gql`
    {
      posts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `
  const {
    data: {
      posts: { edges },
    },
  } = await client.query({
    query,
  })

  const paths = edges.map(post => ({
    params: { slug: post.node.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const query = gql`
    {
      post(id: "${params.slug}", idType: SLUG) {
        id
        author {
          node {
            name
          }
        }
        title
        content
        date
      }
    }
  `

  const {
    data: { post },
  } = await client.query({
    query,
  })

  return {
    props: {
      post,
    },
  }
}

export default PostPage
