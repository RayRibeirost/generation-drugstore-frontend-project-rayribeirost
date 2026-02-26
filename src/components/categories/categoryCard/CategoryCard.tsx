import type Category from "../../../models/Category"
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: Category
}

function CategoryCard({category}: CategoryCardProps) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-gray-300">
      <div className="bg-gray-200 border-b border-gray-300">
        <h1 className="font-bold text-xl">Categoria {category.id}</h1>
      </div>
      <div className="bg-white py-3">
        <p className="text-lg">{category.descricao}</p>
      </div>
      <div className="bg-gray-200 border-t border-gray-300 py-2 flex gap-2 justify-around">
        <Link to={`/editarcategoria/${category.id}`}>
          <button className="bg-emerald-400 py-1.5 px-8 text-white font-bold rounded-xl">
            Editar
          </button>
        </Link>
        <Link to={`/deletarcategoria/${category.id}`}>
          <button className="bg-red-500 py-1.5 px-8 text-white font-bold rounded-xl">
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard