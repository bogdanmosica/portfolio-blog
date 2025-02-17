import type React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from './ui/card';

type Tag = {
  id: string;
  name: string;
};

type SentenceCardProps = {
  title: string;
  sentences: string[];
  tags: Tag[];
};

const SentenceCard: React.FC<SentenceCardProps> = ({
  title,
  sentences,
  tags,
}) => {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className='list-disc list-inside space-y-2'>
          {sentences.map((sentence, index) => (
            <li key={index} className='text-sm'>
              {sentence}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={tag.id}
              className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'
            >
              {tag.name}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default SentenceCard;
