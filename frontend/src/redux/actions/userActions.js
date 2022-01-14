import axios from 'axios'
const userActions = {

    addUser: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/auth/signUp', paramUser)
                if (user.data.success && !user.data.error) {
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'USER_LOGGED', payload: { userName: user.data.response._doc.name, img: user.data.response._doc.userImg, userID: user.data.response._doc._id } })
                    return { succes: true, userId: user.data.response._doc._id }
                } else {
                    return { succes: false, error: user.data.errors }
                }
            } catch (error) {
                console.log(error);
            }
        }
    },

    deleteUser: (userId) => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.delete(`http://localhost:4000/api/admin/user/${userId}`, {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'DELETE_USER', payload: res.data.deletedId })

                return res.data.users
            } catch (error) {
                return { msg: 'You must be login' }
            }

        }
    },
    updateUser: (userId) => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.put(`http://localhost:4000/api/admin/user/${userId}`, {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'UPDATE_USER', payload: { userName: res.data.response.name, img: res.data.response.userImg, userID: res.data.response._id } })

            } catch (error) {
                return { msg: 'You must be login' }
            }

        }
    },
    signIn: (users) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/auth/signIn', users)
                if (user.data.success && !user.data.error) {
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'USER_LOGGED', payload: { userName: user.data.response._doc.name, img: user.data.response._doc.userImg, userID: user.data.response._doc._id } })
                    return { succes: true, userId: user.data.response._doc._id }
                } else {
                    return { succes: false, error: user.data.error }
                }
            } catch (error) {
                console.error(error)
            }
        }
    },
    isAuth: () => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const user = await axios.get('http://localhost:4000/api/user/auth', {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'usuario', payload: { userName: user.data.response.userName, img: user.data.response.img, userID: user.data.response._id } })
                return { response: user.data.response }
            } catch (error) {
                return { error: 'Unauthorized user, try login again' }
            }
        }
    },
    logout: () => {
        return async (dispatch, getState) => {
            localStorage.removeItem('token')
            dispatch({ type: 'LOGOUT' })
        }
    },
    favs: (favs) => {
        return async (dispatch, getState) => {
            try{
                const token = localStorage.getItem('token')
                const user = await axios.put('http://localhost:4000/api/favs',{...favs},{
                        headers: { 'Authorization': 'Bearer ' + token }
                    })
                console.log(user)
                return {succes : true}
            }catch(err){
                console.log(err)
            }
        }
    }
}

export default userActions