import axios from 'axios'
const userActions = {

    addNft: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                const nft = await axios.post('https://mytinerary-moraga.herokuapp.com/api/user/signup', paramUser)

            } catch (error) {
                console.log(error);
            }
        }
    },
    getNfts: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                const nft = await axios.get('https://mytinerary-moraga.herokuapp.com/api/user/signup', paramUser)

            } catch (error) {
                console.log(error);
            }
        }
    },
    getNft: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                const nft = await axios.get('https://mytinerary-moraga.herokuapp.com/api/user/signup', paramUser)

            } catch (error) {
                console.log(error);
            }
        }
    },
    updateNft: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                const nft = await axios.put('https://mytinerary-moraga.herokuapp.com/api/user/signup', paramUser)

            } catch (error) {
                console.log(error);
            }
        }
    },
    deleteNft: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                const nft = await axios.delete('https://mytinerary-moraga.herokuapp.com/api/user/signup', paramUser)

            } catch (error) {
                console.log(error);
            }
        }
    },
}

export default userActions