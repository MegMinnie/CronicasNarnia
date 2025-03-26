import "./App.css";
import Header from "./componentes/Header";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";
import logo from "./assets/logo.jpg";
import imgPrincipal from "./assets/imgPrincipal.jpeg";

function App() {
    return (
        <>
            <Header logo={logo} />
            <main
                className="bg-cover bg-center text-white font-mediun p-2"
                style={{ backgroundImage: `url(${imgPrincipal})` }}
            >
                <h1 className="text-2xl text-center font-bold">
                    As Crônicas de Nárnia
                </h1>
                <h1 className="text-2xl text-center font-bold text-yellow-300">
                    Triologia
                </h1>
                <div className="flex gap-[10px] text-xs font-bold text-center w-[100%] mb-[10px] mt-[10px] justify-center text-gray-100">
                    <span>DRAMA</span>
                    <span>FANTASIA</span>
                    <span>AVENTURA</span>
                    <span>INFANTIL</span>
                </div>
                <section className="text-justify">
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
                <button className="bg-yellow-300 border-none font-bold p-1 rounded-[5px] text-black w-[60%] mx-auto text-center flex justify-center items-center text-xl mt-2">
                    Assistir trilogia
                </button>

                <Card />
            </main>

            <Footer />
        </>
    );
}

export default App;
