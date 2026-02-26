import { useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Category from "../../../models/Category"
import { findItem, registerItem, updateItem } from "../../../services/Service"


function CategoryForm() {

    const navigate = useNavigate()
    const [category, setCategory] = useState<Category>({} as Category)
    const { id } = useParams<{ id: string }>();

    function previousPage() {
        navigate("/")
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
                alert("O tema foi atualizado com sucesso!")
            } catch(error) {
                alert("Erro ao atualizar a categoria")
            }
        } else {
            try {
              await registerItem(`/categorias`, category, setCategory);
              alert("O tema foi atualizado com sucesso!");
            } catch (error) {
              alert("Erro ao cadastrar a categoria");
            }
        }
        previousPage()
    }

  return (
    <div>CategoryForm</div>
  )
}

export default CategoryForm