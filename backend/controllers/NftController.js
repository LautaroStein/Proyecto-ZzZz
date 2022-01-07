const Nft = require("../models/Nft");

const nftControllers = {
  
  getAllNft: async (req,res) => {
    try {
        const nft = await Nft.find()
        res.json({success: true, respuesta: nft})
    } catch(error) {
        
        res.json({success: false, respuesta: "Oops!error"})
    }
},
    
loadUnNft: async(req,res)=>{
    const nft =  req.body
    
    let respuesta
    try{

        respuesta = await new Nft(nft).save()

    }catch(error) {
      
      res.json({success: false, respuesta: "Oops!error"})
  }
    res.json(respuesta)
},

  getOneNft: async (req, res) => {
    let nft;
    const id = req.params.id;
    try {
        nft = await Nft.findOne({ _id: id }).populate("id")
      }catch(error) {
        
        res.json({success: false, respuesta: "Oops!error"})
    }
    res.json({ respuesta: nft, success: true });
  },
  modifyAnNft: async (req, res) => {
    let id = req.params.id;
    let  nft= req.body;
    let actualizado;
    try {
      actualizado = await Nft.findOneAndUpdate({ _id: id }, nft, {
        new: true,
      });
    } catch (error) {
      
    }
    res.json({ success: actualizado ? true : false });
  },
  
};

module.exports = nftControllers;