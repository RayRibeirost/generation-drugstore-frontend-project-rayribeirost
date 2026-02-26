import { PlusIcon, ListIcon } from "@phosphor-icons/react"
import { findItem } from "../../services/Service"
import { useEffect, useState } from "react";
import type Category from "../../models/Category";
import { Link } from "react-router-dom";

function Navbar() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [categories, setCategories] = useState<Category[]>([])

  async function findCategories() {
      try {
        await findItem('/categorias', setCategories)
      } catch(error) {
        alert("Não foi possível carregar as categorias")
        console.log(error)
      }
    }

    useEffect(() => {
      findCategories();
    }, [categories.length]);

  return (
    <div className="flex-row">
      <div className="w-full flex justify-between items-center px-2 py-3 mb-3">
        <Link to={"/"}>
          <img src="src/assets/colored_brand.svg" alt="" className="w-32" />
        </Link>
        <div className="flex gap-2">
          <Link to={"/categorias"}>
            <p>Categorias</p>
          </Link>
          <Link to={"/produtos"}>
            <p>Produtos</p>
          </Link>
        </div>
      </div>
      <div className="bg-gray-900 flex py-4 px-5 rounded-xl items-center gap-3 justify-between mb-3">
        <div>
          <button className="bg-emerald-400 flex items-center p-1.5 rounded gap-2">
            <PlusIcon size={16} className="text-white" />
            <Link to={"/cadastrarcategoria"}>
              <span className="font-bold text-white text-sm">
                Adicionar categoria
              </span>
            </Link>
          </button>
        </div>

        <div className="relative">
          <button
            className={`rounded p-1 cursor-pointer ${isOpen ? "none" : "border border-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-white font-bold">Categorias</span>
            ) : (
              <>
                <ListIcon size={25} color="white" />
              </>
            )}
          </button>
          <div
            className={`absolute right-0 mt-2 bg-gray-900 rounded ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            <ul className="text-white text-right p-3 space-y-1 max-h-60 overflow-y-auto">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="hover:text-emerald-400 cursor-pointer"
                >
                  {category.descricao}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar