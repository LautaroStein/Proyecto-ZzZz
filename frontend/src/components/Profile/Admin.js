import { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import nftActions from '../../redux/actions/nftActions'



const Admin = (props) => {

    const [edit, setEdit] = useState(false)
    const [features, setFeatures] = useState(false)
    const [step, setStep] = useState(1)
    const [onCardHover, setOnCardHover] = useState({ bool: false, id: '' })

    useEffect(() => {
        props.getNfts()
    }, [])



    // basic atrr
    const name = useRef()
    const type = useRef()
    const Nftclass = useRef()
    const img = useRef()
    const price = useRef()
    const stock = useRef()
    // game atrr
    const abilityOneName = useRef()
    const abilityOneDamage = useRef()
    const abilityTwoName = useRef()
    const abilityTwoDamage = useRef()
    const abilityThreeName = useRef()
    const abilityThreeDamage = useRef()
    const abilityFourName = useRef()
    const abilityFourDamage = useRef()


    const arrayUsers = [{ name: 'user 1' }, { name: 'user 2' }, { name: 'user 3' }, { name: 'user 4' }, { name: 'user 5' }, { name: 'user 6' }, { name: 'user 7' }, { name: 'user 8' }]

    const nextAbility = () => {
        setStep(prev => prev + 1)

    }
    const prevAbility = () => {
        setStep(prev => prev - 1)
    }
    const handlerFeatures = () => {
        setFeatures(!features)
    }

    const handlerCreate = () => {

        setEdit(false)
    }
    const handlerDelete = (nftId) => {
        props.deleteNft(nftId)
    }
    const handlerEdit = (nftId) => {
        props.getNft(nftId)

    }
    return (
        <section className="management">
            {/* crud nfts */}
            <article className="nfts-management">
                <div className='main-nfts-content'>
                    <div className='nfts-search-title'>
                        <h2>NFTs Management</h2>
                        <input type="text" placeholder='search by nft name' />
                    </div>
                    <div className='nfts-container'>
                        {props.nfts.length > 0 && props.nfts.map(nft =>
                            <div onMouseEnter={() => setOnCardHover({ bool: true, id: nft._id })} onMouseLeave={() => setOnCardHover({ bool: false, id: nft._id })} style={{ backgroundImage: `url(${nft.img})` }} className="cardy">
                                <div className='body-nft-admin-card'>
                                    <h2>{nft.name}</h2>
                                </div>
                                {(onCardHover.bool && onCardHover.id === nft._id) &&
                                    <div className='management-actions'>
                                        <button onClick={() => handlerDelete(nft._id)}>DELETE</button>
                                        <button onClick={() => { handlerEdit(nft._id); setEdit(true) }}>EDIT</button>
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
                                props.nft &&
                                <>
                                    <input type="text" placeholder="hp" value={props.nft.features.hp} />
                                    <input type="text" placeholder="max Hp" value={props.nft.features.maxHp} />

                                    <div className='abilities-label'>
                                        {step > 1 && <span><i onClick={prevAbility} class="fa fa-chevron-circle-left" aria-hidden="true"></i></span>}
                                        <h2><span>{step === 1 ? 'First' : step === 2 ? 'Second' : step === 3 ? 'Third' : 'Fourth'}</span> Ability</h2>
                                        {step < 4 && <span><i onClick={nextAbility} class="fa fa-chevron-circle-right" aria-hidden="true"></i></span>}
                                    </div>
                                    {/* en una funcion puede estar, donde le meto el step */}
                                    <input type="text" placeholder='name' value={step === 1 ? props.nft.features.habilities[0].name : step === 2 ? props.nft.features.habilities[1].name : step === 3 ? props.nft.features.habilities[2].name : props.nft.features.habilities[3].name} ref={abilityOneName} />
                                    <input type="number" min='0' placeholder='damage' ref={abilityOneDamage} value={step === 1 ? props.nft.features.habilities[0].damage : step === 2 ? props.nft.features.habilities[1].damage : step === 3 ? props.nft.features.habilities[2].damage : props.nft.features.habilities[3].damage} />
                                </>
                                :
                                props.nft &&
                                <>
                                    <input type="text" placeholder='name' value={props.nft.name} />
                                    <input type="text" placeholder="type" value={props.nft.type} />
                                    <input type="text" placeholder="class" value={props.nft.clase} />
                                    <input type="text" placeholder="img" value={props.nft.img} />
                                    <input min='0' type="number" placeholder="price" value={props.nft.price} />
                                    <input min='0' type="number" placeholder="stock" value={props.nft.stock} />
                                </>
                            }
                        </div>
                        <div className='action-nft-form'>
                            <i onClick={handlerCreate} className="fas fa-plus-circle"></i>
                            <i onClick={handlerFeatures} className="far fa-address-card"></i>
                        </div>
                        <button className='submit-edit-form'>{edit ? 'Update' : 'Create'}</button>
                    </div>
                    <div className='create-form'></div>
                </aside>
            </article>
            {/* el admin podra ascender algun user*/}
            <article className="users-management">
                <div className='main-users-content'>
                    <div className='users-search-title'>
                        <h2>NFTs management</h2>
                        <input type="text" />
                    </div>
                    <div className='users-container'>
                        {arrayUsers.map(user =>
                            <div style={{ backgroundImage: 'url(/assets/lauty2.png)' }} className="cardy">
                                <div>{user.name}</div>
                            </div>
                        )}
                    </div>
                </div>
            </article>
        </section>
    )
}

const mapDispatchToProps = {
    getNfts: nftActions.getNfts,
    deleteNft: nftActions.deleteNft,
    getNft: nftActions.getNft
}
const mapStateToProps = (state) => ({
    nfts: state.nftReducers.nfts,
    nft: state.nftReducers.nft
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
