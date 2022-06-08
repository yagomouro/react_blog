import Footer from '../../components/Footer';
import Header from '../../components/Header';

import postImage from '../../assets/images/redes_sociais.jpg';
import { addOtherFeaturedPosts } from '../../common/utils/addOtherFeaturedPosts';

import {
  ImageWrapper,
  LastPostsWrapper,
  MainWrapper,
  PostContent,
  PostInfoContainer,
  TextWrapper,
} from './styles';

const Post = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <PostInfoContainer>
          <h1>Internet das coisas</h1>
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
            {addOtherFeaturedPosts(3, 'isPostPage')}
          </LastPostsWrapper>
        </PostContent>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Post;
