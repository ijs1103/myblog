import matter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'
import { NextPage } from 'next'
import Link from 'next/link'
import Card from '@components/Card'
import CategoryTitle from '@components/CategoryTitle'

interface Post {
  title: string
  date: string
  category: string
  slug: string
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <CategoryTitle category="react" />
      <div className="mx-auto w-full max-w-xl py-10 lg:max-w-[1024px]">
        <div className="flex flex-col flex-wrap items-center gap-8 lg:flex-row lg:justify-center">
          {posts.map((post) => (
            <Card
              key={post.slug}
              category={post.category}
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

export async function getStaticProps() {
  const getFileList = (dirName: string) => {
    let files: string[] = [];
    const items = readdirSync(dirName, { withFileTypes: true });
    for (const item of items) {
        if (item.isDirectory()) {
            files = [...files, ...getFileList(`${dirName}/${item.name}`)];
        } else {
            files.push(`${dirName}/${item.name}`);
        }
    }
    return files;
  };
  const blogPosts = getFileList('./md').map(file => {
    const content = readFileSync(`${file}`, 'utf-8')
    const len = file.split('/').length - 1
    const [slug, _] = file.split('/')[len].split('.')
    return { ...matter(content).data, slug }
  })
  return {
    props: {
      posts: blogPosts.reverse(),
    },
  }
}
export default Home
