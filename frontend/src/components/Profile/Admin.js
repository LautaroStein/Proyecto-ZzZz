import { useState, useRef } from 'react'


const Admin = () => {

    const [edit, setEdit] = useState(true)
    const [features, setFeatures] = useState(false)
    const [step, setStep] = useState(3)
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


    const arrayNfts = [{ name: 'nft 1' }, { name: 'nft 2' }, { name: 'nft 3' }, { name: 'nft 4' }, { name: 'nft 5' }, { name: 'nft 6' }, { name: 'nft 7' }, { name: 'nft 8' }]
    const arrayUsers = [{ name: 'user 1' }, { name: 'user 2' }, { name: 'user 3' }, { name: 'user 4' }, { name: 'user 5' }, { name: 'user 6' }, { name: 'user 7' }, { name: 'user 8' }]

    const handlerEdit = () => {
        setEdit(true)
    }
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
                        {arrayNfts.map(nft =>
                            <div onClick={handlerEdit} className="cardy">
                                <h2>{nft.name}</h2>
                            </div>
                        )}
                    </div>
                </div>
                <aside className="right-side-management">
                    <div className='edit-form'>
                        <h2><span>{edit ? 'Edit' : 'Create'}</span> NFT Form</h2>
                        <div className='nft-form'>
                            {features ?
                                <>
                                    <input type="text" placeholder="hp" />
                                    <input type="text" placeholder="max Hp" />

                                    <div className='abilities-label'>
                                        {step > 1 && <span><i onClick={prevAbility} class="fa fa-chevron-circle-left" aria-hidden="true"></i></span>}
                                        <h2><span>{step === 1 ? 'First' : step === 2 ? 'Second' : step === 3 ? 'Third' : 'Fourth'}</span> Ability</h2>
                                        {step < 4 && <span><i onClick={nextAbility} class="fa fa-chevron-circle-right" aria-hidden="true"></i></span>}
                                    </div>
                                    {/* en una funcion puede estar, donde le meto el step */}
                                    <input type="text" placeholder='name' ref={abilityOneName} />
                                    <input type="number" min='0' placeholder='damage' ref={abilityOneDamage} />
                                </>
                                :
                                <>
                                    <input type="text" placeholder='name' />
                                    <input type="text" placeholder="type" />
                                    <input type="text" placeholder="class" />
                                    <input type="text" placeholder="img" />
                                    <input min='0' type="number" placeholder="price" />
                                    <input min='0' type="number" placeholder="stock" />
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
                            <div className="cardy">
                                <div>{user.name}</div>
                            </div>
                        )}
                    </div>

                </div>
            </article>
        </section>
    )
}

export default Admin
