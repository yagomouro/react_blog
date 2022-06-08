import { Link } from 'react-router-dom';
import postImage from '../../assets/images/redes_sociais.jpg';

import { Container, ImgWrapper, InfoWrapper } from './styles';

interface LastPostPros {
  className?: string;
}

const LastPost = ({ className }: LastPostPros) => {
  return (
    <Container className={className && className}>
      <ImgWrapper>
        <Link to='/posts/1'>
          <img src={postImage} alt='Foto' />
        </Link>
      </ImgWrapper>
      <InfoWrapper>
        <p>Yago Mouro</p>
        <Link to='/posts/1'>
          <h1>Internet das coisas</h1>
        </Link>
      </InfoWrapper>
    </Container>
  );
};

export default LastPost;
