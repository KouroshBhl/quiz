import logo from '../assets/logo.png';

function Logo() {
  return (
    <a href='https://www.vizyonerkoleji.com.tr/' target='_blank'>
      <img src={logo} alt='Vizyoner Koleji' className='logo' />;
    </a>
  );
}

export default Logo;
