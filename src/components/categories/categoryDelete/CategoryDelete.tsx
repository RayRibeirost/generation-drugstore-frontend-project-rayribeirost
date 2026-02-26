import { useNavigate, useParams } from "react-router-dom";
import { deleteItem, findItem } from "../../../services/Service";
import { useEffect, useState } from "react";
import type Category from "../../../models/Category";

function CategoryDelete() {

    const navigate = useNavigate()
    const [category, setCategory] = useState<Category>({} as Category)
    const { id } = useParams<{ id: string }>();

    function previousPage() {
        navigate("/categorias")
    }

    async function findById(id: string) {
        try {
            await findItem(`/categorias/${id}`, setCategory)
        } catch(error) {
            alert("Não foi possível carregar a categoria solicitada");
            console.log(error)
            previousPage()
        }
    }

    async function deleteCategory(){
        try{
            await deleteItem(`/categorias/${id}`)
            alert('Categoria deletada com sucesso!')
        } catch(error) {
            alert('Erro ao deletar a categoria!')
        }
        previousPage()
    }

    useEffect(() => {
            if (id !== undefined) {
                findById(id)
            }
        }, [id])

  return (
    <div className="flex flex-col gap-3 my-8">
        <h1 className="text-3xl font-bold">Deletar categoria</h1>
        <h2 className="text-xl">Você te tem certeza de que deseja apagar a categoria?</h2>
        <div className="flex flex-col rounded-xl overflow-hidden border border-gray-300">
        <div className="bg-gray-200 border-b border-gray-300">
            <h1 className="font-bold text-xl">Categoria {category.id}</h1>
        </div>
        <div className="bg-white py-3">
            <p className="text-lg">{category.descricao}</p>
        </div>
        <div className="bg-gray-200 border-t border-gray-300 py-2 flex gap-2 justify-around">
            <button className="bg-emerald-400 py-1.5 px-8 text-white font-bold rounded-xl" onClick={deleteCategory}>
            Sim
            </button>
            <button className="bg-red-500 py-1.5 px-8 text-white font-bold rounded-xl" onClick={previousPage}>
            Nao
            </button>
        </div>
        </div>
    </div>
  );
}

export default CategoryDelete