import { BasketIcon, UserIcon, MagnifyingGlassIcon, PlusIcon } from "@phosphor-icons/react"

function Navbar() {
  return (
    <div className="flex-row">
      <div className="w-full flex justify-between items-center px-2 py-3 mb-3">
        <img src="src/assets/colored_brand.svg" alt="" className="w-32" />
        <form className="flex">
          <input type="text" />
          <MagnifyingGlassIcon size={20} />
        </form>
        <div className="flex">
          <BasketIcon size={20} weight="fill" />
          <UserIcon size={20} weight="fill" />
        </div>
      </div>
      <div className="bg-gray-900 flex py-4 px-5 rounded-xl items-center gap-3 justify-between mb-3">
        <button className="bg-emerald-400 flex items-center p-1.5 rounded justify-between">
          <PlusIcon size={16} className="text-white" />
          <span className="font-bold text-white text-sm">
            Adicionar categoria
          </span>
        </button>
        <span className="text-gray-300">Categoria</span>
        <span className="text-gray-300">Categoria</span>
        <span className="text-gray-300">Categoria</span>
        <span className="text-gray-300">Categoria</span>
      </div>
    </div>
  );
}

export default Navbar