import './App.css';
import { CardList } from './components/CardList';
import { Input } from './components/Input';
import { useCitiesList } from './hooks/useCitiesList';

function App() {
  const [citiesList, dispatch] = useCitiesList()
   return (
     <div className="Main">
       <Input dispatch={dispatch} />
       <CardList citiesList={citiesList} />
     </div>
   );
}

export default App;
