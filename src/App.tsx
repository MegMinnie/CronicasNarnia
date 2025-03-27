import "./App.css";
import Header from "./componentes/Header";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";
import logo from "./assets/logo.jpg";
import imgPrincipal from "./assets/imgPrincipal.jpeg";
import filme1 from "./assets/filme1.jpg";
import filme2 from "./assets/filme2.jpg";
import filme3 from "./assets/filme3.jpg";

function App() {
    return (
        <>
            <Header logo={logo} />
            <main
                className="bg-cover bg-center text-white font-mediun p-2"
                style={{ backgroundImage: `url(${imgPrincipal})` }}
            >
                <h1 className="md:text-[40px]  pl-[5%] font-bold text-[30px]">
                    As Crônicas de Nárnia
                </h1>
                <h1 className="md:text-[40px] font-bold text-yellow-300 md:pl-[38%]  pl-[5%] text-[30px]">
                    Triologia
                </h1>
                <div className="flex gap-[10px] text-xs font-bold pl-[5%] w-[100%] mb-[20px] mt-[20px]  text-gray-200">
                    <span>DRAMA</span>
                    <span>FANTASIA</span>
                    <span>AVENTURA</span>
                    <span>INFANTIL</span>
                </div>
                <section className="text-justify md:w-[70%] md:text-left p-2 md:pl-[5%] flex flex-col gap-2">
                    <p>
                        As Crônicas de Nárnia é uma série de filmes baseada nos
                        livros de C.S. Lewis. A história acompanha um grupo de
                        irmãos que, ao serem enviados para o campo durante a
                        Segunda Guerra Mundial, descobrem um mundo mágico
                        através de um guarda-roupa.
                    </p>
                    <p>
                        Nesse novo mundo, eles se encontram em uma terra
                        encantada, governada por forças do bem e do mal. Juntos,
                        enfrentam desafios, formam alianças e aprendem lições
                        sobre coragem, amizade e sacrifício.
                    </p>
                    <p>
                        Com personagens como o sábio leão Aslan e a temida
                        Feiticeira Branca, os filmes exploram temas de luta
                        entre o bem e o mal. Cada aventura leva os irmãos a
                        crescerem e a entenderem seu próprio papel em um destino
                        maior.
                    </p>
                    <p>
                        Ao longo da trilogia, eles enfrentam novas ameaças e
                        ajudam a restaurar a paz e a justiça em Nárnia. A
                        história mistura magia, ação e emoções profundas, com
                        uma narrativa que encanta diferentes gerações.
                    </p>
                </section>
                <button className="bg-yellow-300 border-none font-bold p-1 rounded-[5px] text-black w-[60%] mx-auto text-center flex justify-center items-center text-xl mt-2 md:w-[20%] md:p-2 md:mr-[75%] m-6">
                    Assistir trilogia
                </button>
                <div className="flex flex-col gap-3 itens-center justify-center m-auto">
                    <Card
                        capa={filme1}
                        tags={["FANTASIA", "AVENTURA"]}
                        titulo="As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa"
                        avaliacao={6.9}
                        descricao="Durante os bombardeios da Segunda Guerra Mundial de Londres, quatro irmãos ingleses são enviados para uma casa de campo onde eles estarão seguros. Um dia, Lucy encontra um guarda-roupa que a transporta para um mundo mágico chamado Nárnia. Depois de voltar, ela logo volta a Nárnia com seus irmãos, Peter e Edmund, e sua irmã, Susan. Lá eles se juntam ao leão mágico, Aslan, na luta contra a Feiticeira Branca."
                    />

                    <Card
                        capa={filme2}
                        tags={["INFANTIL", "AVENTURA"]}
                        titulo="As Crônicas de Nárnia: O Príncipe Caspian"
                        avaliacao={6.5}
                        descricao="Após os eventos de O Leão, a Feiticeira e o Guarda-Roupa, os irmãos Pevensie retornam a Nárnia e descobrem que se passaram centenas de anos. Nárnia está sob o domínio dos Telmarinos, e o rei Miraz usurpou o trono. O verdadeiro herdeiro, o Príncipe Caspian, foge para reunir um exército e libertar a terra. Com a ajuda dos Pevensie e de Aslam, Caspian luta para retomar o trono. Juntos, enfrentam batalhas e traições para restaurar a liberdade e a paz em Nárnia."
                    />

                    <Card
                        capa={filme3}
                        tags={["INFANTIL", "AVENTURA"]}
                        titulo="As Crônicas de Nárnia: A Viagem do Peregrino da Alvorada"
                        avaliacao={6.3}
                        descricao="os irmãos Edmund e Lucy Pevensie, junto com seu primo Eustáquio, embarcam em uma aventura a bordo do navio Peregrino da Alvorada, comandado por Caspian. Eles viajam por ilhas misteriosas em busca de sete Lords Telmarinos desaparecidos. Durante a jornada, enfrentam desafios, criaturas fantásticas e forças das trevas. Encontro com Aslam guia os personagens em suas escolhas, restaurando a ordem em Nárnia. O filme explora temas de coragem, redenção e crescimento pessoal."
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
