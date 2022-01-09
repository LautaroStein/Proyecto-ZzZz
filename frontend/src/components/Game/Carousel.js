import React, { useState, useEffect } from 'react'
import ShowSlide from './ShowSlide'
const Carousel = (props) => {
    const [nftProceced, setNftProceced] = useState([])
    const [slide, setSlide] = useState(0)
    const size = nftProceced.length
    function handlerLeft() {
        if (slide > 0) {
            setSlide(prev => prev - 1)
        } else {
            setSlide(size - 1)
        }
    }
    function handlerRight() {
        if ((size - 1) === slide) {
            setSlide(0)
        } else {
            setSlide(prev => prev + 1)
        }
    }


    useEffect(() => {
        const aux = []
        let cont1 = 0
        let cont2 = 5
        let auxcont
        if (props.nfts.length % 5 === 0) {
            auxcont = (Math.floor(props.nfts.length / 5))
        } else {
            auxcont = (Math.floor(props.nfts.length / 5) + 1)
        }

        for (let index = 0; index < props.nfts.length; index++) {

            if (index < auxcont) {

                let retornado = props.nfts.slice(cont1, cont2)
                aux.push(retornado)
                cont1 = cont1 + 5
                cont2 = cont2 + 5
            }
        }
        setNftProceced(aux)
    }, [props.nfts])
    return (

        <ShowSlide choice={props.choice} right={handlerRight} left={handlerLeft} nftsProceced={nftProceced} pos={slide} />

    )
}

export default Carousel
