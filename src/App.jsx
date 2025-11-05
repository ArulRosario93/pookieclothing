import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage/HomePage'
import ProductPage from './Pages/ProductPage/ProductPage'

function App() {

  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <NavBar />
              <HomePage />
            </>
          } 
        />

        <Route 
          path="/product" 
          element={
          <>
            <NavBar />
            
            <ProductPage />
          </>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
