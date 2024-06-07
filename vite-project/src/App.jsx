// importando router dom element

import { BrowserRouter, Routes, Route } from "react-router-dom";
// importando os componentes
import Header from './components/Header'
import Home from './components/Home'
import Product from './components/Product'
import Mission from './components/Mission'
import History from './components/History'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <div>
       <Header />
    
          <Routes>
            <Route path="/" element={<Home nomePagina="Página Inicial" 
            paginaPrincipal="Detalhamento de toda Página"/>} />
              <Route path="/Mission" element={<Mission nomePagina="Página Missão"
              descriçãoPagina="Nossa Missão"/>} />
              <Route path="/Product" element={<Product nomePagina="Página Produto"
              descriçãoPagina="Nossos Produtos"/>} />
              <Route path="/History" element={<History nomePagina="Página História"
              descriçãoPagina="Nossa História"/>} />
              <Route path="/Contact" element={<Contact nomePagina="Página Contato"
              descriçãoPagina="Nossos Contatos"/>} />
              {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
     
        <Footer />
      </div>
    </>
  )
}
export default App
