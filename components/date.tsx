import { format } from 'date-fns';

interface DateComponentProps {
  dateString: string;
}

export default function DateComponent({ dateString }: DateComponentProps) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  );
}
