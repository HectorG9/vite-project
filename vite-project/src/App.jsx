import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Header from './components/Header'
import History from './components/History'
import Mission from './components/Mission'
import Footer  from './components/Footer'
import Product from './components/Product'
function App() {
  return (  
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home
            nomePagina='Home' 
            paginaPrincipal='Detalhe de toda página' />} />
          <Route path='/Mission' element={<Mission nomePagina='Missão' 
            descriçãoPagina='Nossa Missão' />} />
          <Route path='/History' element={<History nomePagina='Historia' 
            descriçãoPagina='Nossa Historia' />} />
          <Route path='/Product' element={<Product nomePagina='Produtos' 
            descriçãoPagina='Nossos Produtos' />} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
        <Footer nomefooter='Footer'/>
    </div>
  )
}

export default App

