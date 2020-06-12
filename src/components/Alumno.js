import React from 'react';

const Alumno = ({alumno}) => {
    
    return ( 
        <>
            <tr>
                <td className="border text-center">{alumno.alumno}</td>
                <td className="border text-center">{alumno.definitiva}</td>
                <td className="border text-center">{alumno.estado}</td>
            </tr>
        </>
    );
}
 
export default Alumno;