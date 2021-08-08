import React from 'react';

import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styled';
import { SITE_URL } from '../config/app.config';

type CommentsProps = {
  slug: string;
  title: string;
};

const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="blogudemy"
        config={{
          url: `${SITE_URL}:3000/post/${slug}`,
          identifier: slug,
          title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};

export default Comments;
