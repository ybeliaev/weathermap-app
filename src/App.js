import { useState } from 'react';
import './App.css';
import { CardList } from './components/CardList';
import { Input } from './components/Input';

function App() {
  const [citiesList, setCitiesList] = useState([]);
  console.log(citiesList)
   return (
     <div className="Main">
       <Input setCitiesList={setCitiesList} />
       <CardList citiesList={citiesList} />
     </div>
   );
}

export default App;
