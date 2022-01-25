import React from 'react';
import { useHistory } from 'react-router-dom';

import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = () => {
  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => {
          axiosWithAuth()
            .post('/logout')
            .then((resp) => {
              localStorage.removeItem('token');
              history.push('/login');
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        LOG OUT
      </button>
    </div>
  );
};

export default Logout;
