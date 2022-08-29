import './App.scss';
import "./hamburgers.scss"
import NavBar from './components/navbar/navbar.component';
import "./pages/home/home.component"
import Home from './pages/home/home.component';
import { Routes, Route } from "react-router-dom"
import Contact from './pages/contact/contact.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path="/" element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
