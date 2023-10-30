import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Contact } from './pages';
import './App.css'
import Header from './components/Header';

function App() {

  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
