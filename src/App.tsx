import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/sharedlayout';
import  Home  from './components/home';
import './App.css';
import './css/home.css'

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={< SharedLayout/>}>
       <Route index element={< Home />} />                   
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
