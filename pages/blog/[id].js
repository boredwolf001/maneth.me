import { Spacer, Box, Button, Container, Divider, Text } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import showdown from 'showdown'
import styles from '../../styles/BlogPage.module.css'
import { DiscussionEmbed } from 'disqus-react'

const converter = new showdown.Converter()

function PostPage({ post }) {
  const disqusShortname = 'portfolio-9vskmfotbh'
  const disqusConfig = {
    url: `http://localhost:3000/${post.id}`,
    identifier: post.id,
    title: post.title,
  }

  return (
    <Container maxW='container.lg' className={styles.container}>
      <Text mb='2' fontSize='4xl' fontWeight='bold'>
        {post.title}
      </Text>
      <Text opacity='.7'>By {post.user.login}</Text>
      <Divider mb='10' />

      {/* Div */}
      <Box
        className={styles.htmlWrapper}
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(post.body),
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
  const data = await fetch(
    'https://api.github.com/repos/manethye/chakra-ui-portfolio/issues?label=article'
  ).then(r => r.json())

  const paths = data.map(post => ({
    params: { id: post.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const posts = await fetch(
    `https://api.github.com/repos/manethye/chakra-ui-portfolio/issues`
  ).then(r => r.json())

  const post = posts.find(post => post.id == params.id)

  return {
    props: {
      post: post,
    },
  }
}

export default PostPage
