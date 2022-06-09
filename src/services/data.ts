import postImg_1 from '../assets/images/post_1.png';
import postImg_2 from '../assets/images/post_2.png';
import postImg_3 from '../assets/images/post_3.png';
import postImg_4 from '../assets/images/post_4.png';
import postImg_5 from '../assets/images/post_5.png';

const posts = [
  {
    authorName: 'Grupo Sete',
    postTitle: '5 efeitos das redes sociais e como evitá-los',
    className: 'isFeatured',
    postImage: postImg_1,
    redirectTo: '/posts/1',
  },
  {
    authorName: 'Lucas Gradilone',
    postTitle: 'O algoritmo das Redes Sociais',
    postImage: postImg_2,
    redirectTo: '/posts/2',
  },
  {
    authorName: 'Carlos Santana',
    postTitle: '8 gírias da internet',
    postImage: postImg_3,
    redirectTo: '/posts/3',
  },
  {
    authorName: 'Talissa Talamoni',
    postTitle: 'IOT: A Internet das Coisas',
    postImage: postImg_4,
    redirectTo: '/posts/4',
  },
  {
    authorName: 'Grupo Sete',
    postTitle: 'A história da internet',
    postImage: postImg_5,
    className: 'isOtherPost',
    redirectTo: '/posts/5',
  },
];

export default posts;
