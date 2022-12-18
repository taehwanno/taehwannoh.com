import Link from 'next/link';
import DateComponent from './date';
import CoverImage from './cover-image';

interface PostPreviewProps {
  title: string;
  coverImage: {
    url: string;
  };
  date: string;
  excerpt: string;
  slug: string;
}

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: PostPreviewProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
