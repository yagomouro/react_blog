import { FormEvent, useState } from 'react';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FormContainer, Main } from './styles';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [userEmailLogin, setUserEmailLogin] = useState('');
  const [userPasswordLogin, setUserPasswordLogin] = useState('');

  const handleLoginUser = async (event: FormEvent) => {
    event.preventDefault();

    const auth = getAuth();

    try {
      const userCredencial = await signInWithEmailAndPassword(
        auth,
        userEmailLogin,
        userPasswordLogin
      );

      alert('Logado!');
      console.log(userCredencial.user);
    } catch {
      alert('Email ou senha inválidos');
    }
  };

  return (
    <>
      <Header />
      <Main>
        <FormContainer onSubmit={handleLoginUser}>
          <h1>Login</h1>
          <input
            type='text'
            name='email'
            required
            value={userEmailLogin}
            onChange={(event) => setUserEmailLogin(event.target.value)}
          />
          <input
            type='password'
            name='password'
            required
            value={userPasswordLogin}
            onChange={(event) => setUserPasswordLogin(event.target.value)}
          />
          <Button type='submit'>Fazer login</Button>
        </FormContainer>
      </Main>
      <Footer />
    </>
  );
};

export default Login;
