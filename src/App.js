import './App.css';
import { Card } from './Card';
import { Input } from './Input';

function App() {
  return (
    <div className="Main">
      <Input />
      <div className="CardList">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
