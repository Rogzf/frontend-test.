import React from 'react';

function CardUsers({ user }) {
  return (
    <div className="flex w-96 h-36 gap-5 bg-black text-white p-2 rounded-lg hover:bg-slate-900">
      <img className="bg-slate-500 rounded-full" src={`https://robohash.org/${user.id}`} alt="User Avatar" width="100px" />
      <div className='flex flex-col justify-center'>
        <p><span className='font-medium'>Nombre:</span>  {user.first_name} {user.last_name}</p>
        <p><span className='font-medium'>Correo Electrónico:</span> {user.email}</p>
        <p><span className='font-medium'>Teléfono:</span> {user.phone_number}</p>
      </div>
    </div>
  );
}

export default CardUsers;
