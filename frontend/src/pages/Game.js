import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import UserHealth from '../components/Game/UserHealth'
import BootHealth from '../components/Game/BootHealth'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Game/Carousel'

const Game = (props) => {
    // se puede usar un useReducer para evitar tantos useStates
    const navigate = useNavigate()
    const [userNft, setUserNft] = useState('')
    const [bootNft, setbootNft] = useState('')
    const [isSelected, setIsSelected] = useState(false)
    const [isUserTurn, setIsUserTurn] = useState(true)
    const [userAttacked, setUserAttacked] = useState(false)
    const [userHp, setUserHp] = useState()
    const [bootHp, setBootHp] = useState()
    const [storyteller, setStoryteller] = useState('Start Fight !')

    useEffect(() => {

        const rdn = Math.floor((Math.random() * ((props.rdxNfts.length - 1) + 1)))
        setbootNft(props.rdxNfts[rdn])
        props.rdxNfts[rdn] && setBootHp(props.rdxNfts[rdn].features.hp)

    }, [props.rdxNfts])// eslint-disable-line react-hooks/exhaustive-deps

    const handlerChoice = (nftSelected) => {
        setUserHp(props.rdxNftsByUser[nftSelected].features.hp)
        setUserNft(props.rdxNftsByUser[nftSelected])
        setIsSelected(true)
    }

    const initialState = () => {
        const rdn = Math.floor((Math.random() * ((props.rdxNfts.length - 1) + 1)))
        setIsSelected(false) // set aux user (nft inicial) y aux boot
        setUserAttacked(false)
        userNft.features.hp = userHp
        bootNft.features.hp = bootHp
        setbootNft(props.rdxNfts[rdn])
    }
    const attackHandler = (attack) => {
        const damage = Math.floor(attack.damage + ((Math.random() * ((bootNft.features.hp / 2) - 1)) + 1))
        bootNft.features.hp -= damage
        console.log('user damage: ' + damage);
        // si cuando ataca la vida del bootNft es menor o igual que cero , el usuario gana
        if (bootNft.features.hp <= 0) {
            // se pregunta si quiere volver a jugar, ganaste loco boludo
            bootNft.features.hp = 0
            setIsUserTurn(true)
            setUserAttacked(true)
            Swal.fire({
                title: 'You win!',
                showDenyButton: true,
                confirmButtonText: 'Play Again',
                denyButtonText: `Back To Home`,
            }).then((result) => {
                if (result.isConfirmed) {
                    initialState()
                } else if (result.isDenied) {
                    navigate('/')
                    initialState()
                }

            })
        } else {
            setUserAttacked(true)
            setTimeout(() => {
                setIsUserTurn(false)
            }, 1000)
        }
    }
    useEffect(() => {
        if (isUserTurn) {

            // user selecciona habilidad y le quita hp al rival
        } else {
            // es turno del boot y le quita vida al nft del usuario

            const rdnAttack = Math.floor((Math.random() * ((bootNft.features.habilities.length - 1) + 1)))
            const attack = bootNft.features.habilities[rdnAttack]
            const damage = Math.floor(attack.damage + ((Math.random() * ((userNft.features.hp / 2) - 1)) + 1))
            userNft.features.hp -= damage
            // si cuando ataca la vida del userNft es menor o igual que cero , el usuario gana
            if (userNft.features.hp <= 0) {
                // se pregunta si quiere volver a jugar y se muestra un mensaje , Re papafrita loco
                userNft.features.hp = 0
                setIsUserTurn(true)
                setUserAttacked(false)
                Swal.fire({
                    title: 'You Lose!',
                    showDenyButton: true,
                    confirmButtonText: 'Play Again',
                    denyButtonText: `Back To Home`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        initialState()
                    } else if (result.isDenied) {
                        navigate('/')
                        initialState()
                    }
                })
            } else {

                setTimeout(() => {
                    setUserAttacked(false)
                    setIsUserTurn(true)
                }, 1000)
            }
        }
    }, [isUserTurn])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='main-content'>
            {!isSelected &&
                <>
                    <h2 className='choice-title'>Choice your NFT</h2>
                    <div className='choice-nfts-card'>
                        {props.rdxNftsByUser.length === 0 ? <div className="nfts-loading-container"><div className="nfts-loading" style={{ backgroundImage: `url(/assets/loading_gif.gif)` }} /></div> : <Carousel choice={handlerChoice} nfts={props.rdxNftsByUser} />}
                    </div>
                </>
            }
            {isSelected &&
                <div className='stage'>
                    <div className='boot-box' >
                        <div className='storyteller'>
                            <p>{storyteller}</p>
                        </div>
                        <div className='card-boot-nft'>
                            <div style={{ backgroundImage: `url(${bootNft.img})` }} className='nft-body'>
                                <h2>{bootNft.name}</h2>
                                <BootHealth healty={bootNft.features.hp} maxhealty={bootNft.features.maxHp} />
                            </div>
                        </div>
                    </div>
                    <div className='user-box' >
                        <div className='card-user-nft'>
                            <div style={{ backgroundImage: `url(${userNft.img})` }} className='nft-body'>
                                <h2>{userNft.name}</h2>
                                <UserHealth healty={userNft.features.hp} maxhealty={userNft.features.maxHp} />
                            </div>
                        </div>
                        <div className='user-habilities'>
                            {!userAttacked &&
                                <div className='habilities-container'>

                                    {userNft.features.habilities.map(hability => <button className='hability-action' key={hability.name} onClick={() => attackHandler(hability)}>{hability.name}</button>)}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}
const mapStateToProps = (state) => ({
    rdxNfts: state.nftReducers.nfts,
    rdxNftsByUser: state.nftReducers.userNfts,
})
export default connect(mapStateToProps, null)(Game)
