import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageUslugi from './pages/UslugiPage/PageUslugi';
import Glavniy from "./pages/Main/Glavniy"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <Glavniy />}/>
        <Route path='/pageUslugi' element={ <PageUslugi /> } />
      </Routes>
    </div>
  );
}

export default App;
