import matter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'
import { NextPage } from 'next'
import Link from 'next/link'

interface Post {
  title: string
  date: string
  category: string
  slug: string
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <h1 className="mt-5 mb-10 text-center text-xl font-semibold">블로그</h1>
      {posts.map((post, index) => (
        <div key={index} className="mb-5">
          <Link href={`/posts/${post.slug}`}>
            <a>
              <span className="text-lg text-blue-600">{post.title}</span>
              <div>
                <span>
                  {post.date} / {post.category}
                </span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const blogPosts = readdirSync('./md').map((file) => {
    const content = readFileSync(`./md/${file}`, 'utf-8')
    const [slug, _] = file.split('.')
    return { ...matter(content).data, slug }
  })
  return {
    props: {
      posts: blogPosts.reverse(),
    },
  }
}

export default Home
