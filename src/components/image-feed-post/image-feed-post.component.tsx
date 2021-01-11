import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { faHeart, faComment, faBookmark, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RootState } from '../../redux/root-reducer';

import { CurrentUser, selectCurrentUser } from '../../redux/user/user.selectors';

import ImageCommentBox from '../image-comment-box/image-comment-box.component';
import ImageLikes from '../image-likes/image-likes.component';
import PhotoCircleDetails from '../photo-circle-details/photo-circle-details.component';

import Likes from '../../data/likes';

import { 
  HeaderContainer,
  ImagePostContainer,
  Image,
  InteractionsContainer,
  LikeCommentShareList,
} from './image-feed-post.styles';

interface Props {
  currentUser: CurrentUser,
  post: any,
}

const ImageFeedPost: React.FC<Props> = ({ post }) => (
  <ImagePostContainer>
    <HeaderContainer>
      <PhotoCircleDetails />  
    </HeaderContainer>
    <Image 
      src={post.url}
    />
    <InteractionsContainer>
      <LikeCommentShareList>
        <FontAwesomeIcon className="icon" icon={faHeart} />
        <FontAwesomeIcon className="icon" icon={faComment} />
        <FontAwesomeIcon className="icon" icon={faShareSquare} />
      </LikeCommentShareList>
      
      <LikeCommentShareList>
        <FontAwesomeIcon className="icon" icon={faBookmark} />
      </LikeCommentShareList>
    </InteractionsContainer>
    <ImageLikes likes={Likes} />
    <ImageCommentBox />
  </ImagePostContainer>
);

const mapStateToProps = createStructuredSelector<RootState, {
  currentUser: CurrentUser
}>({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ImageFeedPost);