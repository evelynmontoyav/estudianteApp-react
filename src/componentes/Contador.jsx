import React from 'react'

 export function Contador({estudiantes}) {
    const totalEstudiantes = estudiantes.length;
    const totalEstudiantesActivos = estudiantes.filter(
      (estudiante) => estudiante.estado === 'activo'
    ).length;
  
    return (
      <div className='text-center text-[32px] font-bold text-blue-600'>
        <p>HAY {totalEstudiantesActivos} ESTUDIANTES ACTIVOS DE {totalEstudiantes} ESTUDIANTES REGISTRADOS</p>
        {/* <p>Total de estudiantes registrados: {totalEstudiantes}</p>
        <p>Total de estudiantes registrados activos: {totalEstudiantesActivos}</p> */}
      </div>
    );
}

