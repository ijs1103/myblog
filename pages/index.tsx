import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";
import { NextPage } from "next";
import Link from "next/link";
import Card from '@components/Card';

interface Post {
  title: string;
  date: string;
  category: string;
  slug: string;
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap items-center flex-col lg:flex-row lg:justify-center gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};



export default Home;