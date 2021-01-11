import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from '../../redux/root-reducer';

import { ImageCommentBoxContainer } from './image-comment-box.styles';

interface Props {

}

const ImageLikes: React.FC<Props> = () => (
  <ImageCommentBoxContainer>
    <input className="" type="text" placeholder="Add a comment..." />
    <button className="btn">Post</button>
  </ImageCommentBoxContainer>
)

const mapStateToProps = createStructuredSelector<RootState, {}>({
  
});

export default connect(mapStateToProps)(ImageLikes);