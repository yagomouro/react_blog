import { addOtherFeaturedPosts } from '../../common/utils/addOtherFeaturedPosts';

import Header from '../../components/Header';
import LastPost from '../../components/LastPost';
import Footer from '../../components/Footer';

import {
  FirstFeaturedPost,
  FeaturedPostsWrapper,
  LastPostsWrapper,
  MainWrapper,
  OtherFeaturedPostsWrapper,
  LastPosts,
} from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <FeaturedPostsWrapper>
          <FirstFeaturedPost>
            <LastPost className='isFeatured'></LastPost>
          </FirstFeaturedPost>
          <OtherFeaturedPostsWrapper>
            {addOtherFeaturedPosts(3)}
          </OtherFeaturedPostsWrapper>
        </FeaturedPostsWrapper>
        <LastPostsWrapper>
          <h1 className='lastPostTitle'>Últimos Posts</h1>
          <LastPosts>{addOtherFeaturedPosts(6, 'isOtherPost')}</LastPosts>
        </LastPostsWrapper>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Home;
