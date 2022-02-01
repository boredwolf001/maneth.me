import { Box, Button, Container, Divider, Text } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import showdown from 'showdown'
import styles from '../../styles/BlogPage.module.css'
import { DiscussionEmbed } from 'disqus-react'
import { getBlogpost, listPosts } from '../../lib/content'

const converter = new showdown.Converter()

function PostPage({ post }) {
  const disqusShortname = 'portfolio-9vskmfotbh'
  const disqusConfig = {
    url: `http://maneth.me/${post.id}`,
    identifier: post.id,
    title: post.title,
  }

  return (
    <Container maxW='container.lg' className={styles.container}>
      <Text fontSize='4xl' fontWeight='bold'>
        {post.title}
      </Text>
      <Text opacity='.7' mb='2'>
        By {post.user.login}
      </Text>
      <Divider mb='8' />

      {/* Div */}
      <Box
        className={styles.htmlWrapper}
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}></Box>

      <Link href='/blog' passHref>
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
  )
}

export const getStaticPaths = async () => {
  const posts = await listPosts()

  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getBlogpost(params.slug)

  return {
    props: {
      post,
    },
  }
}

export default PostPage
