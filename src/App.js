
import React from 'react';
// import UserListApi from "./components/UserListApi"
import InfiniteScrollUser from './components/InfiniteScrollUser';
// import InfiniteScroll from 'react-infinite-scroll-component';
function App() {
  return (
    <div className="App flex flex-col items-center pt-8 bg-slate-400">
      <h1 className='text-black font-medium p-3'>Lista de Usuarios</h1>
      <InfiniteScrollUser/>
{/* <UserListApi/> */}
    </div>
  );
}

export default App;
