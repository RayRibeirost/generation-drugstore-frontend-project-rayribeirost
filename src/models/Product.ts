import type Category from "./Category";

export default interface Product {
    id: number;
    nome: string;
    detalhes: string;
    preco: number;
    foto?: string;
    categoria: Category | null;
}