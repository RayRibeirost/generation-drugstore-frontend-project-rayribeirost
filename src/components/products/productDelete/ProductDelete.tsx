import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type Product from "../../../models/Product";
import { deleteItem, findItem } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ProductDelete() {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>({} as Product);
  const { id } = useParams<{ id: string }>();

  function previousPage() {
    navigate("/produtos");
  }

  async function findById(id: string) {
    try {
      await findItem(`/produtos/${id}`, setProduct);
    } catch (error) {
      ToastAlerta("Não foi possível carregar o produto solicitado", "info");
      previousPage();
    }
  }

  async function deleteProduct() {
    try {
      await deleteItem(`/produtos/${id}`);
      ToastAlerta("Produto deletado com sucesso!", "success");
    } catch (error) {
      ToastAlerta("Erro ao deletar o produto!", "error");
    }
    previousPage();
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  const fallbackImage =
    "https://play-lh.googleusercontent.com/PfOLuH_dQOHO68PpuKcNi0lwuglClpVIthdngIVYxJZ2vkEFkOfnS4k8u6j0_W56zRo";

  const urlRegex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/i;

  const imageSrc =
    product.foto && urlRegex.test(product.foto) ? product.foto : fallbackImage;

  return (
    <div className="flex flex-col gap-3 my-8 items-center">
      <h1 className="text-3xl font-bold">Deletar produto</h1>
      <h2 className="text-xl">
        Você te tem certeza de que deseja apagar o produto?
      </h2>
      <div className="mt-12">
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
            <button
              className="bg-emerald-400 py-1.5 px-4 text-white font-bold rounded-xl"
              onClick={deleteProduct}
            >
              Sim
            </button>

            <button
              className="bg-red-500 py-1.5 px-4 text-white font-bold rounded-xl"
              onClick={previousPage}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDelete;
