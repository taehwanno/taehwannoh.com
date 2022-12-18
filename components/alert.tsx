import cn from 'classnames';

import Container from './container';

interface AlertProps {
  preview: boolean;
}

export default function Alert({ preview }: AlertProps) {
  return preview ? (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          This is page is a preview.{' '}
          <a
            href="/api/exit-preview"
            className="underline hover:text-cyan duration-200 transition-colors"
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </div>
      </Container>
    </div>
  ) : null;
}
