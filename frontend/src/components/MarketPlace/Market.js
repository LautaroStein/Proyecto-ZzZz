import React, { useState, useRef, useEffect } from 'react'
import OfferCard from './OfferCard'
import SoldCard from './SoldCard'
import { connect } from 'react-redux'
import offerActions from '../../redux/actions/offerActions'

const initialArraySolds = [{ userName: 'user', userImg: 'https://interlineales.com/wp-content/uploads/2016/10/dummy-user-img.png', nftId: 'nft id', price: 124 }, { userName: 'user 1', userImg: 'https://interlineales.com/wp-content/uploads/2016/10/dummy-user-img.png', nftId: 'nft id 1', price: 1241 }]


const Market = (props) => {
    const [arraySolds, setSaleOffers] = useState(initialArraySolds)

    useEffect(() => {
        props.getOffers()
    }, [])
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

    return (
        <>
            <div style={{ height: "70px" }} ></div>
            <section className="marketplace-container">
                <h1>NFTs MARKETPLACE</h1>
                <article className="marketplace-content">
                    <div className='offer-container'>
                        <h2 className="offer-title">Find your perfect NFT</h2>
                        <div className='market-nfts-search-title'>
                            <input type="text" placeholder='search by name' ref={nname} onChange={handlerFilter} />
                            <fieldset>
                                <legend>Filter By Type</legend>
                                <div className='checkbox-art'>
                                    <label htmlFor="art">Art</label>
                                    <input name="art" ref={art} onChange={handlerFilter} value='art' id="art" type="checkbox" />
                                </div>
                                <div className='checkbox-cyberpunk'>
                                    <label htmlFor="cyberpunk">Cyberpunk</label>
                                    <input name='cyberpunk' onChange={handlerFilter} ref={cyberpunk} value='cyberpunk' id="cyberpunk" type="checkbox" />

                                </div>
                                <div className='checkbox-gamer'>
                                    <label htmlFor="gamer">Gamer</label>
                                    <input name='gamer' ref={gamer} onChange={handlerFilter} value='gamer' id='gamer' type="checkbox" />
                                </div>
                            </fieldset>
                            {/* refresh button props.getOffers() */}
                            <select onChange={handlerFilter} ref={classes}>
                                <option defaultValue>All</option>
                                <option value='common'>common</option>
                                <option value='rare'>rare</option>
                                <option value='mythical'>mythical</option>
                            </select>
                        </div>
                        <div className='nfts-offer-container'>
                            {props.arrayOffers && props.arrayOffers.length > 0 && props.arrayOffers.map(nftOffer => <OfferCard key={nftOffer._id} user={props.user} nftOffer={nftOffer} />)}
                            {props.arrayOffers && props.arrayOffers.length === 0 && <h2>No data found</h2>}
                        </div>
                    </div>
                    <div className="solds-container">
                        <h2>Current Solds</h2>
                        <div className='nfts-solds-container'>
                            {arraySolds.map(soldNft => <SoldCard key={soldNft.price} soldNft={soldNft} />)}

                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

const mapDispatchToProps = {
    getOffers: offerActions.getOffers,
    filter: offerActions.filter
}

const mapStateToProps = (state) => ({
    arrayOffers: state.offerReducers.offers,
    auxOffers: state.offerReducers.auxOffers,
    user: state.userReducers.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Market)
