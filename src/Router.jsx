import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route  path='/buscar' element={<SearchPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
