import React from 'react';

const Buscar = () => {
    return ( 
        <>
            <div className="container  border row-span-1 col-span-2   ">
                <h1 className="text-center text-gray-700 text-2xl font-bold text-black ">
                   Buscar
                </h1>
                <div className="flex justify-around my-3">

                
                    <div className="flex">
                        <svg className="w-10 px-2 rounded-l bg-gray-700 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        <input
                            className="appearance-none rounded-r border-2 border-l-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                            id="documento"
                            type="number"
                            placeholder="Documento"
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
                <div className="flex justify-around">
                    <div>
                        <input className="mr-2 " type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                        <label className="form-check-label " htmlFor="perdieron">
                            Perdieron
                        </label>
                    </div>
                    <div>
                        <input className="mr-2" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                        <label className="form-check-label " htmlFor="perdieron">
                            Ganaron
                        </label>
                    </div>
                    <div>
                        <input className="mr-2 " type="radio" name="gridRadios" id="gridRadios1" value="option1" />
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
                {/* <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                        <label className="form-check-label" for="gridRadios1">
                            First radio
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                        <label className="form-check-label" for="gridRadios2">
                            Second radio
                        </label>
                    </div>
                    <div className="form-check disabled">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                        <label className="form-check-label" for="gridRadios3">
                            Third disabled radio
                        </label>
                    </div>
                </div> */}

            </div>
        </>
     );
}
 
export default Buscar;