import React, { useState, useEffect } from "react"

const Home = () => {

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[])
    console.log(offsetY)

    return (
        <>
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
                            <div className="image"></div>
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
                <div className='iluminador' style={ { transform : `translateY(${ offsetY * 0.4 }px) translateX(${ offsetY * 0.7 }px) scale(${offsetY > 50 ? 1.2 : 0.7 })`, transition: "transform 1.5s"} }></div>
                <div className='iluminador2'style={ { transform : `translateY(${ -offsetY * 0.6 }px) translateX(${ -offsetY * 0.4 }px)` } } ></div>
                <div className='iluminador3'style={ { transform : `translateY(${ -offsetY * 0.05 }px) translateX(${ -offsetY * 0.05 }px) scale(${offsetY > 10 ? 1.2 : 0.7 }`, transition: "transform 1.5s" } }></div>
        </div>
        <div className="contenedor-about">
            <p>WHO WE ARE</p>
            <h2>About us</h2>
            <div>
                
            </div>
        </div>
        </>
    )
}

export default Home
