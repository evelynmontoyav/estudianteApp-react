import React, { useState } from 'react';
import {Formulario} from './componentes/Formulario';
import {Tabla} from './componentes/Tabla';
import {MyModal} from './componentes/MyModal';
import {Contador} from './componentes/Contador';
// import { Buscador } from './componentes/Buscador';
import './App.css';

function App () {
  const [tablaData, setTablaData] = useState([]);

  const agregarDato = (nuevoDato) => {
    setTablaData([...tablaData, nuevoDato]);
  };

  const cambiarEstado = (index) => {
    const updatedEstudiantes = [...tablaData];
    updatedEstudiantes[index].estado =
      updatedEstudiantes[index].estado === 'activo' ? 'inactivo' : 'activo';
    setTablaData(updatedEstudiantes);
  };


  return (
    <div className='App'>
      <div className='pt-[8%]'>
         <Contador estudiantes={tablaData} />
         {/* <Buscador estudiantes={tablaData}/> */}
      </div> 
        <Tabla datos={tablaData} cambiarEstado={cambiarEstado}/>
    <div className='flex justify-center'>
        <MyModal agregarDato={agregarDato}/>
    </div>
    </div>
  );
};

export default App;
