import { HeaderContainer, HeaderContent, HeaderNav } from './styles';
import logoIcon from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLoginPage?: boolean;
}

const Header = ({ isLoginPage = false }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to='/'>
          <img alt='Logo do site / Voltar para a home' src={logoIcon} />
        </Link>
        <HeaderNav>
          <ul>
            <Link to=''>
              <li>About</li>
            </Link>
            <Link to='' target='_blank'>
              <li>Repositório</li>
            </Link>
            {isLoginPage && (
              <Link to=''>
                <li>Login</li>
              </Link>
            )}
          </ul>
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
