import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { NavbarContext } from '../context/NavBarContext';
import {
  CardRow,
  Image,
  CardWilder,
  SkillContainer,
  IconDelete,
} from '../style/style';
import AddWilder from './AddWilder';
import Skill from './Skill';

const Card = () => {
  const [wilders, setWilders] = useState([]); // tableau de wilders
  const { isDeletable } = useContext(NavbarContext); //partage avec NavBar
  const { isAddable } = useContext(NavbarContext); //partage avec NavBar

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/api/wilder');

        setWilders(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [wilders]);

  function deleteWilder(id) {
    axios.delete(`http://localhost:4000/api/wilder/delete/${id}`);
  }

  return (
    <>
      {isAddable && <AddWilder />}
      <CardRow>
        {wilders.map((wilder) => (
          <CardWilder isDeletable={isDeletable} key={wilder._id}>
            {/* //apparait si on apuis sur le bouton delete */}
            {isDeletable && (
              <IconDelete
                src='/images/close.png'
                alt={wilder.name}
                onClick={() => deleteWilder(wilder._id)}
              />
            )}
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
    </>
  );
};

export default Card;
