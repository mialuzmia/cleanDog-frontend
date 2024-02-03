import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import { useDataContext } from './hooks/useDataContext'

const Router = () => {
  const { data, loading } = useDataContext();
  console.log(data);


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
