import './App.css';
import AddWilder from './components/AddWilder';
import Card from './components/card';
import { Container } from './style/style';

function App() {
  return (
    // <div className='containder'>
    <>
      <Container>
        <h1>Wilders Book</h1>
      </Container>
      <Container>
        <Card />
      </Container>
      <Container>
        <AddWilder />
      </Container>
    </>
  );
}

export default App;
