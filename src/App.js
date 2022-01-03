import './App.css';
import { CardList } from './components/CardList';
import { Input } from './components/Input';
import { useCitiesList } from './hooks/useCitiesList';

function App() {
  const [citiesList, setCitiesList] = useCitiesList()
   return (
     <div className="Main">
       <Input setCitiesList={setCitiesList} />
       <CardList citiesList={citiesList} />
     </div>
   );
}

export default App;
