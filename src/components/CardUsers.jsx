import React from 'react';

function CardUsers({ user }) {
  return (
    <div className="flex w-full sm:w-[100%] md:w-[48%] lg:w-[29%] h-auto gap-5 bg-black text-white p-2 rounded-lg hover:bg-slate-900">
      <img className="bg-slate-500 rounded-full w-full md:w-[29%] sm:w-[25%] lg:w-[29%]" src={`https://robohash.org/${user.id}`} alt="User Avatar" />
      <div className='flex flex-col justify-center flex-grow '>
        <p><span className='font-normal'>Nombre:</span>  {user.first_name} {user.last_name}</p>
        <p><span className='font-normal'>Correo Electrónico:</span> {user.email}</p>
        <p><span className='font-normal'>Teléfono:</span> {user.phone_number}</p>
      </div>
    </div>
  );
}

export default CardUsers;
