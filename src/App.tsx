import json from "./data.json"

const data = json as LivroReceitas;

type LivroReceitas = {
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
   <h1>Hello, world!</h1>
 )
}

export default App
