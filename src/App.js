import './App.css';
import ItemPage from './Components/Pages/ItemComponent/ItemPage';
import ListPage from './Components/Pages/ListComponent/ListPage';
import { Routes, Route,Navigate } from 'react-router-dom'

function App() {
  return (
   <Routes>
   <Route path="/" element={ <ListPage/> } />
   <Route path='/Item/:id' element={<ItemPage/>} />
   </Routes>
  );
}

export default App;
