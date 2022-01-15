import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { image } from '/assets/manimage.jpg'
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
    }, [])

    return (
        <>
        <div className="background-iluminacion">
            <div className="contenedor-home">
                <div className="contenedor-text-home">
                    <p className="text-home-numberone">#1 LARGEST NFT MARKET</p>
                    <h1>Discover, collect, and sell awesome NFTs</h1>
                    <p className="text-home-collect">ProjectZzZz is a collection with more than 4500 unique NFTs. You can easly find some NFT ProjectZzZz.</p>
                    <div>
                        <button><Link to="/Store">Explore</Link></button>
                        <button>Create</button>
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
                <div className='iluminador' style={{ transform: `translateY(${offsetY * 0.4}px) translateX(${offsetY * 0.7}px) scale(${offsetY > 50 ? 1.2 : 1})`, transition: "transform 1.5s" }}></div>
                <div className='iluminador2' style={{ transform: `translateY(${-offsetY * 0.6}px) translateX(${-offsetY * 0.4}px)` }} ></div>
                <div className='iluminador3' style={{ transform: `translateY(${-offsetY * 0.05}px) translateX(${-offsetY * 0.05}px) scale(${offsetY > 10 ? 1.2 : 0.7}`, transition: "transform 1.5s" }}></div>
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
                        <p>At ProjectZzZz, were excited about a brand new type of digital good, called NFT (non-fungible token).<br/> NFTs have exciting properties: theyre unique. probably scarce, tradeable, and usable across multiple applications.</p>
                        <p>Just like physcal goods, you can do whatever you want with them! You could throw them in the trash, gift them to a friend across the world, or go sell them on an open marketplace.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contenedor-about">
            <div className="contenedor-ocho-about">
                <p>Advantages</p>
                <h2>Create and sell your NFTs</h2>
                <div className="contenedor-cards-advantages-home">
                        <div className="card-info-advantages-home">
                       <div className="card-advantages-icon">
                       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                        </svg>
                       </div>
                            <h3>Set up your wallet</h3>
                            <p>Once you've set up your wallet, connect it to ProyectZzZz by clicking the wallet icon in the top right corner. Learn about the <span>wallets we support</span> </p>
                        </div>               
                        <div className="card-info-advantages-home">
                        <div className="card-advantages-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                            <line x1="12" y1="12" x2="20" y2="7.5" />
                            <line x1="12" y1="12" x2="12" y2="21" />
                            <line x1="12" y1="12" x2="4" y2="7.5" />
                            </svg>
                       </div>
                            <h3>Create your collection</h3>
                            <p>Click <span>My Collections</span> and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee. </p>
                        </div>               
                        <div className="card-info-advantages-home">
                        <div className="card-advantages-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="15" y1="8" x2="15.01" y2="8" />
                        <rect x="4" y="4" width="16" height="16" rx="3" />
                        <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                        <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                        </svg>
                       </div>
                            <h3>Add your NFTs</h3>
                            <p>Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
                        </div>               
                        <div className="card-info-advantages-home">
                        <div className="card-advantages-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tags" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z" />
                            <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116" />
                            <path d="M6 9h-.01" />
                            </svg>
                       </div>
                            <h3>List them for sale</h3>
                            <p>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
                        </div>               
                 </div>
             </div>
        </div>


        <div className="contenedor-about">
            <div className="contenedor-ocho-about">
            <p>CREATORS</p>
                <h2>Top Collections of the week</h2>
                <div className="contenedor-cards-topCollection-home">  
                        <div className="card-topCollection">                       
                            <div style={{backgroundImage:'url(/assets/manimage.jpg)'}} className="card-topCollection-image">
                                {/* <img src={'/assets/manimage.jpg'} alt="imagen hombre"/> */}
                                </div>
                            <div className="card-info-topCollection-home">
                                <h1>User Name</h1>
                                <p>price$</p>
                                <p>The NFT & Defi farming initiative built on Ethereum (ETH) blockechain in OpenBid</p>
                            </div>               
                        </div>
                        <div className="card-topCollection">                       
                        <div style={{backgroundImage:'url(/assets/woman1.jpg)'}} className="card-topCollection-image"></div>
                            <div className="card-info-topCollection-home">
                                <h1>User Name</h1>
                                <p>price$</p>
                                <p>The NFT & Defi farming initiative built on Ethereum (ETH) blockechain in OpenBid</p>
                            </div>               
                        </div>
                        <div className="card-topCollection">                       
                        <div style={{backgroundImage:'url(/assets/woman2.jpg)'}} className="card-topCollection-image"></div>
                            <div className="card-info-topCollection-home">
                                <h1>User Name</h1>
                                <p>price$</p>
                                <p>The NFT & Defi farming initiative built on Ethereum (ETH) blockechain in OpenBid</p>
                            </div>               
                        </div>
                              
                 </div>
             </div>
        </div>
       
        {/* <Footer/> */}
        </>
    )
}

export default Home
