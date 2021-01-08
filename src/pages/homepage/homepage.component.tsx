import React from 'react';

import StoriesHeadline from '../../components/stories-headline/stories-headline.component'
import SuggestionsForYou from '../../components/suggestions-for-you/suggestions-for-you.component'

import './homepage.styles.scss';

interface Props {}

const HomePage: React.FC<Props> = () => (
  <div className="homepage">
    <div className="image-feed-container">
      <StoriesHeadline />
    </div>
    <div className="suggestions-for-you-container">
      <SuggestionsForYou />
    </div>
  </div>
);

export default HomePage;