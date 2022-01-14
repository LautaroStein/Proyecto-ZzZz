const initialState = {
    offers: [],
    auxOffers: [],
    userOffers: [],
    offer: {}
}

const offerReducers = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_OFFER':
            return {
                ...state,
                offers: [...state.offers, action.payload],
                auxOffers: [...state.offers, action.payload]
            }
        case 'GET_OFFERS':
            return {
                ...state,
                offers: action.payload,
                auxOffers: action.payload
            }
        case 'GET_OFFER':
            return {
                ...state,
                offer: action.payload
            }
        case 'DELETE_OFFER':
            return {
                ...state,
                offers: state.offers.filter(offerId => offerId._id !== action.payload)

            }
        case 'UPDATE_OFFER':
            console.log(action.payload.offerId);
            return {
                ...state,
                offers: state.offers.map(offer => offer._id === action.payload.offerId ? { ...offer, ...action.payload.body } : offer)
            }
        case 'GET_USER_OFFERS':
            return {
                ...state,
                userOffers: action.payload
            }
        case 'FILTER_OFFERS':
            return {
                ...state,
                offers: action.payload
            }

        default:
            return state
    }

}

export default offerReducers