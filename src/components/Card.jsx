import React from 'react';

const Card = ({ photo, name, price }) => {
    return (
        <div className='border rounded-lg p-4'>
            <img src={photo} alt={name} className='rounded-md h-52 w-full object-cover' />
            <h3 className='mt-1 text-xl'>{name}</h3>
            <p className='text-zinc-600'>₹{price}</p>
        </div>
    );
}

export default Card;