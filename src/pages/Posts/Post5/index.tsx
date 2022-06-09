import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

import postImage from '../../../assets/images/post_5.png';

import { IPost } from '../../../types/IPost';

import {
  ImageWrapper,
  LastPostsWrapper,
  MainWrapper,
  PostContent,
  PostInfoContainer,
  TextWrapper,
} from '../styles';
import LastPost from '../../../components/LastPost';
import posts from '../../../services/data';

const Post5 = ({ authorName }: IPost) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <PostInfoContainer>
          <h1>A história da internet</h1>
          <span>Grupo Sete • 31/05/2022 - 14:09</span>
          <ImageWrapper>
            <img src={postImage} alt='Imagem do Post' />
          </ImageWrapper>
        </PostInfoContainer>
        <PostContent>
          <TextWrapper>
            <p>
              No podcast de hoje do Podsete, vamos falar um pouquinho sobre as
              origens da internet, alguns recursos obsoletos e novidades
              tecnológicas muito bacanas. Confira abaixo:
            </p>
          </TextWrapper>
          <LastPostsWrapper>
            <span className='lastPostTitle'>Últimos posts</span>
            <LastPost {...posts[0]} className='isPostPage'></LastPost>
            <LastPost {...posts[1]} className='isPostPage'></LastPost>
            <LastPost {...posts[2]} className='isPostPage'></LastPost>
          </LastPostsWrapper>
        </PostContent>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Post5;
