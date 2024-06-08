import React from 'react';

const FooterHome = () => {
  return (
    <section className='relative'>
      {/* Sección roja */}
      <div className='bg-red-600 h-20 md:h-10'></div>
      {/* Sección negra */}
      <div className='bg-black h-11 md:h-7'></div>
      {/* Centrar la imagen del logo */}
      <div className='absolute top-8 left-1/2 transform -translate-x-1/2 md:w'>
        <img id='pokebola' src='/images/pokebola.png' alt='' />
      </div>
    </section>
  );
};

export default FooterHome;