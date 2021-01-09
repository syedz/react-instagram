import React from 'react';
import { connect } from 'react-redux';

import ImageFeedPost from '../image-feed-post/image-feed-post.component';

import { ImageFeedContainer } from './image-feed.styles';

import Posts from '../../data/posts';

interface Props {}

const ImageFeed: React.FC<Props> = ({}) => (
  <ImageFeedContainer>
    {Posts.map((post) => (
      <ImageFeedPost key={post.id} post={post} />
    ))}
  </ImageFeedContainer>
);

export default connect()(ImageFeed);