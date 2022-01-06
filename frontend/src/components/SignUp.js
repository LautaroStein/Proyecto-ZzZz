import React, {useRef, useState} from 'react'
import GoogleLogin from 'react-google-login'
import { toast } from 'react-toastify';


const SignUp = (props) => {


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
            alert('Something went wrong! Come back later!')
  
        })
  
    
  }


    const inputName = useRef()
    const inputLastName = useRef()
    const inputUserMail = useRef()
    const inputPassword = useRef()
    const inputImagenUser = useRef()
    const inputPhoneNumber = useRef()
   

    const handleSubmitInputs = async(e)=> {
        e.preventDefault()
        
        const user = {
            name : inputName.current.value,
            lastName : inputLastName.current.value,
            email : inputUserMail.current.value,
            password : inputPassword.current.value,
            userImg : inputImagenUser.current.value,
            phone : inputPhoneNumber.current.value
        }

        const userResponse = await props.signup(user)
   
        console.log(userResponse)
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
            if(userResponse.succes === true){
                inputName.current.value =""
                inputLastName.current.value =""
                inputUserMail.current.value =""
                inputPassword.current.value =""
                inputImagenUser.current.value =""
                inputPhoneNumber.current.value =""
            }
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
                            placeholder="2974758745"
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
                
                    </div>
                </div>
                </div>
            </div>       
       </>
    )
}

export default SignUp





