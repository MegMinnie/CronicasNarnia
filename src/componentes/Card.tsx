interface ICard {
    capa: string;
}

function Card({ capa }: ICard) {
    return (
        <>
            <section className="">
                <img className="" src={capa} alt="capa" />
                <div className="">
                    <div>
                        <span> DRAMA</span>
                        <span>FANTASIA</span>
                    </div>
                    <h2 className="titulo"></h2>
                </div>
            </section>
        </>
    );
}

export default Card;
