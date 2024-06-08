import React from 'react';
import { setNameTrainerGlobal } from '../../store/slices/nameTrainer.slice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(setNameTrainerGlobal(''));
  };

  return (
    <section className='relative'>
      {/* Sección roja */}
      <div id='barraRoja' className='bg-red-600 h-11'>
        <img id='pokedex' className='ml-12' src='/images/logo.png' alt='' />
      </div>
      {/* Sección negra */}
      <div id='barraNegra' className='bg-black h-7'></div>
      <div id='pokebolasalidaPosition' className='absolute top-7 right-12 '>
        <img
          onClick={handleClickLogout}
          id='pokebolasalida'
          src='/images/pokebolaSalida.png'
          alt=''
        />
      </div>
    </section>
  );
};

export default Header;