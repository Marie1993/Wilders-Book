import React, { useState} from 'react';
import axios from 'axios';
import { FormWilder } from '../style/style';

function AddWilder() {

  const [skill, setSkill] = useState({ title: '', votes: null });

  const [userData, setUserData] = useState({
    name: '',
    city: '',
    skills: [],
  });

  const [error, setError] = useState('');
  return (
    <FormWilder>
      <h1>Ajouter un nouveau wilder</h1>
      <form
        onSubmit={async (e) => {
          setUserData(userData.skills.push(skill));

          e.preventDefault();
          try {
            const result = await axios.post(
              'http://localhost:4000/api/wilder/create',
              {
                ...userData, // ... sinon j'envois {{}} // et je dois faire req.body.userData coté back
              }
            );
     
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
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <label htmlFor='city-input'>City :</label>

        <input
          id='city-input'
          type='text'
          placeholder='Type the city'
          onChange={(e) => setUserData({ ...userData, city: e.target.value })}
        />
        <p>Skills</p>
        <label htmlFor='title-input'>Title :</label>
        <input
          id='title-input'
          type='text'
          placeholder='title'
          onChange={(e) => setSkill({ ...skill, title: e.target.value })}
        />
        <label htmlFor='vote-input'>Vote :</label>
        <input
          id='vote-input'
          type='number'
          placeholder='vote'
          onChange={(e) =>
            setSkill({ ...skill, votes: Number(e.target.value) })
          }
        />
        <button>Add</button>
      </form>
    </FormWilder>
  );
}

export default AddWilder;
