import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import markdownStyles from './markdown-styles.module.css';

interface PostBodyProps {
  content: {
    json: Document;
  };
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(content.json)}
      </div>
    </div>
  );
}
