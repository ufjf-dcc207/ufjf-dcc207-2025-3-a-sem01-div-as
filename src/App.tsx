import json from "./data.json"
import LivroReceitas from "./LivroReceitas";

const data = json as LivroReceitas;

export type LivroReceitas = {
    nomeLivro: string;
    categoria: Array<Categorias>;
}

type Categorias = {
    nomeCategoria: string;
    receita: Array<CardReceita>;
}

type CardReceita = {
    nomeReceita: string;
    ingredientes: Array<string>;
    preparo: string;
}

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}

export default App
