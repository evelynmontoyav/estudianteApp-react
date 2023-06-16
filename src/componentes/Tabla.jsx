
export function Tabla ({  datos, cambiarEstado }) {

  // const Cambiarestado = (estudiante) => {
  //   if(estudiante.estado == 'activo'){
  //     estudiante.estado = 'inactivo'
  //   }else{
  //     estudiante.estado = 'activo'
  //   }
  
  
  return (
    <table className='border-solid m-6 w-[90%]'>
      <thead className='bg-blue-600 text-white text-[15px]' >
        <tr>
          <th>Nombre</th>
          <th>Carrera</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody className='bg-white'>
        {datos.map((estudiante, index) => (
          <tr key={index} className='text-center text-gray-600'>
            <td>{estudiante.nombre}</td>
            <td>{estudiante.carrera}</td>
            <td>
              <button onClick={() => cambiarEstado(index)}
              className="w-[20%] h-[25px] m-1 inline-flex justify-center items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                {estudiante.estado}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
