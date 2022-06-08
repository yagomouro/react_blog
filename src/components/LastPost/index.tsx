import { Link } from 'react-router-dom';
import { IPost } from '../../types/IPost';

import { Container, ImgWrapper, InfoWrapper } from './styles';

interface LastPostPros extends IPost {
  className?: string;
}

const LastPost = ({
  className,
  authorName,
  postTitle,
  postImage,
  redirectTo,
}: LastPostPros) => {
  return (
    <Container className={className && className}>
      <ImgWrapper>
        {redirectTo && (
          <Link to={redirectTo}>
            <img src={postImage} alt={postTitle} />
          </Link>
        )}
      </ImgWrapper>
      <InfoWrapper>
        <p>{authorName}</p>
        {redirectTo && (
          <Link to={redirectTo}>
            <h1>{postTitle}</h1>
          </Link>
        )}
      </InfoWrapper>
    </Container>
  );
};

export default LastPost;
