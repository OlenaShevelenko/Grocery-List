import './App.css';
import image from "./shopping.jpeg";
import man from "./man.jpeg";
import GroceryList from './groceryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={image} alt='shopping'width='200'/>
      </div>
      <div className="container">
        <h1>Grocery list:</h1>
      </div>
      <GroceryList/>
      <div className="container">
        <img src={man} alt='man' width="200"/>
      </div>
    </div>
  );
}

export default App;
