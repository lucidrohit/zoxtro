import './App.scss';
import "./hamburgers.scss"
import NavBar from './components/navbar/navbar.component';
import "./pages/home/home.component"
import Home from './pages/home/home.component';
import Contact from './pages/contact/contact.component';

import { useInView } from 'react-intersection-observer';

function App() {
  const {ref:myRef, inView: isVisible} = useInView();

  return (
    <div className="App" ref={myRef}>
      <NavBar isActive={isVisible} />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
