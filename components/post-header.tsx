import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

import Avatar from './avatar';
import DateComponent from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';

interface PostHeaderProps {
  title: string;
  coverImage: {
    url: string;
  };
  date: string;
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  slug: string;
  url: string;
}

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  slug,
  url,
}: PostHeaderProps) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="flex flex-row items-center mb-6 text-lg gap-x-3">
          <DateComponent dateString={date} />
          <TwitterShareButton url={url}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
    </>
  );
}
