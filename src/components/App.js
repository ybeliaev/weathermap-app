import React from "react";
import '../App.css';

import { CardList } from './CardList';
import { Input } from './Input';
import { useCitiesList } from '../hooks/useCitiesList';

export const GlobalContext = React.createContext()

function App() {
  const [state, dispatch] = useCitiesList()
   return (
       <GlobalContext.Provider value={{state, dispatch}}>
         <div className="Main">
           <Input  />
           <CardList  />
         </div>
       </GlobalContext.Provider>
   );
}

export default App;
