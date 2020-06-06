import React from 'react';

const Listado = () => {
    return ( 
        <>
            <div className="container  border row-span-2 col-span-2 mb-10 ">
                
                <h1 className="text-center text-gray-700 text-2xl font-bold text-black ">
                    Listado
                </h1>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-gray-700 px-4 py-2">Alumno</th>
                            <th className="text-gray-700 px-4 py-2">Nota</th>
                            <th className="text-gray-700 px-4 py-2">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Intro to CSS</td>
                            <td className="border px-4 py-2">Adam</td>
                            <td className="border px-4 py-2">858</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
      
        </>
     );
}
 
export default Listado;