import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Starred from './pages/Starred'
import MainLayout from './component/MainLayout';
import Show from './pages/Show';

const queryClient = new QueryClient()
function App() {
  return (
   <QueryClientProvider client={queryClient}>    
   <BrowserRouter>
   <Routes>
    <Route element={<MainLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/starred' element={<Starred/>} />
    </Route>
    <Route path='/show/:showId' element={<Show/>}/>
   </Routes>
   </BrowserRouter>
   </QueryClientProvider>
  );
}

export default App;
