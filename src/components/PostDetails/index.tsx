import React from 'react';

import Date from '../Date';
import Link from 'next/link';

import { Container } from './styled';

type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} |{' '}
      <Link
        as={`/post/page/1/${category.toLowerCase()}`}
        href="/post/page/[...param]"
      >
        <a>{category}</a>
      </Link>
    </Container>
  );
};

export default PostDetails;
