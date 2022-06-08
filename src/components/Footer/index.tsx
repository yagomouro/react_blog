import logoIcon from '../../assets/images/logo.png';
import { FooterContent, FooterWrapper } from './style';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <img src={logoIcon} alt='logo' />
        <h1>Ⓒ COPYRIGHT 2022 - Grupo 7</h1>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
