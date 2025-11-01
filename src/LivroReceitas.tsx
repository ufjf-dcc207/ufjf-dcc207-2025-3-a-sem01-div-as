import type { LivroReceitas } from "./App.tsx"

type LivroReceitasProps = {
    livro: LivroReceitas;
}

export default function LivroReceitas({livro}: LivroReceitasProps) {
    return (
        <div className="livro-receitas">
            {livro.categoria.map((c) => (<div key={c.nomeCategoria}><h2>{c.nomeCategoria}</h2>
          <ul>
            {c.receita.map((r) => (
              <li key={r.nomeReceita}>
                <h3>{r.nomeReceita}</h3>
                <h4>Ingredientes: </h4>
                <ul>
                  {r.ingredientes.map((ingrediente, i) => (
                    <li key={i}>{ingrediente}</li>
                  ))}
                </ul>
                <h4>Modo de Preparo:</h4>
                <p>{r.preparo}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
