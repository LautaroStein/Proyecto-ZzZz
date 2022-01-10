import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import Footer from '../components/Footer'

const Home = () => {

    const [asset, setAsset] = useState('./assets/9778e9361fabdb7fd6eded5ec35102f5.gif')
    const [enter, setEnter] = useState(false)
    const [play, setPLay] = useState(false)
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    return (
        <>
        <div className="background-iluminacion">
            <div className="contenedor-home">
                <div className="contenedor-text-home">
                    <p className="text-home-numberone">#1 LARGEST NFT MARKET</p>
                    <h1>Discover, collect, and sell awesome NFTs</h1>
                    <p className="text-home-collect">ProyectZzZz is a collection with more than 4500 unique NFTs. You can easly find some NFT ProyectZzZz.</p>
                    <div>
                        <button><Link to="/Store">Explore</Link></button>
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
                <div className='iluminador' style={ { transform : `translateY(${ offsetY * 0.4 }px) translateX(${ offsetY * 0.7 }px) scale(${offsetY > 50 ? 1.2 : 1 })`, transition: "transform 1.5s"} }></div>
                <div className='iluminador2'style={ { transform : `translateY(${ -offsetY * 0.6 }px) translateX(${ -offsetY * 0.4 }px)` } } ></div>
                <div className='iluminador3'style={ { transform : `translateY(${ -offsetY * 0.05 }px) translateX(${ -offsetY * 0.05 }px) scale(${offsetY > 10 ? 1.2 : 0.7 }`, transition: "transform 1.5s" } }></div>
        </div>
        <div className="contenedor-about">
            <div className="contenedor-ocho-about">
                <p>WHO WE ARE</p>
                <h2>About us</h2>
                <div className="total-about">
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <h3>Building an open digital economy</h3>
                        <p>At ProyectZzZz, we´re excited about a brand new type of digital good, called NFT (non-fungible token).<br/> NFTs have exciting properties: they´re unique. probably scarce, tradeable, and usable across multiple applications.</p>
                        <p>Just like physcal goods, you can do whatever you want with them! You could throw them in the trash, gift them to a friend across the world, or go sell them on an open marketplace.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default Home
