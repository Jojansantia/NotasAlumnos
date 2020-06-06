import React, { useState, useEffect  } from 'react';

const Datos = ({guardarInformacion, guardarCrearDatos}) => {

    const [codigo, guardarCodigo] = useState('');
    const [alumno, guardarAlumno] = useState('');
    const [parcial, guardarParcial] = useState('');
    const [final, guardarFinal] = useState('');
    const [seguimiento, guardarSeguimiento] = useState('');
    let [definitiva, guardarDefinitiva] = useState('');

    definitiva = ((parcial*0.25) + (final*0.25) + (seguimiento*0.5))

    useEffect(() => {
        if(parcial && final && seguimiento) {
            guardarDefinitiva(definitiva);
        }
      }, [parcial, final, seguimiento, definitiva]);

    const HandleSubmit = e => {
        e.preventDefault();
        
        // resetear el form
        const informacion = {
            codigo,
            alumno,
            parcial,
            final,
            seguimiento,
            definitiva
        }
    
        // pasar el gasto al componente principal
        guardarInformacion(informacion);
        guardarCrearDatos(true);

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
                <div className=" ">
                        <form onSubmit={HandleSubmit} >
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
                                    placeholder="0-5"
                                    onChange={e => guardarParcial( parseInt( e.target.value, 10 ) )}
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
                                    placeholder="0-5"
                                    onChange={e => guardarFinal( parseInt( e.target.value, 10 ) )}
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
                                    placeholder="0-5"
                                    onChange={e => guardarSeguimiento( parseInt( e.target.value, 10 ) )}
                                    value={seguimiento}
                                />
                            </div>
                            <div className="flex justify-center">
                                <hr
                                    className="border-2  border-gray-700"
                                    width="95%"
                                />
                            </div> 
                            <div className="mt-4 flex">
                                <label className="w-1/3 text-center  mr-10 text-gray-700 text-sm font-bold my-auto" htmlFor="definitiva">
                                    DEFINITIVA:
                                </label>
                                <input
                                    className="text-center appearance-none rounded border-2 w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                    id="definitiva"
                                    name="definitiva"
                                    type="number"
                                    placeholder="0-5"
                                    value={definitiva}
                                    readOnly={true}
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="my-5 bg-gray-800 w-1/3 rounded-md p-2 text-white uppercase hover:bg-gray-900"
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