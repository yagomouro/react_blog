import LastPost from '../../components/LastPost';

export function addOtherFeaturedPosts(num: number, className?: string) {
  let elements = [];

  for (let i = 0; i < num; i++) {
    elements.push(
      <LastPost key={i} className={className ? className : ''}></LastPost>
    );
  }
  return elements;
}
