import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import { GoogleLogin } from 'react-google-login';
import { BsFacebook, BsInstagram, BsGoogle } from "react-icons/bs";

const Form = (props) => {

    const responseGoogle = (response) => {
        let googleUser = {
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            google: true,
        }
    }


    return (
        <div className="form-central-todo">
            <div className="form-color-todo">
                <div className="form-contenedor-input">
                    <h1>{props.location.pathname === "/SignIn" ? <>Sign In</> : <>Sign Up</>}</h1>
                    <div className="social-container">
                        <ul>
                            <li>
                                <button className="facebook">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <BsFacebook />
                                </button>
                            </li>
                            <li>
                                <GoogleLogin
                                    clientId="409676372754-m8ptb83qo10l0r1rn4itlai43g7tjjh1.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <button className="google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <BsGoogle className="googlecom" />
                                        </button>
                                    )}
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </li>
                            <li>
                                <button className="instagram">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <BsInstagram />
                                </button>
                            </li>
                        </ul>
                    </div>
                    {props.location.pathname === "/SignIn" ? <><SignIn signin={props.login} /></> : null}
                    {props.location.pathname === "/SignUp" ? <><SignUp signup={props.signup} /></> : null}
                </div>
                {
                    props.location.pathname === "/SignUp" ?
                        <div className="background-image">
                            <h2>Welcome Back!</h2>
                            <p>To keep connected with us please login with your personal info</p>
                            <Link to="/SignIn">SignIn</Link>
                        </div>
                        :
                        <div className="background-image">
                            <h2>Hello, Friend!</h2>
                            <p>Enter your personal details and start journey with us</p>
                            <Link to="/SignUp">SignUp</Link>
                        </div>
                }
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducers.user
    }
}

const mapDispatchToProps = {
    login: userActions.signIn,
    signup: userActions.addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)