import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/login" 
            element={
              <Login />
            }
          />
          <Route 
            path="/checkout" 
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route 
            path="/" 
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
