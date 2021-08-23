import { Story, Meta } from '@storybook/react';
import PostCard, { PostCardProps } from '.';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    slug: 'default-slug',
    title: 'defaul title',
    cover: 'https://miro.medium.com/max/1200/1*su7pavg6pKXOpYEGRLxLiw.jpeg',
  },
} as Meta;

export const TypeScriptCover: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);

export const JavaScriptCover: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);

JavaScriptCover.args = {
  cover: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2018/03/01133925/javascript.png',
};
