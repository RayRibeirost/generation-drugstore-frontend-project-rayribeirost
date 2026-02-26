
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryForm from './components/categories/categoryForm/CategoryForm'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Categories from './pages/categories/Categories'
import Home from './pages/home/Home'
import CategoryDelete from './components/categories/categoryDelete/CategoryDelete'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/cadastrarcategoria" element={<CategoryForm />} />
        <Route path="/editarcategoria/:id" element={<CategoryForm />} />
        <Route path="/deletarcategoria/:id" element={<CategoryDelete />} />
        <Route path="/produtos" element={<Home />} />
        <Route path="/cadastrarproduto" element={<Home />} />
        <Route path="/editarproduto/:id" element={<Home />} />
        <Route path="/deletarproduto/:id" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
