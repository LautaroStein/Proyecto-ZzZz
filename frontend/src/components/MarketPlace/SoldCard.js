import React from 'react'

const SoldCard = () => {
    return (
        <div className='sold-card'>
            <div className='sold-card-header' >
                <div style={{ backgroundImage: 'url(/assets/lauty2.png)' }} className='sold-card-img'>
                    <h2>userName</h2>
                </div>
            </div>
            <div className='sold-card-body'>
                <div className='sold-card-atrr'>
                    <h2>nft name</h2>
                    <h2>price</h2>
                </div>
            </div>
            <div className='sold-card-footer'>
                <h2>nft id</h2>
            </div>
        </div>
    )
}

export default SoldCard
