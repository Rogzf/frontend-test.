import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import CardUsers from './CardUsers';


const InfiniteScrollUser = () => {
    const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://random-data-api.com/api/users/random_user?size=9&page=${page}`);
        const data = await response.json();
        console.log(data);
        setUsers(prevUsers => [...prevUsers, ...data]);
        setHasMore(data.length > 0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]);

  const fetchMoreData = () => {
    setPage(prevPage => prevPage + 1);
  };

  const filteredUsers = users.filter(user => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });
  
  return (
    <div className='flex flex-col gap-1 items-center p-2'>
        <input className="rounded-md border border-black p-2 "type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Buscar usuarios..." />
    <div className='flex flex-wrap justify-center items-center gap-2 pt-4'>
        {filteredUsers.map((user, index) => (
  <CardUsers key={user.id} user={user}/>
))}

    <InfiniteScroll className='flex flex-wrap gap justify-center '
      dataLength={users.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Cargando...</h4>}
      endMessage={<p>Fin de la lista</p>}
    >
      {users.map((user, index) => (
        <CardUsers key={user.id} user={user}/>
      ))}
    </InfiniteScroll>
  </div>
  </div>
  )
}

export default InfiniteScrollUser