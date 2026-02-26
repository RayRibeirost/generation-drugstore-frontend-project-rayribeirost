
import './App.css'
import CategoryForm from './components/categories/categoryForm/CategoryForm'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Categories from './pages/categories/Categories'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Categories />
      <CategoryForm />
      <Footer />
    </>
  )
}

export default App
