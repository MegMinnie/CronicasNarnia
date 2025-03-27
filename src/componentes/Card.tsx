interface ICard {
    capa: string;
    tags: string[];
    titulo: string;
    avaliacao: number;
    descricao: string;
}

function Card({ capa, tags, titulo, avaliacao, descricao }: ICard) {
    return (
        <>
            <section className="Cards bg-black text-white flex w-[95%] justify-center m-auto border-gray-900 border-[1px] lg: h-[250px]">
                <img
                    className="capa w-[120px] md:w-[140px] lg:w-[150px]"
                    src={capa}
                    alt="capa"
                />
                <div className="p-2 flex gap-1 flex-col">
                    <div className="minhasTags flex text-[12px]">
                        <ul className="flex gap-2 text-gray-200 font-bold">
                            {tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <h2 className="titulo font-bold text-justify">{titulo}</h2>

                    <p>IMDB: {avaliacao}</p>
                    <p className="line-clamp-3">{descricao}</p>
                    <button className="bg-yellow-300 font-bold text-black rounded-[5px] mt-1 w-[40%] md:w-[15%] md:p-2 cursor-pointer hover:bg-yellow-400 lg:w-[50%]">
                        Assistir
                    </button>
                </div>
            </section>
        </>
    );
}

export default Card;
