import axios from 'axios'
const transactionActions = {

    addTransaction: (bodyTransaction) => { // se llama cuando el pago fue exitoso 
        return async (dispatch, getState) => {

            try {
                const token = localStorage.getItem('token')
                const transaction = await axios.post('http://localhost:4000/api/transactions', bodyTransaction, {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                if (transaction.data.response) {
                    dispatch({ type: 'ADD_TRANSACTION', payload: transaction.data.response })
                    return { success: true }
                } else {
                    return { success: false }
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    getRecents: () => {
        return async (dispatch, getState) => {

            try {
                const transaction = await axios.get('http://localhost:4000/api/recents')
                if (transaction.data.response) {
                    dispatch({ type: 'GET_RECENTS', payload: transaction.data.response })
                    return { success: true }
                } else {
                    return { success: false }
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    getMostCreators: () => {
        return async (dispatch, getState) => {

            try {
                const transaction = await axios.get('http://localhost:4000/api/transactions')
                if (transaction.data.response) {
                    dispatch({ type: 'GET_TOP_CREATOR', payload: transaction.data.response })
                    return { success: true }
                } else {
                    return { success: false }
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
}

export default transactionActions