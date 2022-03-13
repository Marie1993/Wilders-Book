import { Container, Header, List, Button } from '../style/style';
import React, { useContext } from 'react';
import { NavbarContext } from '../context/NavBarContext';

function NavBar() {
  const {
    isDeletable,
    setIsDeletable,
    isAddable,
    setIsAddable,
    isEditable,
    setIsEditable,
  } = useContext(NavbarContext); //partage avec Card

  return (
    <Header>
      <nav>
        <Container>
          <List>
            <Button onClick={() => setIsDeletable(!isDeletable)}>
              Supprimer
            </Button>
            <Button onClick={() => setIsEditable(!isEditable)}>Modifier</Button>
            <Button onClick={() => setIsAddable(!isAddable)}> Ajouter </Button>
          </List>
        </Container>
      </nav>
    </Header>
  );
}
export default NavBar;
