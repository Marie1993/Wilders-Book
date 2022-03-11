import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import { wildersList } from '../data/wilders';
import { CardRow, Image, CardWilder, SkillContainer } from '../style/style';
import Skill from './skill';

const Card = () => {
  const [wilders, setWilders] = useState([]); // tableau de wilders

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:4000/api/wilder');
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [wilders]);

  return (
    <CardRow>
      {wilders.map((wilder) => (
        <CardWilder key={wilder._id}>
          <Image src='/images/profil.jpg' alt={wilder.name} />
          <div>Nom : {wilder.name}</div>
          <div>Ville : {wilder.city}</div>
          <SkillContainer>
            {wilder.skills.map((skill) => (
              <Skill key={skill._id} skill={skill} />
            ))}
          </SkillContainer>
        </CardWilder>
      ))}
    </CardRow>
  );
};

export default Card;
