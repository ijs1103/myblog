import matter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'
import { GetStaticProps, NextPage } from 'next'
import Card from '@components/Card'
import CategoryTitle from '@components/CategoryTitle'
import Link from 'next/link'

interface Post {
  title: string
  date: string
  category: string
  slug: string
}

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

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const files = getFileList('./md').map(file => {
  //   const content = readFileSync(`./${file}`, 'utf-8')
  //   const [slug, _] = file.split('.')
  //   const title = slug.slice(slug.indexOf('/', 3))
  //   console.log(content)
  // })
  const blogPosts = readdirSync(`./md/`).map((file) => {
    const content = readFileSync(`./md/${file}`, 'utf-8')
    const [slug, _] = file.split('.')
    return { ...matter(content).data, slug }
  })
  return {
    props: {
      posts: '',
    },
  }
}

export default Home
