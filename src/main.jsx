import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import axios from 'axios'

//Style
import './index.scss'

axios.defaults.baseURL = "http://localhost:8080/api"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)