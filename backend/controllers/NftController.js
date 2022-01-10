const Nft = require("../models/Nft");

const nftControllers = {

  getAllNft: async (req, res) => {
    try {
      const nfts = await Nft.find()
      res.json({ success: true, respuesta: nfts })
    } catch (error) {

      res.json({ success: false, respuesta: "Oops! error" })
    }
  },

  loadUnNft: async (req, res) => {
    const nft = req.body
    let respuesta
    try {
      if (req.user.rol === 'admin' || req.user.rol === 'moderator') {
        respuesta = await new Nft(nft).save()
        res.json(respuesta)

      } else {
        res.json({ success: false })
      }

    } catch (error) {

      res.json({ success: false, respuesta: "Oops! error" })
    }
  },

  getOneNft: async (req, res) => {
    let nft;
    const id = req.params.id;
    try {
      nft = await Nft.findOne({ _id: id }).populate('users') // falta popular userId
      res.json({ respuesta: nft, success: true });
    } catch (error) {

      res.json({ success: false, respuesta: "Oops! error" })
    }
  },

  modifyAnNft: async (req, res) => {
    let id = req.params.id;
    let nft = req.body;
    let actualizado;
    try {
      if (req.user.rol === 'admin' || req.user.rol === 'moderator') {
        actualizado = await Nft.findOneAndUpdate({ _id: id }, nft, { new: true });
        res.json({ actualizado: actualizado._id })
      } else {
        res.json({ success: false })
      }
    } catch (error) {

    }
    res.json({ success: actualizado ? true : false });
  },

  deleteNft: async (req, res) => {
    const id = req.params.id;
    let nft;
    try {
      if (req.user.rol === 'admin' || req.user.rol === 'moderator') {

        nft = await Nft.findOneAndDelete({ _id: id });

        res.json({ success: true, nft });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.log(error);
    }

  },
  getNftsByUser: async (req, res) => {
    const id = req.params.id
    try {
      if (req.user._id.toString() === id || req.user.role === 'admin' || req.user.role === 'moderator') {
        const nftsByUser = await Nft.find({ users: id }).populate('users')
        res.json({ succes: true, response: nftsByUser })

      } else {
        res.json({ succes: false, msg: 'Unauthorized user' })
      }

    } catch (error) {
      console.log(error);
      res.json({ error: 'Error in getNftByUser controller' })
    }
  },


}


module.exports = nftControllers;