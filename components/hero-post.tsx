import Link from 'next/link';
import DateComponent from './date';
import CoverImage from './cover-image';

interface HeroPostProps {
  title: string;
  coverImage: {
    url: string;
  };
  date: string;
  excerpt: string;
  slug: string;
}

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: HeroPostProps) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              className="hover:underline"
              href="/posts/[slug]"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
