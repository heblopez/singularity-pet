import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/location'
          element={<HomePage title='Location' subtitle='This is the location page' />}
        />
        <Route
          path='/blog'
          element={
            <HomePage
              title='Blog'
              subtitle='This is a test of content on the blog page'
            />
          }
        />
        <Route
          path='/services'
          element={<HomePage title='Services' subtitle='This is the services page' />}
        />
        <Route
          path='/about'
          element={<HomePage title='About Us' subtitle='This is the about page' />}
        />
        <Route
          path='/franchise-with-us'
          element={
            <HomePage
              title='Franchise with Us'
              subtitle='This is the franchise with us page'
            />
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
