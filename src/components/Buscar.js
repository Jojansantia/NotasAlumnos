import React, { useState } from 'react';

const Buscar = ({alumnos, guardarAlumnosFiltro}) => {

    const [filtro, guardarFiltro] = useState({
        documento:'',
        radio:'todos'
    });
    console.log(filtro);
    const HandleChange = e =>{
        guardarFiltro({
            ...filtro,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = e =>{
        e.preventDefault();

        let alumnosFiltro;
        if(filtro.documento.trim() === '' ){
            alumnosFiltro = [];
        }else{
            alumnosFiltro = alumnos.filter(alumno => alumno.codigo === filtro.documento);
        }
            
        console.log(alumnosFiltro);
        guardarAlumnosFiltro(alumnosFiltro)
    }
    const HandleSubmitFiltro = e =>{
        e.preventDefault();

        let alumnosFiltro;
        if( filtro.radio === "perdio" || filtro.radio === "gano"){
            console.log('entre2');
            
            alumnosFiltro = alumnos.filter(alumno => alumno.estado === filtro.radio);
        }else{
            alumnosFiltro = []
        }
        console.log(alumnosFiltro);
        guardarAlumnosFiltro(alumnosFiltro)
    }

    return ( 
        <>
            <div className="container  border row-span-1 col-span-2   ">
                <form onSubmit={HandleSubmit} >
                    <div className="flex justify-around my-3">
                        <div className="flex">
                            <svg className="w-10 px-2 rounded-l bg-gray-700 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            <input
                                className="appearance-none rounded-r border-2 border-l-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                id="documento"
                                name="documento"
                                type="number"
                                placeholder="Documento"
                                onChange={HandleChange}
                            />
                        </div>
                        <div className="flex ">
                            <button
                                type="submit"
                                className=" bg-gray-800 rounded-md px-10 py-2 text-white uppercase hover:bg-gray-900"
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                    </form>
                    <form onSubmit={HandleSubmitFiltro} >
                    <div className="flex justify-around">
                        <div>
                            <input 
                                className="mr-2 " type="radio" name="radio" id="radio" value="perdio"
                                onChange={HandleChange}
                            />
                            <label className="form-check-label " htmlFor="perdieron">
                                Perdieron
                            </label>
                        </div>
                        <div>
                            <input 
                                className="mr-2" type="radio" name="radio" id="radio" value="gano" 
                                onChange={HandleChange}
                            />
                            <label className="form-check-label " htmlFor="perdieron">
                                Ganaron
                            </label>
                        </div>
                        <div>
                            <input 
                                className="mr-2 " type="radio" name="radio" id="radio" value="todos" 
                                
                                onChange={HandleChange}
                            />
                            <label className="form-check-label" htmlFor="perdieron">
                                Todos
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-center">
                            <button
                                type="submit"
                                className="my-2 w-1/5 bg-gray-800 rounded-md p-2 text-white uppercase hover:bg-gray-900"
                            >
                                Filtrar
                            </button>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default Buscar;