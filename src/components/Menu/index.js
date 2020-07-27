import React from 'react';
import Logo from '../../assets/img/caduflix.png'
import './styles.css'
import Button from '../Button';
// import ButtonLink from '../ButtonLink';


export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className='Logo' src={Logo} alt="caduflix" />
      </a>

      <Button as="a" className='ButtonLink' href="/">
        Novo video
      </Button>
    </nav>
  );
}