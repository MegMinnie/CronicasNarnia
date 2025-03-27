import { BsList } from "react-icons/bs";

interface IHeader {
    logo: string;
}

function Header({ logo }: IHeader) {
    return (
        <>
            <header className="bg-black lg:flex items-center justify-between w-full p-1">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <img className="w-[22%] md:w-[8%]" src={logo} alt="logo" />
                    <BsList className="text-white text-3xl lg:hidden" />
                </div>
                <nav>
                    <ul className="text-white hidden lg:flex gap-6">
                        <li>Elenco</li>
                        <li>Fotos</li>
                        <li>Prémios</li>
                        <li>Críticas</li>
                    </ul>
                    <button className="bg-amber-300 text-black px-4 py-2 rounded-md mt-4 lg:mt-0 hidden">
                        Assistir
                    </button>
                </nav>
            </header>
        </>
    );
}

export default Header;
