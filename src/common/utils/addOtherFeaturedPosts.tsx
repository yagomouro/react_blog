import { v4 } from 'uuid';
import LastPost from '../../components/LastPost';

export function addOtherFeaturedPosts(
  num: number,
  className?: string,
  authorName?: string,
  postTitle?: string,
  postImage?: string
) {
  let elements = [];

  for (let i = 0; i < num; i++) {
    elements.push(
      <LastPost
        authorName={authorName}
        key={v4()}
        className={className ? className : ''}
        postTitle={postTitle}
        postImage={postImage}
      ></LastPost>
    );
  }
  return elements;
}
