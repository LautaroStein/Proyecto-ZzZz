import { useState } from 'react'

const Home = () => {
    const [asset, setAsset] = useState('./assets/9778e9361fabdb7fd6eded5ec35102f5.gif')
    const [enter, setEnter] = useState(false)
    const [play, setPLay] = useState(false)
    return (
        <div className="background-iluminacion">
            <div className="contenedor-home">
                <div className="contenedor-text-home">
                    <p className="text-home-numberone">#1 LARGEST NFT MARKETPLACE</p>
                    <h1>Discover, collect, and sell awesome NFTs</h1>
                    <p className="text-home-collect">ProyectZzZz is a collection 5000 unique NFTs who you can easly find some NFT ProyectZzZz is largest NFT marketplace.</p>
                    <div>
                        <button>Explore</button>
                        <button>Create</button>
                    </div>
                </div>
                <div className="contenedor-nft">
                    <div className="img"></div>
                    <div className="img"></div>
                    <div className="contenedor-nft-real">
                        <div className="contenedor-nft-total">
                            <div style={{ backgroundImage: `url(${asset})` }} onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} className="image">
                                {(enter && play) &&
                                    <div onClick={() => {
                                        setAsset('./assets/9778e9361fabdb7fd6eded5ec35102f5.gif')
                                        setPLay(false)
                                    }}><i style={{ fontSize: '1.5rem' }} className="fas fa-play"></i></div>
                                }
                                {(enter && !play) &&
                                    <div onClick={() => {
                                        setAsset('./assets/gif-photo.jpeg')
                                        setPLay(true)
                                    }}><i style={{ fontSize: '1.5rem' }} className="fas fa-pause"></i></div>
                                }
                            </div>
                            <div className="texto-nft-home">
                                <h2>Optical Ilustration Art</h2>
                                <div>
                                    <p>Ending in</p>
                                    <p>10m 12s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='iluminador'></div>
            <div className='iluminador2'></div>
            <div className='iluminador3'></div>
        </div>
    )
}

export default Home
