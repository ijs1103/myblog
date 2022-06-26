import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";
import { NextPage } from "next";
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  category: string;
  slug: string;
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <h1 className="font-semibold text-center text-xl mt-5 mb-10">
        홈
      </h1>
      <Link href={`/posts`}><a>포스트 보기</a></Link>
    </>
  );
};



export default Home;