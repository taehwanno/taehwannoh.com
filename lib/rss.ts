import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import fs from 'fs';
import { Feed } from 'feed';

import { Post } from './api';
import { HOME_OG_IMAGE_URL } from './constants';

export const generateRssFeed = async (posts: Post[]) => {
  const siteUrl = process.env.SITE_URL as string;

  const date = new Date();
  const author = {
    name: 'Taehwan Noh',
    email: 'taehwanno.dev@gmail.com',
    link: 'https://twitter.com/taehwannoh',
  };
  const feed = new Feed({
    title: "Taehwan Noh's blog",
    description: '제품을 만들며 일상에서 느낀 점을 이야기합니다.',
    id: siteUrl,
    link: siteUrl,
    image: HOME_OG_IMAGE_URL,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Taehwan Noh`,
    updated: date,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
    author,
  });
  posts.forEach((post) => {
    const url = `${siteUrl}/posts/${post.slug}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      content: documentToPlainTextString(post.content.json),
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });

  fs.writeFileSync('./public/feed.xml', feed.rss2());
};
