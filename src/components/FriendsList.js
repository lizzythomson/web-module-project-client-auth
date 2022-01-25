import React, { useEffect } from 'react';
import axios from 'axios';

const FriendsList = () => {
  const dummyData = [
    {
      id: 1234,
      firstName: 'Joey',
      lastName: 'Tribbiani',
      email: 'joey@friends.com',
    },
    {
      id: 2234,
      firstName: 'Rachel',
      lastName: 'Green',
      email: 'rachel@friends.com',
    },
    {
      id: 3234,
      firstName: 'Chandler',
      lastName: 'Bing',
      email: 'chandler@friends.com',
    },
    {
      id: 4234,
      firstName: 'Ross',
      lastName: 'Geller',
      email: 'ross@friends.com',
    },
    {
      id: 5234,
      firstName: 'Monica',
      lastName: 'Bing',
      email: 'monica@friends.com',
    },
  ];

  useEffect(() => {
    axios
      .get('http://localhost:9000/api/friends')
      .then((response) => {
        console.log('Jello', response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='friends-list-container'>
      <h1>FRIENDS LIST</h1>
      {dummyData.map((friend) => {
        return (
          <div key={friend.id} className='friend'>
            - {friend.firstName} {friend.lastName} - {friend.email}
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
