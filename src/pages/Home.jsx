import React from 'react';
import FooterHome from '../components/home/FooterHome';
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(setNameTrainerGlobal(nameTrainer));
    Navigate('/pokedex');
  };

  return (
    <main className='min-h-screen grid grid-rows-[1fr_auto]'>
      {/* Parte de arriba */}
      <section className='w-4/5 mx-auto  grid text-center justify-center content-center'>
        <div >
          <img src='/images/logo.png' alt='' className='mx-auto' />
          {/* Agrega la clase 'mx-auto' para centrar horizontalmente la imagen */}
        </div>
        <h3 className='py-1'>
          <span className='font-extrabold text-red-500'>¡Hola Entrenador!</span>
        </h3>
        <p className='py-1'>Para empezar, dime tu nombre:</p>

        <form onSubmit={handleSubmit}>
          <input id='nameTrainer' className='p-2 border' type='text' />
          <button className='bg-red-500 p-2 rounded-md'>¡Comenzar!</button>
        </form>
      </section>
      {/* Parte de abajo */}
      <section>
        <FooterHome />
      </section>
    </main>
  );
};

export default Home;