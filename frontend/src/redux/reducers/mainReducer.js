import { combineReducers } from "redux"
import userReducers from './userReducers'
import nftReducers from './nftReducers'
import cartReducers from './cartReducers'
import offerReducers from './offerReducers'
const mainReducer = combineReducers({
    userReducers,
    nftReducers,
    offerReducers,
    cartReducers
})

export default mainReducer