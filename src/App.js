import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Show_content from './components/Show_content'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="Show_content/:search" element={<Show_content/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
