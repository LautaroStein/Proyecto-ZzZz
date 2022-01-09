import React, { useRef, useState } from "react";

const FiltroStore = () => {

  const BuscarNFT = useRef();
  
  // const HandleCategory = (e) => setCategory(e.target.value);
  // const [categoria, setCategoria] = useState([]);

  const  [nftDefault, setNftDefault] = useState();
  
    const api = {
    categorias: [
        {
            nameCategoria:"Gamer",
            name:"gamerComun1",
            rareza:"comun"
        },
        {
            nameCategoria:"Gamer",
            name:"gamer raro1",
            rareza:"raro"
        },
        {
            nameCategoria:"Arte",
            name:"arteComun1",
            rareza:"comun"

        },
        {
            nameCategoria:"Arte",
            name:"arteraro1",
            rareza:"raro"

        }
    ]
}

setNftDefault(api.categorias)

let probando = api.categorias.filter((e)=>e.nameCategoria == "Gamer")

console.log(probando.filter((e)=>e.rareza == "raro"))

    return (
        <div>
            
        <div>
        <input
          type="text"
          ref={BuscarNFT}
          placeholder="Looking a NFT"
          // onChange={BuscarPorNombre}
        />
        <form>
          <select name="select" >
            {api.categorias.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </form>
      </div>

        </div>
    )
}

export default FiltroStore
