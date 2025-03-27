import { useState } from "react";

interface ICard {
    capa: string;
    tags: string[];
    titulo: string;
    avaliacao: number;
    descricao: string;
}

function Card({ capa, tags, titulo, avaliacao, descricao }: ICard) {
    const [capaState] = useState<string>(capa);
    const [tagsState] = useState<string[]>(tags);
    const [tituloState] = useState<string>(titulo);
    const [avaliacaoState] = useState<number>(avaliacao);
    const [descricaoState] = useState<string>(descricao);

    return (
        <>
            <section className="Cards bg-black text-white flex w-[95%]  justify-center m-auto">
                <img
                    className="capa w-[120px] md:w-[140px]"
                    src={capaState}
                    alt="capa"
                />
                <div className="p-2 flex gap-1 flex-col">
                    <div className="minhasTags flex text-[12px]">
                        <ul className="flex gap-2 text-gray-200 font-bold">
                            {tagsState.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <h2 className="titulo font-bold text-justify">
                        {tituloState}
                    </h2>

                    <p>IMDB: {avaliacaoState}</p>
                    <p className="line-clamp-3">{descricaoState}</p>
                    <button className="bg-yellow-300 font-bold text-black rounded-[5px] mt-1 w-[40%] md:w-[15%] md:p-2">
                        Assistir
                    </button>
                </div>
            </section>
        </>
    );
}

export default Card;
