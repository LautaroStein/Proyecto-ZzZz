import React, { useState, useRef, useEffect } from 'react'
import OfferCard from './OfferCard'
import { MdOutlineDesignServices, MdAutoFixNormal, MdClass } from "react-icons/md"
import { GiSteampunkGoggles } from "react-icons/gi"
import { BiGame, BiArrowToLeft, BiArrowFromLeft } from "react-icons/bi"
import { FaEthereum } from "react-icons/fa"
import { connect } from 'react-redux'
import offerActions from '../../redux/actions/offerActions'

const recentActivity = [
    {
        img: 'https://www.batiburrillo.net/wp-content/uploads/2019/07/Ampliacio%CC%81n-de-imagen-en-li%CC%81nea-sin-perder-calidad.jpg',
        name: 'test',
        paymentRecived: '0.9',
        day: '24-05'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_EusbJbA9awapVNCaXXT2N2Gs2DG-vUdAujSVTWU3zYqgWeX0qicvCO_ruYaZwC9d8Wk&usqp=CAU',
        name: 'test2',
        paymentRecived: '2.1',
        day: '25-05'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60r5tnQXzU6KInMkIJoWap46UM-9AYN79ATYe_nMx7vV8JBM1xql9-Wp2KvbScGQES2Q&usqp=CAU',
        name: 'test3',
        paymentRecived: '1.23',
        day: '26-05'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16PvBZ6tgnkqxfU5HaMAF77QvWfARo9ANa4uhlixV3pKykDEUmaSlrxXWvoooS2POgpo&usqp=CAU',
        name: 'test4',
        paymentRecived: '21',
        day: '27-05'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0ucR_N7QL2QkbxY6XnfRJ5FwzWg1P52sgPZOaw7q7A5DsO316lM8Swy_LMrw_uhcq8s&usqp=CAU',
        name: 'test5',
        paymentRecived: '3.122',
        day: '28-05'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcs_wagWxykLZBFLjXkoBgSiqGjKVpl9YOD3HPyCNe6j1uBPND2MEwKivogxMd2DeI48&usqp=CAU',
        name: 'test6',
        paymentRecived: '0.5',
        day: '29-05'
    },
]
const recentOrdenado = recentActivity.reverse()
const topCreators = [
    {
        name: "test",
        userImg: "https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?size=626&ext=jpg",
        pays: 43
    },
    {
        name: "test2",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_LU8Fhj8GrIGESFrsUYUJ4G4VFm9-cJEgNI3dQWye_o5cCIcsg1Eaw1S3HtDZarPa8g&usqp=CAU",
        pays: 236
    },
    {
        name: "test3",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-XPULQngwzwNZF9P7djLl7woHsjn3rVSruV05LYDmvBweV-L_uf4G1h6TfDtSLiRQ3U&usqp=CAU",
        pays: 85
    },
    {
        name: "test4",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDF7WaLGD8EMA-d-ACEcltvvu5G07QXqbP9RLBePzLGXh-G5lseKAJnQygAvIeYkQb49k&usqp=CAU",
        pays: 1922
    },
    {
        name: "test5",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlvCx-8kdl8uKcICVemL4Jzas7T2IFrbUyTzJbkRN0lVhBvohDhj1GyxdrEHD3oLWnNw&usqp=CAU",
        pays: 382801
    }
]
let ordenado = topCreators.sort((a, b) => b.pays - a.pays)
const Market = (props) => {
    console.log(ordenado)
    const [filterView, setFilterView] = useState(false)
    const [select, setSelect] = useState({ art: false, cyber: false, gamer: false })
    const [view, setView] = useState({})
    useEffect(() => {
        props.getOffers()
    }, [])
    useEffect(() => {
        let aleatorio = Math.random() * (props.auxOffertsDos.length)
        aleatorio = Math.floor(aleatorio)
        setView(props.auxOffertsDos[aleatorio])
    }, [props.auxOffertsDos])
    const nname = useRef()
    const gamer = useRef()
    const cyberpunk = useRef()
    const art = useRef()
    const classes = useRef()

    const handlerFilter = () => {
        const checkboxes = []
        checkboxes.push(gamer.current)
        checkboxes.push(art.current)
        checkboxes.push(cyberpunk.current)

        const seleccionados = checkboxes.filter(checkbox => checkbox.checked)
        const selectedValues = seleccionados.map(seleccionado => seleccionado.value)
        const selected = Array.from(classes.current).find(option => option.selected)
        let print
        if (selectedValues.length > 0 && (selected && selected.text !== 'All') && nname.current.value === '') {
            print = props.auxOffers.filter(offer => selectedValues.includes(offer.type) && selected.value === offer.clase)
        } else if (selectedValues.length > 0 && !(selected && selected.text !== 'All') && nname.current.value === '') {
            print = props.auxOffers.filter(offer => selectedValues.includes(offer.type))
        } else if (selectedValues.length == 0 && (selected && selected.text !== 'All') && nname.current.value === '') {
            print = props.auxOffers.filter(offer => selected.value === offer.clase)
        } else if (selectedValues.length > 0 && (selected && selected.text !== 'All') && nname.current.value !== '') {
            print = props.auxOffers.filter(offer => selectedValues.includes(offer.type) && selected.value === offer.clase && offer.name === nname.current.value)
        } else if (selectedValues.length > 0 && !(selected && selected.text !== 'All') && nname.current.value !== '') {
            print = props.auxOffers.filter(offer => selectedValues.includes(offer.type) && offer.name === nname.current.value)
        } else if (selectedValues.length == 0 && (selected && selected.text !== 'All') && nname.current.value !== '') {
            print = props.auxOffers.filter(offer => selected.value === offer.clase && offer.name === nname.current.value)
        } else if (selectedValues.length == 0 && !(selected && selected.text !== 'All') && nname.current.value !== '') {
            print = props.auxOffers.filter(offer => offer.name.toLowerCase().trim().startsWith(nname.current.value.toLowerCase()))
        }
        print ? props.filter(print) : props.getOffers()
    }

    console.log(view)

    return (
        <div className='contenedor-todo-market'>
            <div style={{ height: "70px" }} ></div>
            <section className='marketplace-container'>
                <div className={`filter-containter-total-market ${filterView ? "filter-view-activer-market-total-container" : null}`}>
                    <div className={`container-filter-market ${filterView ? "filter-view-activer-market" : null}`}>
                        <span>F</span>
                        <span>I</span>
                        <span>L</span>
                        <span>T</span>
                        <span>E</span>
                        <span>R</span>
                        <div className={`${filterView ? "filter-view-activer" : "filtros-ocultos-market"}`}>
                            <input type="text" placeholder='search by name' ref={nname} onChange={handlerFilter} className='input-filter-market' />
                            <div className='checkbox-art'>
                                <label htmlFor="art" className={`${select.art ? "select-art-checked" : null}`}><MdOutlineDesignServices /></label>
                                <p>Art</p>
                                <input name="art" ref={art} onChange={handlerFilter} onClick={() => { setSelect({ ...select, art: !select.art }) }} value='art' id="art" type="checkbox" />
                            </div>
                            <div className='checkbox-cyberpunk'>
                                <label htmlFor="cyberpunk" className={`${select.cyber ? "select-cyber-checked" : null}`}><GiSteampunkGoggles /></label>
                                <p>CyberPunk</p>
                                <input name='cyberpunk' onChange={handlerFilter} ref={cyberpunk} onClick={() => { setSelect({ ...select, cyber: !select.cyber }) }} value='cyberpunk' id="cyberpunk" type="checkbox" />
                            </div>
                            <div className='checkbox-gamer'>
                                <label htmlFor="gamer" className={`${select.gamer ? "select-gamer-checked" : null}`}><BiGame /></label>
                                <p>Gamer</p>
                                <input name='gamer' ref={gamer} onChange={handlerFilter} onClick={() => { setSelect({ ...select, gamer: !select.gamer }) }} value='gamer' id='gamer' type="checkbox" />
                            </div>
                            <select onChange={handlerFilter} ref={classes} className='select-market-place'>
                                <option defaultValue>All</option>
                                <option value='common'>Common</option>
                                <option value='rare'>Rare</option>
                                <option value='mythical'>Mythical</option>
                            </select>
                        </div>
                    </div>
                    {filterView ? <BiArrowToLeft onClick={() => setFilterView(!filterView)} className='arrow-cierre-filter-market' /> : <BiArrowFromLeft onClick={() => setFilterView(!filterView)} className='arrow-cierre-filter-market' />}
                </div>
                <div className='section-mid-martket-container-total'>
                    {props.auxOffertsDos && props.auxOffertsDos.length > 0 && view && view.user &&
                        <div className='container-nft-ofert-hero'>
                            <div className='img-nft-container-ofert-hero'>
                                <img src={view.img} alt={view.name} />
                            </div>
                            <div className='contenedor-nft-text-hero-ofert'>
                                <h2>{view.name}</h2>
                                <div className='contenedor-nft-user-hero-ofert'>
                                    <div>
                                        <img src={view.user.userImg} alt={view.user.name} />
                                    </div>
                                    <div>
                                        <p>{view.user.name} {view.user.lastName}</p>
                                        <p>@{view.user.name}</p>
                                    </div>
                                </div>
                                <div className='price-container-nft-market-hero'>
                                    <p>Price for NFT</p>
                                    <p><FaEthereum /> {view.price} ETH</p>
                                </div>
                                <div className='contenedor-clases-nft-market-ofert'>
                                    <div className='clases-nft-market-ofert'>
                                        <div><MdClass /></div>
                                        <div>
                                            <p>class</p>
                                            <p>{view.clase}</p>
                                        </div>
                                    </div>
                                    <div className='clases-nft-market-ofert'>
                                        <div><MdAutoFixNormal /></div>
                                        <div>
                                            <p>type</p>
                                            <p>{view.type}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='button-nft-market-ofert'>
                                    <p>Buy</p>
                                </div>
                            </div>
                        </div>}
                    <div className='container-nft-trading-action'>
                        <h2>Trading Auctions</h2>
                        {props.arrayOffers && props.arrayOffers.length > 0 && props.arrayOffers.map(nftOffer => <OfferCard key={nftOffer._id} user={props.user} nftOffer={nftOffer} />)}
                        {props.arrayOffers && props.arrayOffers.length === 0 && <h2>No data found</h2>}
                    </div>
                </div>
                <div className={`recent-creator-container-offerts ${filterView ? "filteractive-container-none" : null}`}>
                    <div className='recent-activity-offerts'>
                        <h2 className='title-recent-activity'>Recent Activity</h2>
                        {
                            recentOrdenado.map((element, i) => {
                                return (
                                    i < 4 &&
                                    <div className='contenedor-recent-activity-nft' key={i}>
                                        <div>
                                            <img src={element.img} alt={element.name} />
                                        </div>
                                        <div>
                                            <h3>{element.name}</h3>
                                            <p>{element.paymentRecived}ETH * {element.day}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='creator-nft-offerts'>
                        <h2>Top Creators</h2>
                        {
                            ordenado.map((e, i) => {
                                return (
                                    i < 3 &&
                                    <div key={i} className='creators-content-market'>
                                        <p>{1 + i++}</p>
                                        <div><img src={e.userImg} /></div>
                                        <div>
                                            <h3>{e.name}</h3>
                                            <p>+ {e.pays} ETH</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapDispatchToProps = {
    getOffers: offerActions.getOffers,
    filter: offerActions.filter
}

const mapStateToProps = (state) => ({
    arrayOffers: state.offerReducers.offers,
    auxOffers: state.offerReducers.auxOffers,
    auxOffertsDos: state.offerReducers.auxOffertsDos,
    user: state.userReducers.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Market)
