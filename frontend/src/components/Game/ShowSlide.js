// import React, { useEffect, useState } from 'react'
import NftItem from './NftItem'
const ShowSlide = (props) => {
    // const [time, setTime] = useState(3000)



    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         props.right()
    //     }, time)
    //     return () => clearInterval(interval)

    // })

    // function active() {
    //     setTime(3000)
    // }
    // function pause() {
    //     setTime(36000000)

    // }
    return (

        <NftItem choice={props.choice} nft={props.nftsProceced[props.pos]} right={props.right} left={props.left} />

    )
}

export default ShowSlide
