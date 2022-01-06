import axios from 'axios'
const userActions = {

    addUser: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('https://mytinerary-moraga.herokuapp.com/api/user/signup', paramUser)
                if (user.data.success && !user.data.error) {
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'USER_LOGGED', payload: { userName: user.data.response.userName, img: user.data.response.img, userID: user.data.response._id } })
                    return { succes: true }
                } else {
                    return { issues: user.data }
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
                dispatch({ type: 'UPDATE_USER', payload: { userName: user.data.response.userName, img: user.data.response.img, userID: user.data.response._id } })

            } catch (error) {
                return { msg: 'You must be login' }
            }

        }
    },
    signIn: (email, password, google) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('https://mytinerary-moraga.herokuapp.com/api/user/signin', { email, password, google })
                if (user.data.success && !user.data.error) {
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'USER_LOGGED', payload: { userName: user.data.response.userName, img: user.data.response.img, userID: user.data.response._id } })
                    return { sucess: true }
                } else {
                    return { error: user.data.error }
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
                const user = await axios.get('https://mytinerary-moraga.herokuapp.com/api/user/auth', {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'USER_LOGGED', payload: { userName: user.data.response.userName, img: user.data.response.img, userID: user.data.response._id } })
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
}

export default userActions