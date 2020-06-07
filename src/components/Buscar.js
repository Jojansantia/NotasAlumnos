import React from 'react';

const Buscar = ({alumnos, filtro, guardarFiltro, guardarAlumnosFiltro, guardarFiltrar}) => {

    const HandleChange = e =>{
        guardarFiltro({
            ...filtro,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = e =>{
        e.preventDefault();

        let alumnosFiltrados;
        if(filtro.documento.trim() === '' ){
            alumnosFiltrados = [];
        }else{
            alumnosFiltrados = alumnos.filter(alumno => alumno.codigo === filtro.documento);
        }
        guardarAlumnosFiltro(alumnosFiltrados)
        guardarFiltrar(true)
        
        setTimeout(() => {
            guardarFiltro({
                documento:''
            })
        }, 3000);
    }
    
    const HandleSubmitFiltro = e =>{
        e.preventDefault();

        let alumnosFiltrados;
        if( filtro.radio === "Perdio" || filtro.radio === "Gano"){
            alumnosFiltrados = alumnos.filter(alumno => alumno.estado === filtro.radio);
            guardarFiltrar(true)
        }else{
            alumnosFiltrados = []
            guardarFiltrar(false)
        }
        guardarAlumnosFiltro(alumnosFiltrados)
    }

    return ( 
        <>
            <div className="container  border row-span-1 col-span-2   ">
                <form onSubmit={HandleSubmit} >
                    <div className="flex justify-center my-3">
                        <div className="flex">
                            <svg className="ml-1 w-10 px-2 rounded-l bg-gray-700 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            <input
                                className="mr-1 appearance-none rounded-r border-2 border-l-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                id="documento"
                                name="documento"
                                type="number"
                                placeholder="Documento"
                                onChange={HandleChange}
                                value={filtro.documento}
                            />
                        </div>
                        <div className="flex ">
                            <button
                                type="submit"
                                className="mx-1 bg-gray-800 rounded-md p-2 text-white uppercase hover:bg-gray-900"
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
                                className="mr-2 " type="radio" name="radio" id="radio1" value="Perdio"
                                onChange={HandleChange}
                            />
                            <label className="form-check-label " htmlFor="perdieron">
                                Perdieron
                            </label>
                        </div>
                        <div>
                            <input 
                                className="mr-2" type="radio" name="radio" id="radio2" value="Gano" 
                                onChange={HandleChange}
                            />
                            <label className="form-check-label " htmlFor="perdieron">
                                Ganaron
                            </label>
                        </div>
                        <div>
                            <input 
                                className="mr-2 " type="radio" name="radio" id="radio3" value="todos" 
                                
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
                            className="my-3 bg-gray-800 w-1/3 rounded-md p-2 text-white uppercase hover:bg-gray-900"
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