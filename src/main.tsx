import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from '@/App'
import '@/index.scss'

// Créer une application React et la rattache à l'élément avec l'id "root". 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
