import { combineReducers } from "redux"
import userReducers from './userReducers'
import nftReducers from './nftReducers'
import cartReducers from "./cartReducers"

const mainReducer = combineReducers({
    userReducers,
    nftReducers,
    cartReducers
})

export default mainReducer