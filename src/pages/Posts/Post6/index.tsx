import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

import postImage from '../../../assets/images/post_6.png';

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

const Post6 = ({ authorName }: IPost) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <PostInfoContainer>
          <h1>PODCAST - A sociedade do cansaço</h1>
          <span>Grupo Sete • 31/05/2022 - 14:09</span>
          <ImageWrapper>
            <img src={postImage} alt='Imagem do Post' />
          </ImageWrapper>
        </PostInfoContainer>
        <PostContent>
          <TextWrapper>
            <p>
              No podcast de hoje do Podsete, vamos falar um pouquinho sobre a
              obra Sociedade do Cansaço, de Byung-Chul Han, e conversaremos a
              respeito de comos as redes sociais impactam em nossas vidas.
              Confira abaixo:
            </p>
            <iframe
              className='podcast'
              title='Podcast PODSETE'
              src='https://open.spotify.com/embed/episode/3KoDYL60JeSsgln91TJEjZ?utm_source=generator&theme=0&t=0'
              width='100%'
              height='232'
              frameBorder='0'
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            ></iframe>
          </TextWrapper>
          <LastPostsWrapper>
            <span className='lastPostTitle'>Últimos posts</span>
            <LastPost {...posts[4]} className='isPostPage'></LastPost>
            <LastPost {...posts[3]} className='isPostPage'></LastPost>
            <LastPost {...posts[2]} className='isPostPage'></LastPost>
          </LastPostsWrapper>
        </PostContent>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Post6;
