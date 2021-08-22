import React from 'react';

import { Container, NextLink, PreviousLink } from './styled';
import { PaginationData } from '../../domain/posts/pagination';

import Link from 'next/link';

const Pagination = ({
  nextPage,
  numberOfPosts,
  postsPerPage,
  previousPage,
  category,
}: PaginationData) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage > 0;

  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href="/post/page/[...param]">
            <a>Previous</a>
          </Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/post/page/[...param]">
            <a>Next</a>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};

export default Pagination;
