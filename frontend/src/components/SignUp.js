import React, {useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login'



const SignUp = () => {


    const [ error, setError] = useState({})


    const responseGoogle = async (res) => {
      
        // console.log(res)
        let googleUser = {
          firstName:res.profileObj.givenName,
          lastName:res.profileObj.familyName,
          userMail: res.profileObj.email,
          password: res.profileObj.googleId,
          imagenUser:  res.profileObj.imageUrl,
        //   phoneNumberUser: res.profileObj.phoneNumber,
          google: true, 
        }
  
        //  await cargarUser(googleUser)
        .then((response) => {
            console.log(response)
            if (response.data.success){
                alert('Your account has been created. 👍')
  
            }
            else{
            alert(response.map(err =>err.message))
            }
  
        })
        .catch((error) => {
            console.log(error)
            alert('Something went wrong, come back later.')
  
        })
  
    
  }


    const inputName = useRef()
    const inputLastName = useRef()
    const inputUserMail = useRef()
    const inputPassword = useRef()
    const inputImagenUser = useRef()
    const inputPhoneNumber = useRef()
   

    const handleSubmitInputs = (e)=> {
        e.preventDefault()
        handleSubmit(
           inputName.current.value,
           inputLastName.current.value,
           inputUserMail.current.value,
           inputPassword.current.value,
           inputImagenUser.current.value,
           inputPhoneNumber.current.value,
          )
   
           inputName.current.value =""
           inputLastName.current.value =""
           inputUserMail.current.value =""
           inputPassword.current.value =""
           inputImagenUser.current.value =""
           inputPhoneNumber.current.value =""
           
    }


    return (
        <>
        <div className="formcontainer">     
                <div className="formsignup">
                <div className="containerinterno">
                
                    <div>
                    <form onSubmit={handleSubmitInputs}>
                        <div>

                        <input
                            type="text"
                            name="Name"
                            ref = {inputName}                 
                            placeholder="Name"
                        />
                        {error.name && <p>{error.name}</p> }
                        
                        </div>
                        <div>
                        <input
                            type="text"
                            name="lastName"
                            ref = {inputLastName}
                            placeholder="Last name"
                        />
                    {error.lastName && <p>{error.lastName}</p> }
                        </div>
                        <div>
                        <input
                            type="email"
                            name="userMail"
                            ref = {inputUserMail}
                            placeholder="Email"
                            />
                        </div>
                        {error.userMail && <p>{error.userMail}</p> }
                        <div>
                        <input
                            type="password"
                            name="password"
                            ref = {inputPassword}
                            placeholder="Password"
                            />
                            {error.password && <p>{error.password}</p> }
                        </div>
                        <div>
                        <input
                            type="text"
                            name="imagenUser"
                            ref = {inputImagenUser}
                            placeholder="Profile picture image Url"
                            />
                            {error.imagenUser && <p>{error.imagenUser}</p> }
                        </div>
                        <div>
                        <input
                            type="text"
                            name="phoneNumberUser"
                            ref = {inputPhoneNumber}
                            placeholder="Profile picture image Url"
                            />
                            {error.phoneNumberUser && <p>{error.phoneNumberUser}</p> }
                        </div>
                       
                            <input className="formButtons" type='submit' value='Create account'></input>
                    </form>
                    <GoogleLogin className="formButtons"
                        clientId="cambiarelClientId.apps.googleusercontent.com"
                        buttonText="Sign up with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'} />
                
                    <p> ..Already a member?, <Link className="signinhere" to="/signin">Sign In here ⬅</Link></p>
                    </div>
                </div>
                </div>
            </div>       
       </>
    )
}

export default SignUp





