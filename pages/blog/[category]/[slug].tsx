
import { readdirSync } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import matter from 'gray-matter'
import { GetStaticProps, NextPage } from 'next'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse/lib'
import { unified } from 'unified'
import SyntaxHighlighter from 'react-syntax-highlighter'


interface Props {
  post: string;
  data: any;
  mdxSource: MDXRemoteSerializeResult;
}

const Post: NextPage<Props> = ({ post, data, mdxSource }) => {
  return (
    <>
      <h1 className="mt-5 mb-10 text-xl font-semibold">디테일</h1>
      <MDXRemote {...mdxSource} components={{SyntaxHighlighter}} />
      {/* <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post }}
      /> */}
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
	const paths = getFileList('./mdx').map(file => {
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
  const { content, data } = matter.read(`./mdx/${ctx.params?.category}/${ctx.params?.slug}.mdx`)
  const mdxSource = await serialize(content)

  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content)
  return {
    props: {
      data,
      post: value,
      mdxSource
    },
  }
}

export default Post
