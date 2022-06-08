import { HeaderContainer, HeaderContent, HeaderNav } from './styles';
import logoIcon from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

// interface HeaderProps {
//   isLoginPage?: boolean;
// }

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to='/'>
          <img alt='Logo do site / Voltar para a home' src={logoIcon} />
        </Link>
        <HeaderNav>
          <ul>
            <Link to=''>
              <li>Sobre</li>
            </Link>
            <Link to=''>
              <li>Contato</li>
            </Link>
            <a
              href='https://github.com/yagomouro/react_blog'
              target='_blank'
              rel='noreferrer'
            >
              <li>Github</li>
            </a>
          </ul>
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
