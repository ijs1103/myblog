import matter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'
import { GetStaticProps, NextPage } from 'next'
import Card from '@components/Card'
import CategoryTitle from '@components/CategoryTitle'
import Link from 'next/link'

interface Post {
  title: string
  date: string
  slug: string
  tag: string
}

interface Props {
	posts: Post[]
	category: string
}

const Home: NextPage<Props> = ({ posts, category }: Props) => {
  return (
    <>
      <CategoryTitle category={category} />
      <div className="mx-auto w-full max-w-xl py-10 lg:max-w-[1024px]">
        <div className="flex flex-col flex-wrap items-center gap-8 lg:flex-row lg:justify-center">
          {posts.map((post) => (
            <Card
              key={post.slug}
              tag={post.tag}
              category={category}
              title={post.title}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </>
  )
}
export function getStaticPaths() {
  const categories = readdirSync('./md').map((category) => { 
    return { params: { category } }
  })
  return {
    paths: categories,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async (ctx) => {
	const category = ctx.params?.category
  const blogPosts = readdirSync(`./md/${category}`).map((file) => {
    const content = readFileSync(`./md/${category}/${file}`, 'utf-8')
    const [slug, _] = file.split('.')
    return { ...matter(content).data, slug }
  })
  return {
    props: {
      posts: blogPosts.reverse(),
      category
    },
  }
}

export default Home
