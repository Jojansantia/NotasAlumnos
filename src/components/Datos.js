import React, { useState, useEffect  } from 'react';
import Swal from 'sweetalert2';

const Datos = ({alumnos, filtro, alumnosFiltro, guardarAlumnosFiltro, guardarInformacion, guardarCrearDatos}) => {

    const [codigo, guardarCodigo] = useState('');
    const [alumno, guardarAlumno] = useState('');
    const [parcial, guardarParcial] = useState('');
    const [final, guardarFinal] = useState('');
    const [seguimiento, guardarSeguimiento] = useState('');
    let [definitiva, guardarDefinitiva] = useState('');
    
    let estado = '';
    definitiva = ((parcial*0.25) + (final*0.25) + (seguimiento*0.5))
    if(definitiva < 3){
        estado = "Perdio"
    }else if(definitiva >= 3 && definitiva <= 5){
        estado = "Gano"
    }

    useEffect(() => {
        if(parcial && final && seguimiento) {
            guardarDefinitiva(definitiva);
        }
    }, [parcial, final, seguimiento, definitiva]);

    const handleSubmit = e => {
        e.preventDefault();
        let alumnoExiste = alumnos.find(alumno => alumno.codigo === codigo);
        if(alumnoExiste){
            Swal.fire(
                'Error',
                'Ya existe un alumno con este documento.',
                'error'
            );
            limpiar()
            return;
        }

        if(codigo.trim()=== "" || alumno.trim()=== "" || parcial.trim()=== "" || final.trim()=== "" || seguimiento.trim()=== "" ){
            Swal.fire(
                'Error',
                'Todos los campos son obligatorios.',
                'error'
            );
            limpiar()
            return;
        }

        if((parcial < 0 || parcial > 5) || (final < 0 || final > 5) || (seguimiento < 0 || seguimiento > 5)){
            Swal.fire(
                'Error',
                'Las notas deben ser entre 0 y 5.',
                'error'
            );
            limpiar()
            return;
        }

        const informacion = {
            codigo,
            alumno,
            parcial,
            final,
            seguimiento,
            definitiva,
            estado
        }
    
        if(filtro.estadoAlumno === "Perdio" && estado === "Perdio"){
            guardarAlumnosFiltro([
                ...alumnosFiltro,
                informacion
            ]);
        }

        if(filtro.estadoAlumno === "Gano" && estado === "Gano"){
            guardarAlumnosFiltro([
                ...alumnosFiltro,
                informacion
            ]);
        }
        guardarInformacion(informacion);
        guardarCrearDatos(true);
        limpiar()
    }

    const limpiar = () => {
        guardarCodigo('');
        guardarAlumno('');
        guardarParcial('');
        guardarFinal('');
        guardarSeguimiento('');
    }

    return ( 
        <>
            <div className=" row-span-3 border px-5 mb-10">
                <h1 className="text-center text-gray-700 text-2xl font-bold text-black ">
                    Datos
                </h1>
                <div className="mt-3 ">
                    <form onSubmit={handleSubmit} >
                        <div className="mb-4 flex ">
                            <label className="w-1/3 text-center mr-2 text-gray-700 text-sm font-bold my-auto" htmlFor="codigo">
                                CODIGO:
                            </label>
                            <input
                                className="appearance-none rounded border-2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                id="codigo"
                                name="codigo"
                                type="number"
                                placeholder="Documento"
                                onChange={e => guardarCodigo(e.target.value)}
                                value={codigo}
                            />
                        </div>
                        <div className="mb-4 flex ">
                            <label className="w-1/3 text-center mr-2 text-gray-700 text-sm font-bold my-auto" htmlFor="alumno">
                                ALUMNO:
                            </label>
                            <input
                                className="appearance-none rounded border-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                id="alumno"
                                name="alumno"
                                type="text"
                                placeholder="Nombres y Apellidos"
                                onChange={e => guardarAlumno(e.target.value)}
                                value={alumno}
                            />
                        </div>
                        <div className="mb-4 flex ">
                            <label className="w-1/3 text-center mr-10 text-gray-700 text-sm font-bold my-auto" htmlFor="parcial">
                                PARCIAL:
                            </label>
                            <input
                                className="text-center appearance-none rounded border-2 w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                id="parcial"
                                name="parcial"
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                placeholder="0-5"
                                onChange={e => guardarParcial(e.target.value)}
                                value={parcial}
                            />
                        </div>
                        <div className="mb-4 flex ">
                            <label className="w-1/3 text-center mr-10 text-gray-700 text-sm font-bold my-auto" htmlFor="final">
                                FINAL:        
                            </label>
                            <input
                                className="text-center appearance-none rounded border-2 w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                id="final"
                                name="final"
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                placeholder="0-5"
                                onChange={e => guardarFinal(e.target.value)}
                                value={final}
                            />
                        </div>
                        <div className="mb-4 flex">
                            <label className="w-1/3 text-center mr-10 text-gray-700 text-sm font-bold my-auto" htmlFor="seguimiento">
                                SEGUIMIENTO:
                            </label>
                            <input
                                className="text-center appearance-none rounded border-2 w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                id="seguimiento"
                                name="seguimiento"
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                placeholder="0-5"
                                onChange={e => guardarSeguimiento(e.target.value)}
                                value={seguimiento}
                            />
                        </div>
                        <div className="flex justify-center">
                            <hr
                                className="border-2  border-gray-700"
                                width="95%"
                            />
                        </div> 
                        <div className="mt-4 flex justify-center">
                            <label className=" text-center text-2xl  mr-10 text-gray-700 text-sm font-bold my-auto" htmlFor="definitiva">
                                DEFINITIVA:
                            </label>
                            
                            <h2
                                className=" text-gray-700 text-2xl text-center"
                            >{definitiva}</h2>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="my-5 bg-gray-800 px-10 rounded-md p-2 text-white uppercase hover:bg-gray-900"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default Datos;