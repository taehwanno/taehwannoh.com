import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { ParsedUrlQuery } from 'querystring';

import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import { Post } from '../../lib/api';

const url = (slug: string) => `https://taehwannoh.com/posts/${slug}`;

interface PostPageProps {
  post: Post;
  morePosts: Post[];
  preview: boolean;
}

export default function PostPage({ post, morePosts, preview }: PostPageProps) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${post.title} | taehwannoh.com`}</title>
                <meta property="og:url" content={url(post.slug)} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={post.title} />
                <meta property="og:image" content={post.coverImage.url} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:locale" content="ko_KR" />
                <meta property="article:author" content={post.author.name} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@taehwannoh" />
                <meta name="twitter:creator" content="@taehwannoh" />
                <meta name="twitter:url" content={url(post.slug)} />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={post.coverImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                url={url(post.slug)}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

interface PostPageParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PostPageProps, PostPageParams> =
  async ({ params, preview = false }) => {
    const data = await getPostAndMorePosts(params!.slug, preview);

    return {
      props: {
        preview,
        post: data?.post ?? null,
        morePosts: data?.morePosts ?? null,
      },
    };
  };

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
};
