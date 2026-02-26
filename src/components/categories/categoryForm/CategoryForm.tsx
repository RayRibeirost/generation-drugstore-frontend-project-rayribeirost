/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Category from "../../../models/Category";
import { findItem, registerItem, updateItem } from "../../../services/Service";
import { FileTextIcon } from "@phosphor-icons/react";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function CategoryForm() {
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
            ToastAlerta("Não foi possível carregar a categoria solicitada", "info");
            console.log(error)
            previousPage()
        }
    }

    async function updateState(e: ChangeEvent<HTMLInputElement>) {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        })
    }

    async function generateNewItem(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        if (id !== undefined) {
            try {
                await updateItem(`/categorias`, category, setCategory)
                ToastAlerta("A categoria foi atualizada com sucesso!", "success")
            } catch(error) {
                ToastAlerta("Erro ao atualizar a categoria", "error")
            }
        } else {
            try {
              await registerItem(`/categorias`, category, setCategory);
              ToastAlerta("A categoria foi cadastrada com sucesso!", "success");
            } catch (error) {
              ToastAlerta("Erro ao cadastrar a categoria", "error");
              console.log(error)
            }
        }
        previousPage()
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

  return (
    <div className="container border border-gray-400 flex flex-col rounded-xl my-8 overflow-hidden">
      <div className="flex items-center border-b border-gray-400 py-4 px-2 gap-1">
        <FileTextIcon size={25} weight="fill" className="text-red-500" />
        <h1 className="text-left font-bold  text-xl">
          {id === undefined ? "Cadastrar" : "Atualizar"} Categoria
        </h1>
      </div>
      <form onSubmit={generateNewItem} className="flex flex-col items-center">
        <input
          type="text"
          className="border border-gray-500 w-[80%] py-1 px-2 rounded-lg my-6 text-black placeholder:text-gray-500"
          placeholder={id === undefined ? "Digite aqui a nova categoria" : "Atualize a categoria atual"}
          name="descricao"
          value={category.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
        />
        <button
          className="font-bold text-white px-2 py-2 bg-emerald-400 w-full"
          type="submit"
        >
          {id === undefined ? "Cadastrar" : "Atualizar"}
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;
