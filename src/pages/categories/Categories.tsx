import { useEffect, useState } from "react";
import CategoryCard from "../../components/categories/categoryCard/CategoryCard";
import { findItem } from "../../services/Service";
import type Category from "../../models/Category";
import { Link } from "react-router-dom";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  async function findCategories() {
    try {
      await findItem("/categorias", setCategories);
    } catch (error) {
      ToastAlerta("Não foi possível carregar as categorias", "error");
      console.log(error);
    }
  }

  useEffect(() => {
    findCategories();
  }, [categories.length]);

  return (
      <div className="my-8">
        {categories.length === 0 ? (
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-start justify-center">
              <div>
                <h2 className="text-left text-2xl font-bold pb-6">
                  Não há categorias cadastradas!
                </h2>
                <p className="text-left">
                  Cadastre novas categorias para que os <br />
                  clientes tenham acesso
                </p>
              </div>
              <Link to={"/cadastrarcategoria"}>
                <button className="mt-10 bg-emerald-400 p-3 rounded text-white font-bold">
                  Cadastrar Categoria
                </button>
              </Link>
            </div>
            <img src="/products.svg" alt="" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((categoria) => (
              <CategoryCard key={categoria.id} category={categoria}/>
            ))}
          </div>
        )}
      </div>
  );
}

export default Categories;
