const initialState = {
    recents: [],
    topCreators: [],
    transactions: []
}

const transactionReducers = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'GET_RECENTS':
            return {
                ...state,
                offers: [...state.offers, action.payload],
                auxOffers: [...state.offers, action.payload]
            }
        case 'GET_CREATORS':
            return {
                ...state,
                topCreators: action.payload
            }
        default:
            return state
    }

}

export default transactionReducers