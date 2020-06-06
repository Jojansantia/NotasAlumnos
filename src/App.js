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

  

  useEffect(() => {
    if(creardatos) {

        // agrega el nuevo saldo
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
            guardarInformacion={guardarInformacion}
            guardarCrearDatos={guardarCrearDatos}
          />
          
          <Buscar
            guardarAlumnosFiltro={guardarAlumnosFiltro}
            alumnos={alumnos}
          />
          <Listado
            alumnos={alumnos}
            alumnosFiltro={alumnosFiltro}
          />
          
        </div>
      </div>
    </>
  );
}

export default App;
