import { useEffect, useState } from "react"
import ProductCard from "../../components/products/productCard/ProductCard"
import type Product from "../../models/Product"
import { findItem } from "../../services/Service"
import { Link } from "react-router-dom"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Products() {

  const [products, setProducts] = useState<Product[]>([])
  
    async function findProducts() {
      try {
        await findItem('/produtos', setProducts)
        console.log(products)
      } catch(error) {
        ToastAlerta("Não foi possível carregar os produtos", "error")
        console.log(error)
      }
    }
  
    useEffect(() => {
      findProducts();
    }, [products.length]);
  

  return (
    <div>
      <div className="my-8">
        {products.length === 0 ? (
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-start justify-center">
              <div>
                <h2 className="text-left text-2xl font-bold pb-6">
                  Não há produtos cadastrados!
                </h2>
                <p className="text-left">
                  Cadastre novos produtos para que os <br />
                  clientes tenham acesso
                </p>
              </div>
              <Link to={"/cadastrarproduto"}>
                <button className="mt-10 bg-emerald-400 p-3 rounded text-white font-bold">
                  Cadastrar Produto
                </button>
              </Link>
            </div>
            <img src="src/assets/products.svg" alt="" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products