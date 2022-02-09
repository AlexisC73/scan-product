import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductPage from './Page/Product'
import './styles/mains.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/product/:barcode' element={<ProductPage />} />
        <Route path='/product' element={<Header />} />
      </Routes>
    </Router>
  )
}

export default App
