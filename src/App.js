import './App.scss';
import NavBar from './components/navbar/navbar.component';
import "./pages/home/home.component"
import Home from './pages/home/home.component';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    </div>
  );
}

export default App;
