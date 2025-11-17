import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage/HomePage'
import ProductPage from './Pages/ProductPage/ProductPage'
import AdminPage from './Pages/AdminPage/AdminPage';

function App() {

  return (
    <BrowserRouter>
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
        <Route 
          path="/adminpage" 
          element={
          <>
            <NavBar showAll={true} />
            
            <AdminPage />
          </>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
