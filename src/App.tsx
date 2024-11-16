import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/location' element={<HomePage />} />
        <Route path='/blog' element={<HomePage />} />
        <Route path='/services' element={<HomePage />} />
        <Route path='/about' element={<HomePage />} />
        <Route path='/franchise-with-us' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
