import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import offerActions from '../../redux/actions/offerActions'
import userActions from '../../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const CreateOffer = (props) => {
    const [edit, setEdit] = useState(false)
    const [features, setFeatures] = useState(false)
    const [onCardHover, setOnCardHover] = useState({ bool: false, id: '' })
    const [editNft, setEditNft] = useState('')
    const [formTimeReal, setFormTimeReal] = useState({name: "", type: "Art", class:"Common", img: "", price: 0 })

    const nname = useRef(null)
    const type = useRef(null)
    const clase = useRef(null)
    const img = useRef(null)
    const price = useRef(null)


    props.user && props.getOffersByUser(props.user.userID)

    const handlerSetCreate = () => {
        setEdit(false)
        setTimeout(() => {
            nname.current.value = ""
            type.current.value = ""
            clase.current.value = ""
            img.current.value = ""
            price.current.value = ""
        }, 1)


    }
    const handlerDelete = (nftId) => {
        props.deleteNft(nftId)
    }
    const handlerEdit = async (nftId) => {

        const nft = await props.getNft(nftId)
        setEditNft(nft)

    }
    const handlerCreate = async () => {
        const createdBody = {}
        nname.current.value !== '' && (createdBody['name'] = nname.current.value)
        type.current.value !== '' && (createdBody['type'] = type.current.value)
        clase.current.value !== '' && (createdBody['clase'] = clase.current.value)
        img.current.value !== '' && (createdBody['img'] = img.current.value)
        price.current.value !== '' && (createdBody['price'] = price.current.value)


        const res = await props.addNft({ ...createdBody, user: props.user.userID })
        if (res.success) {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'The nft was Created !',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }

    }
    const handlerUpdate = () => {
        const updatedBody = {}
        editNft.nftId.name && (updatedBody['name'] = editNft.nftId.name)
        editNft.nftId.type && (updatedBody['type'] = editNft.nftId.type)
        editNft.nftId.clase && (updatedBody['clase'] = editNft.nftId.clase)
        editNft.nftId.img && (updatedBody['img'] = editNft.nftId.img)
        editNft.nftId.price && (updatedBody['price'] = editNft.nftId.price)
        props.updateNft(editNft.nftId._id, { ...updatedBody, valid: 'pending' })
        editNft.nftId.name = ''
        editNft.nftId.type = ''
        editNft.nftId.clase = ''
        editNft.nftId.img = ''
        editNft.nftId.price = ''
    }
    const subHandlder = async () => {
        props.updateSub(props.user.userID, { suscription: true })
        // refresh de pagina
    }

    if (!props.user.sub) {
        return (
            <div style={{ backgroundImage: 'url(/assets/subscribe.jpeg)', backgroundSize: 'cover', height: '100%', width: '100%', backgroundPosition: 'center' }}>

                <h2 style={{ color: 'white', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>You need subscribe to our web, click <button onClick={subHandlder}>here</button></h2>
            </div>
        )
    }




    return (

        <div className="management">
            {/* crud nfts */}
            <article className="nfts-management">
                <div className='main-nfts-content'>
                    <div className='nfts-search-title'>
                        <h2>Offer Management</h2>
                    </div>
                    <div className='nfts-container'>
                        {props.userOffers.length > 0 && props.userOffers.map(nft =>
                            <div key={nft._id} onMouseEnter={() => setOnCardHover({ bool: true, id: nft._id })} onMouseLeave={() => setOnCardHover({ bool: false, id: nft._id })} style={{ backgroundImage: `url(${nft.img})` }} className="cardy">
                                <div className='body-nft-admin-card'>
                                    <h2>{nft.name}</h2>
                                    <h2>{nft.valid === 'accepted' ? 'accepted' : nft.valid === 'rejected' ? 'rejected' : 'pendient'}</h2>
                                </div>
                                {(onCardHover.bool && onCardHover.id === nft._id) &&
                                    <div className='management-actions'>
                                        <button onClick={() => handlerDelete(nft._id)}>DELETE</button>
                                        <button onClick={() => {
                                            handlerEdit(nft._id); setEdit(true); setFeatures(true);
                                        }}>EDIT</button>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </div>
                <aside className="right-side-management">
                    <div className='edit-form'>
                        <h2><span>{edit ? 'Edit' : 'Create'}</span> Offer Form</h2>
                        <div className='nft-form'>
                            {(features && edit) ?
                                (editNft.nftId) &&
                                <>
                                    <h3>Elemental Features</h3>
                                    <input type="text" placeholder='name' value={editNft.nftId.name} onChange={(e) => setEditNft({ nftId: { name: e.target.value, _id: editNft.nftId._id } })} />
                                    <input type="text" placeholder="type" value={editNft.nftId.type} onChange={(e) => setEditNft({ nftId: { type: e.target.value, _id: editNft.nftId._id } })} />
                                    <input type="text" placeholder="class" value={editNft.nftId.clase} onChange={(e) => setEditNft({ nftId: { clase: e.target.value, _id: editNft.nftId._id } })} />
                                    <input type="text" placeholder="img" value={editNft.nftId.img} onChange={(e) => setEditNft({ nftId: { img: e.target.value, _id: editNft.nftId._id } })} />
                                    <input min='0' type="number" placeholder="price" value={editNft.nftId.price} onChange={(e) => setEditNft({ nftId: { price: e.target.value, _id: editNft.nftId._id } })} />
                                </> :
                                <>
                                    <input type="text" placeholder='name' ref={nname} onChange={(e)=> setFormTimeReal({...formTimeReal, name:e.target.value})}/>
                                    <input type="text" placeholder="type" ref={type} onChange={(e)=> setFormTimeReal({...formTimeReal, type:e.target.value})}/>
                                    <input type="text" placeholder="class" ref={clase} />
                                    <input type="text" placeholder="img" ref={img} />
                                    <input min='0' type="number" placeholder="price" ref={price} />
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
    deleteNft: offerActions.deleteOffer,
    getNft: offerActions.getOffer,
    updateNft: offerActions.updateOffer,
    addNft: offerActions.addOffer,
    getOffersByUser: offerActions.getOffersByUser,
    getOffers: offerActions.getOffers,
    updateSub: userActions.updateUser,
}
const mapStateToProps = (state) => ({
    userOffers: state.offerReducers.userOffers,
    user: state.userReducers.user,
    offers: state.offerReducers.offers

})

export default connect(mapStateToProps, mapDispatchToProps)(CreateOffer)
