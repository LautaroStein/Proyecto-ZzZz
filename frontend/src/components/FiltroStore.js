import { useRef, useState } from "react";

const FiltroStore = () => {

  const BuscarNFT = useRef();


  const [categoria, setCategoria] = useState("all");
  const [rareza, setRareza] = useState("all");



  const api = {
    categorias: [
      {
        nameCategoria: "Gamer",
        name: "gamerComun1",
        rareza: "comun"
      },

      {
        nameCategoria: "Arte",
        name: "arteRaro1",
        rareza: "raro"

      }

    ]
  }
  const [nftDefault, setNftDefault] = useState(api.categorias);
  const [nft, setNft] = useState(api.categorias);
  const [auxiliar, setAuxiliar] = useState(nft)

  const HandleCategoria = (e) => setCategoria(e.target.value)
  const HandleRareza = (e) => setRareza(e.target.value)



  const fetchear = () => {
    if (categoria !== "all") {
      let resultado = nftDefault.filter((e) => e.nameCategoria == categoria)
      setNft(resultado)
      setAuxiliar(resultado)
    } else {
      setNft(api.categorias)
      setAuxiliar(api.categorias)
    }

  }

  const fetchearRareza = () => {
    
    if(rareza !== "all" ){
      let resultado = nft.filter((e) => {
      return e.rareza.includes(rareza)
    })
    setAuxiliar(resultado)
    }else{
      setAuxiliar(nft)
    }

  }


  const fetchearPorNombre = () => {
    let value = BuscarNFT.current.value

    let resultado = nft.filter((e) => {
      return e.name.includes(value)
    })
    setAuxiliar(resultado)

  }



  return (
    <div style={{ color: "white", margin: "50rem", border: "1px solid white" }}>

      <h1>hola</h1>
      <input
        className="input-pelis"
        type="text"
        ref={BuscarNFT}
        placeholder="Buscar una pelicula..."
        onChange={fetchearPorNombre}
      />
      <form
        onClick={fetchear}
      >
        <select name="select" onChange={HandleCategoria} defaultValue="all" >
          <option value="all" >todos</option>
          {
            nftDefault.map((e) => {
              return (
                <option value={e.nameCategoria} >{e.nameCategoria}</option>
              )
            })
          }
          
        
        </select>
        </form>

        <form
        onClick={fetchearRareza}
      >

        <select name="select" onChange={HandleRareza} >
          <option value="all" >todos</option>
          {
            nftDefault.map((e) => {
              return (
                <option value={e.rareza}>{e.rareza}</option>
              )
            })
          }
        </select>

      </form>
      

      {
        auxiliar.map((e) => {
          return (
            <h3>{e.name}</h3>
          )
        })
      }


    </div>
  )
}

export default FiltroStore
