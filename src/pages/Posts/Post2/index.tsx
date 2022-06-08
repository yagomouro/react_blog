import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

import postImage from '../../../assets/images/post_2.png';

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

const Post2 = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <PostInfoContainer>
          <h1>O algoritmo das Redes Sociais</h1>
          <span>Lucas Gradilone • 31/05/2022 - 14:09</span>
          <ImageWrapper>
            <img src={postImage} alt='Imagem do Post' />
          </ImageWrapper>
        </PostInfoContainer>
        <PostContent>
          <TextWrapper>
            <p>
              Para que pudesse visualizar como os algoritmos da internet
              funcionam e como eles contribuem para o vício do uso das redes
              sociais, preparamos um breve vídeo sobre o tema, confere abaixo!
            </p>
            <iframe
              width='800'
              height='400'
              src='https://www.youtube.com/embed/PSysVHsplpg'
            ></iframe>
          </TextWrapper>
          <LastPostsWrapper>
            <span className='lastPostTitle'>Últimos posts</span>
            <LastPost {...posts[0]} className='isPostPage'></LastPost>
            <LastPost {...posts[2]} className='isPostPage'></LastPost>
            <LastPost {...posts[3]} className='isPostPage'></LastPost>
          </LastPostsWrapper>
        </PostContent>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Post2;
