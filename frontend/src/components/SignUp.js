import React, { useRef } from 'react'
import { toast } from 'react-toastify';
import nftActions from '../redux/actions/nftActions'
import { connect } from 'react-redux'

const SignUp = (props) => {

    const inputName = useRef()
    const inputLastName = useRef()
    const inputUserMail = useRef()
    const inputPassword = useRef()
    const inputImagenUser = useRef()
    const inputPhoneNumber = useRef()


    const handleSubmitInputs = async (e) => {
        e.preventDefault()

        const user = {
            name: inputName.current.value,
            lastName: inputLastName.current.value,
            email: inputUserMail.current.value,
            password: inputPassword.current.value,
            userImg: inputImagenUser.current.value,
            phone: inputPhoneNumber.current.value
        }

        const userResponse = await props.signup(user)
        props.getNeftsByUser(userResponse.userId)
        userResponse.succes
            ?
            toast.success('Your acount succesfuly Sign up', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

            : toast.warn(userResponse.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        if (userResponse.succes === true) {
            inputName.current.value = ""
            inputLastName.current.value = ""
            inputUserMail.current.value = ""
            inputPassword.current.value = ""
            inputImagenUser.current.value = ""
            inputPhoneNumber.current.value = ""
        }
    }


    return (
        <>
            <form onSubmit={handleSubmitInputs} className='form-take-input'>
                <input type="text" name="Name" ref={inputName} placeholder="Name" />
                <input type="text" name="lastName" ref={inputLastName} placeholder="Last name" />
                <input type="email" name="userMail" ref={inputUserMail} placeholder="Email" />
                <input type="password" name="password" ref={inputPassword} placeholder="Password" />
                <input type="text" name="imagenUser" ref={inputImagenUser} placeholder="Profile picture image Url" />
                <input type="text" name="phoneNumberUser" ref={inputPhoneNumber} placeholder="2974758745" />
                <button type='submit'>Sign Up</button>
            </form>
        </>
    )
}

const mapDispatchToProps = {
    getNeftsByUser: nftActions.getNftsByUser
}
export default connect(null, mapDispatchToProps)(SignUp);



