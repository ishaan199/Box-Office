import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Starred from './pages/Starred'
import MainLayout from './component/MainLayout';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<MainLayout/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/starred' element={<Starred/>} />
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
