import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Project/Projects'
import Komentar from './components/Komentar/Komentar'
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {

  return (
      <>
        <BrowserRouter>
         
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/komentar" element={<Komentar/>} />
            <Route path="/project" element={Projects} />
          </Routes>
          
          
        </BrowserRouter>
      </>
  );
}

export default App;
