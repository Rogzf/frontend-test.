
import React from 'react';
import InfiniteScrollUser from './components/InfiniteScrollUser';
function App() {
  return (
    <div className="App flex flex-col items-center pt-8 bg-slate-400">
      <h1 className='text-black font-medium p-3'>Lista de Usuarios</h1>
      <InfiniteScrollUser/>
    </div>
  );
}

export default App;