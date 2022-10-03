import { useState } from 'react';
import './App.css';

function App() {
  const [name, nameSet] = useState('');
  const [age, ageSet] = useState(0);
  const [country, countrySet] = useState('');
  const [position, positionSet] = useState('');
  const [wage, wageSet] = useState(0);

  const displayInfo = () => {
    console.log(name + age + country + position + wage);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='input'>
          <label>Name: </label>
          <input
            type='text'
            onChange={event => {
              nameSet(event.target.value);
            }}
          />
        </div>
        <div className='input'>
          <label>Age: </label>
          <input
            type='number'
            onChange={event => {
              ageSet(parseInt(event.target.value));
            }}
          />
        </div>
        <div className='input'>
          <label>country: </label>
          <input
            type='text'
            onChange={event => {
              countrySet(event.target.value);
            }}
          />
        </div>
        <div className='input'>
          <label>Position: </label>
          <input
            type='text'
            onChange={event => {
              positionSet(event.target.value);
            }}
          />
        </div>
        <div className='input'>
          <label>Wage (year): </label>
          <input
            type='number'
            onChange={event => {
              wageSet(parseInt(event.target.value));
            }}
          />
        </div>
        <button onClick={displayInfo}>Add employee</button>
      </header>
    </div>
  );
}

export default App;
