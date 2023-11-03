import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Paydues from './components/Paydues';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={ <> <Home></Home></>} />  
        <Route path='/projects' index element={<Projects/>}></Route>
        <Route path='/pay-dues' index element={<Paydues/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
