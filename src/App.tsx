import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/sharedlayout';
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={< SharedLayout/>}>
       



    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
