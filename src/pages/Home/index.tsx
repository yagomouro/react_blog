import Header from '../../components/Header';
import LastPost from '../../components/LastPost';
import Footer from '../../components/Footer';

import posts from '../../services/data';

import {
  FirstFeaturedPost,
  FeaturedPostsWrapper,
  LastPostsWrapper,
  MainWrapper,
  OtherFeaturedPostsWrapper,
  LastPosts,
} from './styles';
// import { v4 } from 'uuid';

const Home = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <FeaturedPostsWrapper>
          <FirstFeaturedPost>
            <LastPost {...posts[4]} className='isFeatured'></LastPost>
          </FirstFeaturedPost>
          <OtherFeaturedPostsWrapper>
            <LastPost {...posts[3]}></LastPost>
            <LastPost {...posts[2]}></LastPost>
            <LastPost {...posts[0]}></LastPost>
          </OtherFeaturedPostsWrapper>
        </FeaturedPostsWrapper>
        <LastPostsWrapper>
          <h1 className='lastPostTitle'>Últimos Posts</h1>
          <LastPosts>
            <LastPost {...posts[1]} className='isOtherPost'></LastPost>
            <LastPost {...posts[5]} className='isOtherPost'></LastPost>
            <LastPost {...posts[2]} className='isOtherPost'></LastPost>
            <LastPost {...posts[4]} className='isOtherPost'></LastPost>
            <LastPost {...posts[0]} className='isOtherPost'></LastPost>
            <LastPost {...posts[3]} className='isOtherPost'></LastPost>
          </LastPosts>
        </LastPostsWrapper>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Home;
