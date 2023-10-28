import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={ <> <Home></Home></>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
