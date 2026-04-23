import './App.css';

import Home from './components/Home.jsx';
import Missing from './components/Missing.jsx';
import Layout from './components/Layout.jsx';
import Book from './components/Book.jsx';
import Swap from './components/Swap.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {

  // Check if the current path is the home page ("/home")
  const location = useLocation();

  return (
    <div className="app-container">

      <main className="main-content">
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* public routes */}
            <Route path='/' element={<Home />} />
            <Route path='/Books/:bookId' element={<Book />} />
            <Route path='/swap/:bookId' element={<Swap />} />

            {/* catch all */}
            <Route path='*' element={<Missing/>} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App;