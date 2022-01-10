const Nft = require("../models/Nft");

const nftControllers = {

  getAllNft: async (req, res) => {
    try {
      const nfts = await Nft.find()
      res.json({ success: true, respuesta: nfts })
    } catch (error) {

      res.json({ success: false, respuesta: "Oops!error" })
    }
  },

  loadUnNft: async (req, res) => {
    const nft = req.body
    let respuesta
    try {

      respuesta = await new Nft(nft).save()
      res.json(respuesta)

    } catch (error) {

      res.json({ success: false, respuesta: "Oops!error" })
    }
  },

  getOneNft: async (req, res) => {
    let nft;
    const id = req.params.id;
    try {
      nft = await Nft.findOne({ _id: id }).populate("id")
    } catch (error) {

      res.json({ success: false, respuesta: "Oops!error" })
    }
    res.json({ respuesta: nft, success: true });
  },
  modifyAnNft: async (req, res) => {
    let id = req.params.id;
    let nft = req.body;
    let actualizado;
    try {
      actualizado = await Nft.findOneAndUpdate({ _id: id }, nft, {
        new: true,
      });
    } catch (error) {

    }
    res.json({ success: actualizado ? true : false });
  },

  deleteNft: async (req, res) => {
    const id = req.params.id;
    let nft;
    try {
      await Nft.findOneAndDelete({ _id: id });
      nft = await Nft.find();
    } catch (error) {
      console.log(error);
    }

    res.json({ response: nft, success: true });
  },
  getNftsByUser: async (req, res) => {
    const id = req.params.id
    try {
      if (req.user) {
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

  favAndDisFavController: async (req, res) => {
    const { nftId, userId, boolean} = req.body;
    try {
      const Nft = await Nft.findOneAndUpdate(
        { _id:nftId },
       !boolean
        ? { $addToSet: { favs: userId }} 
        : { $pull: { favs: userId }},
        { new: true }
        );
      res.json({ success: true, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },


}


module.exports = nftControllers;