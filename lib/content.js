// This is for blog post stuff

import showdown from 'showdown'
import grayMatter from 'gray-matter'
import slugify from 'slugify'

export async function listPosts() {
  const posts = await fetch(
    'https://api.github.com/repos/manethye/chakra-ui-portfolio/issues?label=article',
    {
      headers: {
        Authorization: process.env.GITHUB_ACCESS_TOKEN,
      },
    }
  ).then(r => r.json())

  if (!posts) throw new Erorr('Failed to fetch posts')
  const parsedPosts = posts.map(post => {
    const parsedIssue = parseIssue(post)

    return parsedIssue
  })

  return parsedPosts
}

export async function getBlogpost(slug) {
  let blogPosts = await listPosts()
  if (!blogPosts.length) throw new Error('No blogposts')

  const blogpost = blogPosts.find(post => post.slug === slug)
  if (!blogpost) throw new Error('Blogpost not found for slug: ' + slug)

  const content = new showdown.Converter().makeHtml(blogpost.content)
  return { ...blogpost, content }
}

// Parse and add the slug field to the blog
function parseIssue(issue) {
  const src = issue.body
  const { content, data } = grayMatter(src)
  let title = data.title ?? issue.title
  let slug
  if (data.slug) {
    slug = data.slug
  } else {
    slug = slugify(title)
  }

  // let description = data.description ?? content.trim().split('\n')[0]

  // let tags = []
  // if (data.tags) tags = Array.isArray(data.tags) ? data.tags : [data.tags]
  // else if (data.categories) {
  //   tags = Array.isArray(data.categories) ? data.categories : [data.categories]
  //   console.log(`${slug} is still using the categories field`)
  // } else {
  //   console.log(`WARN: ${slug} has no tags`)
  // }
  // tags = tags.map(tag => tag.toLowerCase())
  // console.log(slug, tags)

  return {
    id: issue.id,
    content,
    data,
    title,
    slug: slug.toLowerCase(),
    user: issue.user,
    date: new Date(data.date ?? issue.created_at),
    // ghMetadata: {
    //   issueUrl: issue.html_url,
    //   commentsUrl: issue.comments_url,
    //   title: issue.title,
    //   created_at: issue.created_at,
    //   updated_at: issue.updated_at,
    //   reactions: issue.reactions,
    // },
  }
}
