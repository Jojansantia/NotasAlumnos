import React from 'react';

const Header = () => {
    let año = new Date().getFullYear();
    return ( 
        <>
            <div className="mt-10 mb-2 flex flex-wrap justify-center">
                <div className="flex border w-full text-center justify-around">
                    <h1 className="my-5 text-gray-700 text-5xl font-bold  uppercase">TALLER 1 REACT BASIC {año}</h1>
                </div>
                
            </div>
        </>
    );
}
 
export default Header;