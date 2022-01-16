import React from 'react'

const NftItem = (props) => {
    //     // const [time, setTime] = useState(3000)
    //     // useEffect(() => {
    //     //     const interval = setInterval(() => {
    //     //         props.right()
    //     //     }, time)
    //     //     return () => clearInterval(interval)

    //     // })

    //     // function active() {
    //     //     setTime(3000)
    //     // }
    //     // function pause() {
    //     //     setTime(36000000)

    //     // }

    return (
        <div className="nft-item">
            <i style={{ cursor: 'pointer', alignSelf: 'center' }} onClick={() => props.left()} className="fa fa-chevron-left" aria-hidden="true"></i>
            {(props.nftsProceced && props.nftsProceced.length > 0) && props.nftsProceced.map((nft) =>
                nft.type === 'Gamer' &&
                <button className='nft-card' key={Math.random()} onClick={() => props.choice(nft.name)}>
                    <div className='nft-name'>{nft.name}</div>
                    <div className='nft-img' style={{ backgroundImage: `url(${nft.img})` }} />
                </button>
            )
            }
            <i style={{ cursor: 'pointer', alignSelf: 'center' }} onClick={() => props.right()} className="fa fa-chevron-right" aria-hidden="true"></i>

        </div>

    )
}

export default NftItem
