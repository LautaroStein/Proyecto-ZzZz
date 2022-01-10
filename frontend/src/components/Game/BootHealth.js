import React, { useState, useEffect } from 'react'

const BootHealth = (props) => {
    const [porcentaje, setPorcentaje] = useState('100%')
    useEffect(() => {
        const healty = props.healty
        const maxhealty = props.maxhealty

        let newPercentage = (healty / maxhealty) * 100 + "%";

        setPorcentaje(newPercentage)

    }, [props.healty])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div style={{ width: '90px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', height: '5%', width: '100%', backgroundColor: 'white', borderRadius: '15px' }}>
                <div style={{ height: '100%', width: porcentaje, backgroundColor: 'red', borderRadius: '15px' }} />
            </div>
        </div>
    )
}

export default BootHealth
