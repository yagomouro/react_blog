import { ChangeEvent, useState, FormEvent } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { InputFile, Main, NewPostForm } from './styles';
import Button from '../../components/Button';
import defaultImage from '../../assets/images/default.jpg';
import { v4 } from 'uuid';

import { storage } from '../../services/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [backGroundImageUpload, setBackGroundImageUpload] =
    useState<string>(defaultImage);
  const [postContent, setPostContent] = useState<string>('');
  const [postTitle, setPostTitle] = useState<string>('');
  const navigate = useNavigate();

  const handleCreatePost = (event: FormEvent) => {
    event.preventDefault();

    const postImageRef = ref(storage, `images/${imageUpload?.name + v4()}`);

    if (imageUpload !== null) {
      uploadBytes(postImageRef, imageUpload).then((snapshot) => {
        alert('Arquivo enviado!');
        navigate('/posts/1');
      });
    } else {
      alert('Faça o upload de um arquivo!');
    }
  };

  const handlePostFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files;
    if (files !== null) {
      setImageUpload(files[0]);
      handleSetBackgroundInputFile(files[0]);
    }
  };

  const handleSetBackgroundInputFile = (file: File | null) => {
    if (imageUpload !== null && file !== null) {
      let url = URL.createObjectURL(file);
      setBackGroundImageUpload(url);
    }
  };

  return (
    <>
      <Header isLoginPage />
      <Main>
        <>
          <NewPostForm onSubmit={handleCreatePost}>
            <h1>Novo Post</h1>

            <input
              type='text'
              name='postTitle'
              value={postTitle}
              placeholder='Título do post'
              onChange={(event) => setPostTitle(event.target.value)}
              required
            />
            <textarea
              placeholder='Conteúdo do post'
              name='postContent'
              value={postContent}
              onChange={(event) => {
                setPostContent(event.target.value);
              }}
              required
            />
            <InputFile
              placeholder='Conteúdo do post'
              type='file'
              name='postFile'
              id='postFile'
              accept='image/*'
              onChange={handlePostFileChange}
              imageSelected={backGroundImageUpload}
              required
            />
            <Button type='submit'>Postar artigo</Button>
          </NewPostForm>
        </>
      </Main>
      <Footer />
    </>
  );
};

export default NewPost;
