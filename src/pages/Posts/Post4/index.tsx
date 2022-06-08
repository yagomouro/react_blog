import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

import postImage from '../../../assets/images/post_4.png';

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

const Post4 = ({ authorName }: IPost) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <PostInfoContainer>
          <h1>IOT: A Internet das Coisas</h1>
          <span>Talissa Talamoni • 31/05/2022 - 14:09</span>
          <ImageWrapper>
            <img src={postImage} alt='Imagem do Post' />
          </ImageWrapper>
        </PostInfoContainer>
        <PostContent>
          <TextWrapper>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
              de bebadis, arcu quam euismod magna.Nec orci ornare consequat.
              Praesent lacinia ultrices consectetur. Sed non ipsum
              felis.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non
              tellus tristique interdum.Casamentiss faiz malandris se pirulitá.
            </p>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
              de bebadis, arcu quam euismod magna.Nec orci ornare consequat.
              Praesent lacinia ultrices consectetur. Sed non ipsum
              felis.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non
              tellus tristique interdum.Casamentiss faiz malandris se pirulitá.
            </p>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
              de bebadis, arcu quam euismod magna.Nec orci ornare consequat.
              Praesent lacinia ultrices consectetur. Sed non ipsum
              felis.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non
              tellus tristique interdum.Casamentiss faiz malandris se pirulitá.
            </p>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
              de bebadis, arcu quam euismod magna.Nec orci ornare consequat.
              Praesent lacinia ultrices consectetur. Sed non ipsum
              felis.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non
              tellus{' '}
            </p>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
              de bebadis, arcu quam euismod magna.Nec orci ornare consequat.
              Praesent lacinia ultrices consectetur. Sed non ipsum
              felis.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non
              tellus tristique interdum.Casamentiss faiz malandris se pirulitá.
            </p>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
              de bebadis, arcu quam euismod magna.Nec orci ornare consequat.
              Praesent lacinia ultrices consectetur. Sed non ipsum
              felis.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non
              tellus{' '}
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

export default Post4;
