import type Product from "../../../models/Product"

interface ProductCardProps {
  product: Product
}

function CardProductHome({product}: ProductCardProps) {

  const fallbackImage =
    "https://play-lh.googleusercontent.com/PfOLuH_dQOHO68PpuKcNi0lwuglClpVIthdngIVYxJZ2vkEFkOfnS4k8u6j0_W56zRo";

  const urlRegex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/i;

  const imageSrc =
    product.foto && urlRegex.test(product.foto) ? product.foto : fallbackImage;

  return (
    <div className="flex flex-col justify-center items-center rounded p-2 w-45 h-40 shadow-xl gap-2 border-gray-300">
      <div className="">
        <img
          src={imageSrc}
          alt={product.detalhes}
          className="h-13"
          onError={(e) =>
            (e.currentTarget.src =
              "https://play-lh.googleusercontent.com/PfOLuH_dQOHO68PpuKcNi0lwuglClpVIthdngIVYxJZ2vkEFkOfnS4k8u6j0_W56zRo")
          }
        />
      </div>
      <p className="text-sm">{product.nome}</p>
      <p className="text-xs text-gray-500">
        {product.categoria?.descricao || "Sem categoria"}
      </p>
      <p className="text-lg font-medium">R${product.preco}</p>
    </div>
  );
}

export default CardProductHome