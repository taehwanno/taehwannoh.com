import { GetStaticProps } from 'next';
import { getAllPostsForHome, Post } from '../lib/api';
import { generateRssFeed } from '../lib/rss';

export default function FeedPage() {
  return null;
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  await generateRssFeed(allPosts);
  return {
    props: {},
  };
};
