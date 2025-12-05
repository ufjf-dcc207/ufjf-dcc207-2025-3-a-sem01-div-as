import json from "./data.json"
import LivroReceitas from "./LivroReceitas";
import "./App.css"

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
    imagem: string;
    dificuldade: string;
    tempo: string;
}

function App() {
  return (
    <div>
      <h1>{data.nomeLivro}</h1>
      <LivroReceitas livro={data}/>
    </div>
  )
}

export default App
