import React from 'react'

const NftItem = (props) => {


    return (
        <div className="nft-item">
            <i style={{ cursor: 'pointer', alignSelf: 'center' }} onClick={() => props.left()} className="fa fa-chevron-left" aria-hidden="true"></i>

            {(props.nft && props.nft.length > 0) && props.nft.map((element, i) =>
                <button className='nft-card' key={Math.random()} onClick={() => props.choice(i)}>
                    <div className='nft-name'>{element.name}</div>
                    <div className='nft-img' style={{ backgroundImage: `url(${element.img})` }} />
                </button>
            )
            }
            <i style={{ cursor: 'pointer', alignSelf: 'center' }} onClick={() => props.right()} className="fa fa-chevron-right" aria-hidden="true"></i>

        </div>

    )
}

export default NftItem
