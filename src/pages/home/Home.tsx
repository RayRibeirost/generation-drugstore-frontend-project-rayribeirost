import {
  CreditCardIcon,
  WalletIcon,
  ClockIcon,
  TruckIcon,
  PlanetIcon,
  CaretDoubleRightIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { findItem } from "../../services/Service";
import type Product from "../../models/Product";
import CardProductHome from "../../components/home/cardProductHome/CardProductHome";
import { ToastAlerta } from "../../utils/ToastAlerta";


function Home() {

  const [products, setProducts] = useState<Product[]>([])

  async function findProducts() {
    try {
      await findItem('/produtos', setProducts)
      console.log(products)
    } catch(error) {
      ToastAlerta("Não foi possível carregar os produtos", "error")
      console.log(error)
    }
  }

  useEffect(() => {
    findProducts();
  }, [products.length]);


  return (
    <div className="container flex flex-col gap-3">
      <div>
        <img src="src/assets/home_banner_image.png" alt="" />
      </div>
      <div className="flex justify-between gap-3 flex-wrap">
        <div className="flex gap-3 items-center bg-gray-200 rounded py-8 px-10">
          <div className="text-emerald-400">
            <CreditCardIcon size={45} weight="fill" />
          </div>
          <div className="flex flex-col items-start text-sm">
            <p className="text-gray-800">Parcele em até</p>
            <p className="text-gray-800 font-bold">6x sem juros</p>
          </div>
        </div>
        <div className="flex gap-3 items-center bg-gray-200 rounded py-8 px-10">
          <div className="text-red-500">
            <WalletIcon size={45} weight="fill" />
          </div>
          <div className="flex flex-col items-start text-sm">
            <p className="text-gray-800">5% de desconto</p>
            <p className="text-gray-800 font-bold">no pix ou boleto</p>
          </div>
        </div>
        <div className="flex gap-3 items-center bg-gray-200 rounded py-8 px-10">
          <div className="text-emerald-400">
            <TruckIcon size={45} weight="fill" />
          </div>
          <div className="flex flex-col items-start text-sm">
            <p className="text-gray-800">Acima de R$200</p>
            <p className="text-gray-800 font-bold">frete grátis</p>
          </div>
        </div>
        <div className="flex gap-3 items-center bg-gray-200 rounded py-8 px-10">
          <div className="text-red-500">
            <ClockIcon size={45} weight="fill" />
          </div>
          <div className="flex flex-col items-start text-sm">
            <p className="text-gray-800">Entrega em</p>
            <p className="text-gray-800 font-bold">até 4 horas</p>
          </div>
        </div>
        <div className="flex gap-3 items-center bg-gray-200 rounded py-8 px-10">
          <div className="text-emerald-400">
            <PlanetIcon size={45} weight="fill" />
          </div>
          <div className="flex flex-col items-start text-sm">
            <p className="text-gray-800">Vendemos até</p>
            <p className="text-gray-800 font-bold">Para Saturno</p>
          </div>
        </div>
      </div>
      <div>
        {products.length === 0 ? (
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-start justify-center">
              <div>
                <h2 className="text-left text-2xl font-bold pb-6">Não há produtos cadastrados!</h2>
                <p className="text-left">
                  Cadastre novos produtos para que os <br />
                  clientes tenham acesso
                </p>
              </div>
              <button className="mt-10 bg-emerald-400 p-3 rounded text-white font-bold">Cadastrar produto</button>
            </div>
            <img src="src/assets/products.svg" alt="" />
          </div>
        ) : (
          <>
            <p className="text-left mb-3 font-bold">
              Últimos produtos adicionados
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {
                products.map((product) => (
                    <CardProductHome key={product.id} product={product}/>
                ))}
            </div>
          </>
        )}
      </div>
      <div>
        <p className="text-left mb-3 font-bold">Marcas</p>
        <div className="flex gap-8 flex-wrap">
          <div className="rounded-full w-30 border border-gray-400">
            <img src="src/assets/lrp.png" alt="" />
          </div>
          <div className="rounded-full w-30 border border-gray-400">
            <img src="src/assets/medley.png" alt="" />
          </div>
          <div className="rounded-full w-30 border border-gray-400">
            <img src="src/assets/eucerin.png" alt="" />
          </div>
          <div className="rounded-full w-30 border border-gray-400">
            <img src="src/assets/lrp.png" alt="" />
          </div>
          <div className="rounded-full w-30 border border-gray-400">
            <img src="src/assets/nivea.png" alt="" />
          </div>
          <div className="rounded-full w-30 border border-gray-400">
            <img src="src/assets/medley.png" alt="" />
          </div>
          <div className="rounded-full w-30 border border-gray-400">
            <img src="src/assets/lrp.png" alt="" />
          </div>
          <div className="rounded-full w-30 border border-gray-400">
            <img src="src/assets/eucerin.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex my-10 justify-around gap-3 flex-wrap">
        <div className="bg-gray-200 flex px-15 py-20 rounded gap-5 items-center w-140 justify-between">
          <div className="text-left flex flex-col">
            <p className="text-3xl text-left mb-6">
              Autoteste <br /> Covid
            </p>
            <button className="bg-emerald-400 text-white py-1.5 px-5 rounded-xl w-20">
              <CaretDoubleRightIcon size={40} />
            </button>
          </div>
          <div className="ml-4">
            <img src="src/assets/covid_test.png" alt="" className="w-60" />
          </div>
        </div>
        <div className="bg-gray-200 flex px-15 py-20 rounded gap-5 items-center w-140 justify-between">
          <div className="text-left flex flex-col">
            <p className="text-3xl text-left mb-6">Vitaminas</p>
            <button className="bg-emerald-400 text-white py-1.5 px-5 rounded-xl w-20">
              <CaretDoubleRightIcon size={40} />
            </button>
          </div>
          <div className="ml-4">
            <img src="src/assets/vitamin.png" alt="" className="h-60" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home