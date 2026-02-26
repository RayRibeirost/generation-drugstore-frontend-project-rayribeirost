import type Product from "../../../models/Product"
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {

  const fallbackImage =
    "https://play-lh.googleusercontent.com/PfOLuH_dQOHO68PpuKcNi0lwuglClpVIthdngIVYxJZ2vkEFkOfnS4k8u6j0_W56zRo";

  const urlRegex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/i;

  const imageSrc =
    product.foto && urlRegex.test(product.foto) ? product.foto : fallbackImage;

  return (
    <div className="flex flex-col justify-center items-center rounded p-2 w-55 h-50 shadow-xl gap-2 border-gray-300">
      <div>
        <img
          src={imageSrc}
          alt={product.detalhes}
          onError={(e) =>
            (e.currentTarget.src =
              "https://play-lh.googleusercontent.com/PfOLuH_dQOHO68PpuKcNi0lwuglClpVIthdngIVYxJZ2vkEFkOfnS4k8u6j0_W56zRo")
          }
          className="h-13"
        />
      </div>
      <p className="text-sm">{product.nome}</p>
      <p className="text-xs text-gray-500">
        {product.categoria?.descricao || "Sem categoria"}
      </p>
      <p className="text-lg font-medium">R${product.preco}</p>
      <div className="flex gap-1">
        <Link to={`/editarproduto/${product.id}`}>
          <button className="bg-emerald-400 py-1.5 px-4 text-white font-bold rounded-xl">
            Editar
          </button>
        </Link>
        <Link to={`/deletarproduto/${product.id}`}>
          <button className="bg-red-500 py-1.5 px-4 text-white font-bold rounded-xl">
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard