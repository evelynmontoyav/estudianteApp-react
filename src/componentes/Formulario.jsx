import React, { useState } from 'react';

export function Formulario ({ agregarDato, closeModal })  {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const estudiante = {
      nombre,
      carrera,
      estado: 'activo'
    };
    agregarDato(estudiante);
    setNombre('');
    setCarrera('');
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={nombre}
          placeholder='Nombre Completo'
          className='w-[80%] h-[55px] p-4 mt-4 border-solid border-2 border-blue-200 hover:border-blue-400 active:bg-blue-200'
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className='mt-2'>
        <input
          type="text"
          value={carrera}
          placeholder='Carrera'
          className='w-[80%] h-[55px] p-4 mt-4 border-solid border-2 border-blue-200'
          onChange={(e) => setCarrera(e.target.value)}
        />
      </div>
        <button type="submit" className='w-[80%] h-[45px] mt-8 inline-flex justify-center items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
        ><h4>Agregar Estudiante</h4></button>
    </form>
  );
};
