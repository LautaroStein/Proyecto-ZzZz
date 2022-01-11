import CardNFT from "../components/CardNFT"

const Store = () => {
    const arrayFalso = [
        {
            name: "Mordekaiser Dark Start",
            type: "Gamer",
            clase: "Common",
            price: 40,
            img: "https://images-zzz.netlify.app/asstes/Morde.jpeg"
        },
        {
            name: "Awakening Of An Adventurer",
            clase: "Rare",
            type: "Cyberpunk",
            price: 100,
            img: "https://images-zzz.netlify.app/asstes/awakening.jpg"
        },
        {
            name: "Speed Lover",
            clase: "Mythical",
            type: "Cyberpunk",
            price: 100,
            img: "https://images-zzz.netlify.app/asstes/speed.jpg"
        },
        {
            name: "Okuda Geometric",
            clase: "Rare",
            type: "Arte",
            price: 78,
            img: "https://images-zzz.netlify.app/asstes/okuda.jpg"
        }
    ]


    return (
        <div>
            <div style={{ height: "120px" }} ></div>
            <div className="contenedor-store-public">
                <div>
                    <h1>Collect & Sell Your NFT</h1>
                    <p>Live the new life check it out now.</p>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            <div className="contenedor-top-sellers-store">
                <div className="sellers">
                    <div className="title-top-sellers">
                        <p>Top Sellers</p>
                    </div>
                    <div className="contenedor-top-sellers-cards">
                        {
                            arrayFalso.map((element, index) => {
                                return (
                                    <CardNFT name={element.name} type={element.type} price={element.price} img={element.img} clase={element.clase} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="contenedor-top-sellers-store">
                <div className="sellers">
                    <div className="title-top-sellers flex-all-sellers">
                        <p>All</p>
                        <div className="filter-all-select">
                            <select>
                                <option>Class</option>
                            </select>
                            <select>
                                <option>Type</option>
                            </select>
                        </div>
                    </div>
                    <div className="contenedor-top-sellers-cards">
                        {
                            arrayFalso.map((element, index) => {
                                return (
                                    <CardNFT name={element.name} type={element.type} price={element.price} img={element.img} clase={element.clase} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store
