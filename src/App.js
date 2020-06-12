import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Datos from './components/Datos';
import Listado from './components/Listado';
import Buscar from './components/Buscar';

function App() {

  const [ alumnos, guardarAlumnos] = useState([]);
  const [ alumnosFiltro, guardarAlumnosFiltro] = useState([]);
  const [ informacion, guardarInformacion ] = useState({});
  const [ creardatos, guardarCrearDatos ] = useState(false);
  const [ filtrar, guardarFiltrar ] = useState(false);

  const [filtro, guardarFiltro] = useState({
    documento:'',
    estadoAlumno:'todos'
  });

  useEffect(() => {
    if(creardatos) {
        // agrega el nuevo alumno
        guardarAlumnos([
          ...alumnos,
          informacion
        ]);
        // Resetear a false
        guardarCrearDatos(false);
    }
  }, [informacion, creardatos, alumnos]);
  
  return (
    <>
      <div className="mb-5 mx-5 md:m-auto md:w-4/5">
        <div className=" container-fluid  m-auto">
          <Header/>  
        </div>
        <div className=" grid grid-rows-3 grid-flow-col gap-2  m-auto">
          <Datos
            alumnos={alumnos}
            filtro={filtro}
            guardarInformacion={guardarInformacion}
            guardarCrearDatos={guardarCrearDatos}
            guardarAlumnosFiltro={guardarAlumnosFiltro}
            alumnosFiltro={alumnosFiltro}
          />
          <Buscar
            alumnos={alumnos}
            filtro={filtro}
            guardarAlumnosFiltro={guardarAlumnosFiltro}
            guardarFiltrar={guardarFiltrar}
            guardarFiltro={guardarFiltro}
          />
          <Listado
            alumnos={alumnos}
            filtrar={filtrar}
            alumnosFiltro={alumnosFiltro}
          />
        </div>
      </div>
    </>
  );
}

export default App;
