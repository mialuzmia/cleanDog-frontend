import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDataContext } from './hooks/useDataContext'

import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Header from './components/Header'

const Router = () => {
  const { data, loading } = useDataContext();
  console.log(data);


  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        {/* <Route path='/'  element={<Home />}/> */}
        <Route  path='/' element={<SearchPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
