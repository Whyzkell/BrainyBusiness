import React from 'react'



export default function Colorsito({imagencita, nombrecito, valorcito}) {
    return (
        <>
            <div className="w-2/12 flex justify-around items-center sm:w-1/2 phone:w-full">
                <img src={imagencita} className='w-14 h-14' />
                <div className="flex flex-col justify-between w-1/3">
                    <p className="text-xs">{nombrecito}</p>
                    <p className="text-3xl">{valorcito}</p>
                </div>
            </div>
        </>
    )
}



