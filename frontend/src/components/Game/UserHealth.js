import React, { useState, useEffect } from 'react'

const UserHealth = (props) => {
    const [porcentaje, setPorcentaje] = useState('100%')
    const [life, setLife] = useState('lightgreen')
    const healty = props.healty
    const maxhealty = props.maxhealty
    let newPercentage = (healty / maxhealty) * 100 + "%";

    useEffect(() => {
        if (healty <= Math.round(maxhealty / 3)) {
            setLife('darkred')
        } else if (healty <= (maxhealty / 2)) {
            setLife('red')
        }
        setPorcentaje(newPercentage)
    }, [props.healty])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div style={{ width: '90px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', height: '5%', width: '100%', backgroundColor: 'white', borderRadius: '15px' }}>
                <div style={{ height: '100%', width: porcentaje, backgroundColor: life, borderRadius: '15px' }} />
            </div>
            <div>{healty}</div>
        </div>
    )
}

export default UserHealth
