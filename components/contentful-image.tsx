import Image, { ImageLoaderProps, ImageProps } from 'next/legacy/image';

const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props: ImageProps) => {
  return <Image loader={contentfulLoader} {...props} />;
};

export default ContentfulImage;
