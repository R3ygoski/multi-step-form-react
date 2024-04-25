import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import { StepProvider } from './context/StepContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StepProvider>
      <Header/>
      <App />
      <Footer display={'mobile'}/>
    </StepProvider>
  </React.StrictMode>,
)
