import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Contact } from './pages';
import { Header } from './components';
import './App.css'

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
