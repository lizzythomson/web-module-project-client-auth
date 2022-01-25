import React, { useEffect, useState } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

const FriendsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='friends-list-container'>
      <h1>FRIENDS LIST</h1>
      {data.map((friend) => {
        return (
          <div key={friend.id} className='friend'>
            - {friend.name} - {friend.email}
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
