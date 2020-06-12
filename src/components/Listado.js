import React from 'react';
import Alumno from './Alumno';

const Listado = ({alumnos, filtrar, alumnosFiltro}) => {
    
    return ( 
        <>
            <div className="container  border row-span-2 col-span-2 mb-10 ">
                
                <h1 className="text-center text-gray-700 text-2xl font-bold text-black ">
                    Listado
                </h1>
                { alumnosFiltro.length === 0 && alumnos.length === 0 
                    ?
                        (<h3 className="mt-3 text-gray-700 text-center">No hay alumnos</h3>) 
                    :
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="border bg-gray-200 text-gray-700 px-4 py-2">Alumno</th>
                                <th className="border bg-gray-200 text-gray-700 px-4 py-2">Nota</th>
                                <th className="border bg-gray-200 text-gray-700 px-4 py-2">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            { filtrar 
                            ?
                            
                                alumnosFiltro.length !== 0
                                ?
                                    (
                                        alumnosFiltro.map(alumno => (
                                            <Alumno
                                                key={alumno.codigo}
                                                alumno={alumno}
                                            /> 
                                        ))
                                    )
                                :
                                    null
                            :
                                    (
                                        alumnos.map(alumno => (
                                            <Alumno
                                                key={alumno.codigo}
                                                alumno={alumno}
                                            /> 
                                        ))
                                    )
                            }
                        </tbody>
                    </table>
                }
            </div>
        </>
     );
}
 
export default Listado;