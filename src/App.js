import CounterExample from './Components/CounterExample';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HelloWorld from './Components/HelloWorld'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';

function App() {
  return (
    <div>
      <Router>

        <Header />

        <div className="p-3">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products/:id' element={<Product />} />
          </Routes>
        </div>

        <Footer />

      </Router>

      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
