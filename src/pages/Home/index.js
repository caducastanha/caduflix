import React from 'react';
import Menu from '../../components/Menu';
import data from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        url={data.categorias[0].videos[0].url}
        videoTitle={data.categorias[0].videos[0].titulo}
        videoDescription={''}
      />

      {data.categorias.map((categoria, index) => (
        <>
          {
            index === 0 ?
              <Carousel
                ignoreFirstVideo
                category={categoria}
              />
              :
              <Carousel
                category={categoria}
              />
          }
        </>
      ))}

      <Footer />
    </div>
  );
}

export default Home;
