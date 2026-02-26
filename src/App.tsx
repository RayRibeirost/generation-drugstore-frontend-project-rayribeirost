
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryForm from './components/categories/categoryForm/CategoryForm'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Categories from './pages/categories/Categories'
import Home from './pages/home/Home'
import CategoryDelete from './components/categories/categoryDelete/CategoryDelete'
import Products from './pages/products/Products'
import ProductForm from './components/products/productForm/ProductForm'
import ProductDelete from './components/products/productDelete/ProductDelete'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/cadastrarcategoria" element={<CategoryForm />} />
          <Route path="/editarcategoria/:id" element={<CategoryForm />} />
          <Route path="/deletarcategoria/:id" element={<CategoryDelete />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/cadastrarproduto" element={<ProductForm />} />
          <Route path="/editarproduto/:id" element={<ProductForm />} />
          <Route path="/deletarproduto/:id" element={<ProductDelete />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
