/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findItem, registerItem, updateItem } from "../../../services/Service";
import { FileTextIcon } from "@phosphor-icons/react";
import type Product from "../../../models/Product";
import type Category from "../../../models/Category";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ProductForm() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category>({id: 0, descricao: ""})
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

  async function findCategoryById(id: string) {
    try {
      await findItem(`/categorias/${id}`, setCategory);
    } catch (error) {
      ToastAlerta("Não foi possível carregar a categoria solicitada", "info");
      previousPage();
    }
  }

  async function findCategories() {
    try {
      await findItem("/categorias", setCategories);
    } catch (error) {
      ToastAlerta("Não foi possível carregar as categorias", "info");
      previousPage()
    }
  }

  async function updateState(e: ChangeEvent<HTMLInputElement>) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
      categoria: category
    });
  }

  async function generateNewItem(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const productToSend = {
      ...product,
      preco: Number(product.preco)
    }

    if(isNaN(productToSend.preco)) {
      ToastAlerta("Preço inválido!", "error")
      previousPage()
    }

    if (id !== undefined) {
      try {
        await updateItem(`/produtos`, productToSend, setProduct);
        ToastAlerta("O produto foi atualizado com sucesso!", "success");
      } catch (error) {
        ToastAlerta("Erro ao atualizar o produto", "error");
        console.log(error)
      }
    } else {
      try {
        await registerItem(`/produtos`, productToSend, setProduct);
        ToastAlerta("o produto foi cadastrado com sucesso!", "success");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar o produto", "error");
      }
    }
    previousPage();
  }

  useEffect(() => {
    findCategories();
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  useEffect(() => {
    setProduct({
      ...product,
      categoria: category
    })
  }, [category])

  const loadingCategory = category.descricao === "";

  return (
    <div className="container border border-gray-400 flex flex-col rounded-xl my-8 overflow-hidden">
      <div className="flex items-center border-b border-gray-400 py-4 px-2 gap-1">
        <FileTextIcon size={25} weight="fill" className="text-red-500" />
        <h1 className="text-left font-bold  text-xl">
          {id === undefined ? "Cadastrar" : "Atualizar"} Produto
        </h1>
      </div>
      <form onSubmit={generateNewItem} className="flex flex-col items-center">
        <input
          type="text"
          className="border border-gray-500 w-[80%] py-1 px-2 rounded-lg mt-4 mb-2 text-black placeholder:text-gray-500"
          placeholder={
            id === undefined
              ? "Digite aqui o nome do produto"
              : "Atualize o nome do produto"
          }
          name="nome"
          value={product.nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
        />
        <input
          type="text"
          className="border border-gray-500 w-[80%] py-1 px-2 rounded-lg my-2 text-black placeholder:text-gray-500"
          placeholder={
            id === undefined
              ? "Insira detalhes relevantes sobre o produto"
              : "Atualize os detalhes do produto"
          }
          name="detalhes"
          value={product.detalhes}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
        />
        <input
          type="text"
          className="border border-gray-500 w-[80%] py-1 px-2 rounded-lg my-2 text-black placeholder:text-gray-500"
          placeholder={
            id === undefined
              ? "Digite o preço do produto"
              : "Atualize o preço do produto"
          }
          name="preco"
          value={product.preco}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
        />
        <input
          type="text"
          className="border border-gray-500 w-[80%] py-1 px-2 rounded-lg my-2 text-black placeholder:text-gray-500"
          placeholder={
            id === undefined
              ? "Digite a foto do produto"
              : "Atualize a foto do produto"
          }
          name="foto"
          value={product.foto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
        />
        <select
          name="categoria"
          id="categoria"
          onChange={(e) => findCategoryById(e.currentTarget.value)}
          className="border border-gray-500 w-[80%] py-1 px-2 rounded-lg my-2 mb-6 text-black"
        >
          <option value="" selected disabled className="text-gray-500">
            Selecione uma categoria
          </option>
          {categories.map((category) => (
            <>
              <option value={category.id}>{category.descricao}</option>
            </>
          ))}
        </select>
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

export default ProductForm;
