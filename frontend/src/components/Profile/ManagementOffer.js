import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import nftActions from '../../redux/actions/nftActions'
import offerActions from '../../redux/actions/offerActions'

const CreateOffer = (props) => {
    const [edit, setEdit] = useState(false)
    const [features, setFeatures] = useState(false)
    const [onCardHover, setOnCardHover] = useState({ bool: false, id: '' })
    const [editNft, setEditNft] = useState('')
    const nname = useRef(null)
    const type = useRef(null)
    const clase = useRef(null)
    const img = useRef(null)
    const stock = useRef(null)
    const price = useRef(null)

    useEffect(() => {
        props.getNfts()
        props.getOffers()
    }, [])

    const handlerSetCreate = () => {

        setEdit(false)
    }
    const handlerDelete = (nftId) => {
        props.deleteNft(nftId)
    }
    const handlerEdit = async (nftId) => {
        const nft = await props.getNft(nftId)
        setEditNft(nft)
    }
    const handlerCreate = () => {
        const createdBody = {}
        nname.current.value !== '' && (createdBody['name'] = nname.current.value)
        type.current.value !== '' && (createdBody['type'] = stock.current.value)
        clase.current.value !== '' && (createdBody['clase'] = clase.current.value)
        stock.current.value !== '' && (createdBody['stock'] = stock.current.value)
        img.current.value !== '' && (createdBody['img'] = img.current.value)
        price.current.value !== '' && (createdBody['price'] = price.current.value)
        props.addNft({ ...createdBody })
    }
    const handlerUpdate = () => {
        const updatedBody = {}

        editNft.nftId.name && (updatedBody['name'] = editNft.nftId.name)
        editNft.nftId.type && (updatedBody['type'] = editNft.nftId.type)
        editNft.nftId.clase && (updatedBody['clase'] = editNft.nftId.clase)
        editNft.nftId.stock && (updatedBody['stock'] = editNft.nftId.stock)
        editNft.nftId.img && (updatedBody['img'] = editNft.nftId.img)
        editNft.nftId.price && (updatedBody['price'] = editNft.nftId.price)

        props.updateNft(editNft.nftId._id, { ...updatedBody })

    }

    const handlerAccept = (offerId) => {
        props.offerUpdate(offerId, { valid: 'accepted' })
    }
    const handlerReject = (offerId) => {
        // array de los rechazados para posteriormente darlos de baja si no son modificados
        props.offerUpdate(offerId, { valid: 'rejected' })
    }
    return (

        <div className="management">
            {/* crud nfts */}
            <article className="nfts-management">
                <div className='main-nfts-content'>
                    <div className='nfts-search-title'>
                        <h2>Offer Management</h2>
                        <input type="text" placeholder='search by nft name' onChange={(e) => props.filter(props.aux, e.target.value.trim())} />
                    </div>
                    <div className='nfts-container'>
                        {props.nfts.length > 0 && props.nfts.map(nft =>
                            <div key={nft._id} onMouseEnter={() => setOnCardHover({ bool: true, id: nft._id })} onMouseLeave={() => setOnCardHover({ bool: false, id: nft._id })} style={{ backgroundImage: `url(${nft.img})` }} className="cardy">
                                <div className='body-nft-admin-card'>
                                    <h2>{nft.name}</h2>
                                </div>
                                {(onCardHover.bool && onCardHover.id === nft._id) &&
                                    <div className='management-actions'>
                                        <button onClick={() => handlerDelete(nft._id)}>DELETE</button>
                                        <button onClick={() => { handlerEdit(nft._id); setEdit(true); setFeatures(true) }}>EDIT</button>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </div>
                <aside className="right-side-management">
                    <div className='edit-form'>
                        <h2><span>{edit ? 'Edit' : 'Create'}</span> NFT Form</h2>
                        <div className='nft-form'>
                            {features ?
                                (editNft.nftId) &&
                                <>
                                    <h3>Elemental Features</h3>
                                    <input type="text" placeholder='name' value={editNft.nftId.name} onChange={(e) => setEditNft({ nftId: { name: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    <input type="text" placeholder="type" value={editNft.nftId.type} onChange={(e) => setEditNft({ nftId: { type: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    <input type="text" placeholder="class" value={editNft.nftId.clase} onChange={(e) => setEditNft({ nftId: { clase: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    <input type="text" placeholder="img" value={editNft.nftId.img} onChange={(e) => setEditNft({ nftId: { img: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    <input min='0' type="number" placeholder="price" value={editNft.nftId.price} onChange={(e) => setEditNft({ nftId: { price: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    <input min='0' type="number" placeholder="stock" value={editNft.nftId.stock} onChange={(e) => setEditNft({ nftId: { stock: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    {editNft.nftId.features.hp &&
                                        <>
                                            <h3>Game Features</h3>
                                            <h4>Comming Son</h4>
                                        </>
                                    }
                                </> :
                                <>
                                    <input type="text" placeholder='name' ref={nname} />
                                    <input type="text" placeholder="type" ref={type} />
                                    <input type="text" placeholder="class" ref={clase} />
                                    <input type="text" placeholder="img" ref={img} />
                                    <input min='0' type="number" placeholder="price" ref={price} />
                                    <input min='0' type="number" placeholder="stock" ref={stock} />

                                </>
                            }
                        </div>
                        <div className='action-nft-form'>
                            <i onClick={handlerSetCreate} className="fas fa-plus-circle"></i>
                        </div>

                        {!edit && <button onClick={handlerCreate} className='submit-edit-form'>Create</button>}
                        {edit && <button onClick={handlerUpdate} className='submit-edit-form'>Update</button>}
                    </div>
                    <div className='create-form'></div>
                </aside>
            </article>
            <article className="nfts-management">
                <div className='main-nfts-content'>
                    <div className='nfts-search-title'>
                        <h2>Offer Status</h2>
                        <input type="text" placeholder='search by nft name' onChange={(e) => props.filter(props.aux, e.target.value.trim())} />
                    </div>
                    <div className='nfts-container'>
                        {props.nfts.length > 0 && props.nfts.map(nft =>
                            <div key={nft._id} onMouseEnter={() => setOnCardHover({ bool: true, id: nft._id })} onMouseLeave={() => setOnCardHover({ bool: false, id: nft._id })} style={{ backgroundImage: `url(${nft.img})` }} className="cardy">
                                <div className='body-nft-admin-card'>
                                    <h2>{nft.name}</h2>
                                </div>
                                {(onCardHover.bool && onCardHover.id === nft._id) &&
                                    <div className='management-actions'>
                                        <button onClick={() => handlerDelete(nft._id)}>DELETE</button>
                                        <button onClick={() => { handlerEdit(nft._id); setEdit(true); setFeatures(true) }}>EDIT</button>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </div>
                <aside className="right-side-management">
                    <div className='edit-form'>
                        <h2><span>{edit ? 'Edit' : 'Create'}</span> NFT Form</h2>
                        <div className='nft-form'>
                            {features ?
                                (editNft.nftId) &&
                                <>
                                    <h3>Elemental Features</h3>
                                    <input type="text" placeholder='name' value={editNft.nftId.name} onChange={(e) => setEditNft({ nftId: { name: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    <input type="text" placeholder="type" value={editNft.nftId.type} onChange={(e) => setEditNft({ nftId: { type: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    <input type="text" placeholder="class" value={editNft.nftId.clase} onChange={(e) => setEditNft({ nftId: { clase: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    <input type="text" placeholder="img" value={editNft.nftId.img} onChange={(e) => setEditNft({ nftId: { img: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    <input min='0' type="number" placeholder="price" value={editNft.nftId.price} onChange={(e) => setEditNft({ nftId: { price: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    <input min='0' type="number" placeholder="stock" value={editNft.nftId.stock} onChange={(e) => setEditNft({ nftId: { stock: e.target.value, _id: editNft.nftId._id, features: '' } })} />
                                    {editNft.nftId.features.hp &&
                                        <>
                                            <h3>Game Features</h3>
                                            <h4>Comming Son</h4>
                                        </>
                                    }
                                </> :
                                <>
                                    <input type="text" placeholder='name' ref={nname} />
                                    <input type="text" placeholder="type" ref={type} />
                                    <input type="text" placeholder="class" ref={clase} />
                                    <input type="text" placeholder="img" ref={img} />
                                    <input min='0' type="number" placeholder="price" ref={price} />
                                    <input min='0' type="number" placeholder="stock" ref={stock} />

                                </>
                            }
                        </div>
                        <div className='action-nft-form'>
                            <i onClick={handlerSetCreate} className="fas fa-plus-circle"></i>
                        </div>

                        {!edit && <button onClick={handlerCreate} className='submit-edit-form'>Create</button>}
                        {edit && <button onClick={handlerUpdate} className='submit-edit-form'>Update</button>}
                    </div>
                    <div className='create-form'></div>
                </aside>
            </article>
        </div>
    )
}

const mapDispatchToProps = {
    getNfts: nftActions.getNfts,
    deleteNft: nftActions.deleteNft,
    getNft: nftActions.getNft,
    updateNft: nftActions.updateNft,
    filter: nftActions.filter,
    addNft: nftActions.addNft,
    getOffers: offerActions.getOffers,
    offerUpdate: offerActions.updateOffer
}
const mapStateToProps = (state) => ({
    nfts: state.nftReducers.nfts,
    nft: state.nftReducers.nft,
    aux: state.nftReducers.aux,
    offers: state.offerReducers.offers
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateOffer)
