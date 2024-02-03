import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import { DataContextProvider } from './context/Datacontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider url={'https://clean-dog.onrender.com/'} >
      <App />
    </DataContextProvider>
  </React.StrictMode>,
)
