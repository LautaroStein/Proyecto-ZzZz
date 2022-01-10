import { useRef, useState } from "react";

const FiltroStore = () => {

  const BuscarNFT = useRef();

  const [categoria, setCategoria] = useState("all");
  const [rareza, setRareza] = useState("all");
  const [desabilitado,setDesabilitado] = useState(false)

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

    if (categoria !== "all" && rareza == "all") {
      let resultado = nftDefault.filter((e) => e.nameCategoria == categoria)
      setNft(resultado)
      setAuxiliar(resultado)

      if (resultado.length == 0){
        setDesabilitado(true)
      }else{
        setDesabilitado(false)
      }
    }

    if (categoria !== "all" && rareza !== "all") {
      let resultado = nftDefault.filter((e) => e.nameCategoria == categoria && e.rareza == rareza)

      setNft(resultado)
      setAuxiliar(resultado)

      if (resultado.length == 0){
        setDesabilitado(true)
      }else{
        setDesabilitado(false)
      }
    }

    if (categoria == "all" && rareza !== "all") {
      let resultado = nftDefault.filter((e) => e.rareza == rareza)

      setNft(resultado)
      setAuxiliar(resultado)

      if (resultado.length == 0){
        setDesabilitado(true)
      }else{
        setDesabilitado(false)
      }
    }

    if (categoria == "all" && rareza == "all") {

      setNft(api.categorias)
      setAuxiliar(api.categorias)

    }

  }



  const fetchearRareza = () => {

    if (categoria == "all" && rareza !== "all") {
      let resultado = nft.filter((e) => e.rareza == rareza)
      setAuxiliar(resultado)
      if (resultado.length == 0){
        setDesabilitado(true)
      }else{
        setDesabilitado(false)
      }
    }

    if (categoria !== "all" && rareza !== "all") {
      let resultado = nftDefault.filter((e) => e.nameCategoria == categoria && e.rareza == rareza)
      setAuxiliar(resultado)
      if (resultado.length == 0){
        setDesabilitado(true)
      }else{
        setDesabilitado(false)
      }
    }

    if (categoria == "all" && rareza == "all") {

      setNft(api.categorias)
      setAuxiliar(api.categorias)

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
        disabled={desabilitado}
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
            <>
              <h3>{e.name}</h3>

            </>
          )
        })
      }


    </div>
  )
}
export default FiltroStore