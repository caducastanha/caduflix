import React from 'react';
import Logo from '../../assets/img/caduflix.png'
import './styles.css'
import Button from '../Button';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className='Logo' src={Logo} alt="caduflix" />
      </Link>

      <Button as={Link} className='ButtonLink' to="/cadastro/video">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;
