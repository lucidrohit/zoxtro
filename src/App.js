import './App.scss';
import "./hamburgers.scss"
import NavBar from './components/navbar/navbar.component';
import "./pages/home/home.component"
import Home from './pages/home/home.component';
import Contact from './pages/contact/contact.component';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Contact/>
    </div>
  );
}

export default App;
