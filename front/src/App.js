import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/general/Footer';
import Header from './components/general/Header';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        
        <Header />

          <Routes>
            <Route exact path = "/"  element ={<Home />}>  </Route>
            <Route path = "/dashboard" element ={<Dashboard />}>  </Route>
            <Route path = "/contact"  element ={<Contact />}> </Route>
          </Routes>

        <Footer />
      
      </Router>
    </div>
  );
}

export default App;
