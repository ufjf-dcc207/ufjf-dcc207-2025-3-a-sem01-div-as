import type { LivroReceitas } from "./App.tsx"

type LivroReceitasProps = {
    livro: LivroReceitas;
}

export default function LivroReceitas({livro}: LivroReceitasProps) {
    return (
        <div className="livro-receitas"></div>
    );
}
