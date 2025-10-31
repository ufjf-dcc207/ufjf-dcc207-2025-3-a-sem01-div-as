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
                <h4>Ingredientes: {r.ingredientes}</h4>
                <h4>{r.preparo}</h4>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
