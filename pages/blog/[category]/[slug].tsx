
import { readdirSync } from 'fs'
import matter from 'gray-matter'
import { GetStaticProps, NextPage } from 'next'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse/lib'
import { unified } from 'unified'

const Post: NextPage<{ post: string; data: any }> = ({ post, data }) => {
  return (
    <>
      <h1 className="mt-5 mb-10 text-xl font-semibold">디테일</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post }}
      />
    </>
  )
}

export function getStaticPaths() {
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
	const paths = getFileList('./md').map(file => {
    const splitted = file.split('/')
    const len = splitted.length - 1
    const category = splitted[len-1]
    const [slug, _] = file.split('/')[len].split('.')
    return { params: { slug, category } }
  })
 
  return {
    paths,
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { content, data } = matter.read(`./md/${ctx.params?.category}/${ctx.params?.slug}.md`)
  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content)
  return {
    props: {
      data,
      post: value,
    },
  }
}

export default Post
