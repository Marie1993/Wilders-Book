import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddWilder() {
  // const [name, setName] = useState('');
  // const [city, setCity] = useState('');

  // PK on écoute le state de Data ? alors que l'info va partir coté serveur ?
  const [userData, setUserData] = useState({
    name: '',
    city: '',
  });
  const [error, setError] = useState('');

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          console.log(userData);
          const result = await axios.post(
            'http://localhost:4000/api/wilder/create',
            {
              ...userData, // ... sinon j'envois {{}} // et je dois faire req.body.userData coté back
            }
          );
          console.log(result);
          if (result.data.success) {
            setError('');
          }
        } catch (error) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError(error.message);
          }
        }
      }}
    >
      <label htmlFor='name-input'>Name :</label>
      <input
        id='name-input'
        type='text'
        placeholder='Type the name'
        //defaultValue={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        //onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='city-input'>City :</label>
      <input
        id='city-input'
        type='text'
        placeholder='Type the city'
        //defaultValue={userData.city}
        onChange={(e) => setUserData({ ...userData, city: e.target.value })}
        // onChange={(e) => setCity(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default AddWilder;
