import { combineReducers } from "redux"
import userReducers from './userReducers'
import nftReducers from './nftReducers'
import cartReducers from './cartReducers'
import transactionReducers from './transactionReducers'

const mainReducer = combineReducers({
    userReducers,
    cartReducers,
    nftReducers,
    cartReducers,
    transactionReducers,
})

export default mainReducer