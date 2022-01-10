import axios from 'axios'
const userActions = {

    addNft: (paramNft) => {
        return async (dispatch, getState) => {
            try {
                const nft = await axios.post('http://localhost:4000/api/nft', paramNft)
                dispatch({ type: 'ADD_NFT', payload: nft.data })
            } catch (error) {
                console.log(error);
            }
        }
    },
    getNfts: () => {
        return async (dispatch, getState) => {
            try {
                const nfts = await axios.get('http://localhost:4000/api/nft')
                dispatch({ type: 'GET_NFTS', payload: nfts.data.respuesta })
            } catch (error) {
                console.log(error);
            }
        }
    },
    getNftsByUser: (userId) => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const nfts = await axios.get(`http://localhost:4000/api/nfts/user/${userId}`, {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'GET_USER_NFTS', payload: nfts.data.response })
            } catch (error) {
                console.log(error);
            }
        }
    },
    getNft: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                // const nft = await axios.get('https://mytinerary-moraga.herokuapp.com/api/user/signup', paramUser)

            } catch (error) {
                console.log(error);
            }
        }
    },
    updateNft: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                // const nft = await axios.put('https://mytinerary-moraga.herokuapp.com/api/user/signup', paramUser)

            } catch (error) {
                console.log(error);
            }
        }
    },
    deleteNft: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                // const nft = await axios.delete('https://mytinerary-moraga.herokuapp.com/api/user/signup', paramUser)

            } catch (error) {
                console.log(error);
            }
        }
    },

    favNft: (fav) => {
        //recibe>> fav = {nftId:nftId, userId:user._id, boolean}
        return async (dispatch, getState) => {
            try {
                // const nft = await axios.put('https://mytinerary-moraga.herokuapp.com/api/user/favoritos', fav, )

            } catch (error) {
                console.log(error);
            }
        }
    },
}

export default userActions