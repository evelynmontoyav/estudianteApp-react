import {Tabla} from './Tabla';

export function Buscador({ estudiantes }) {
    const [filtro, setFiltro] = useState('');

    const handleFiltroChange = (e) => {
      setFiltro(e.target.value);
    };
  
    const filtrarEstudiantes = () => {
      return estudiantes.filter(
        (estudiante) =>
          estudiante.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
          estudiante.carrera.toLowerCase().includes(filtro.toLowerCase())
      );
    };
  
    return (
      <div>
        <div>
          <label>Filtrar por Nombre o Carrera:</label>
          <input
            type="text"
            value={filtro}
            onChange={handleFiltroChange}
          />
        </div>
        <br />
        <br />
        <Tabla datos={filtrarEstudiantes()} />
      </div>
    );
  };