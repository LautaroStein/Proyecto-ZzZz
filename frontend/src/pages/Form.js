import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"

const Form = (props) => {

    console.log(props.user)
    return (
        <div className="form-central-todo">
            <div className="form-color-todo">
                <div className="form-contenedor-input">
                    
                    {props.location.pathname === "/SignIn" ?<><h1>Sign In</h1> <SignIn signin={props.login} /></>: null}
                    {props.location.pathname === "/SignUp" ?<><h1>Sign Up</h1> <SignUp signup={props.signup} /></>: null}
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
        user : state.userReducers.user
    }
}

const mapDispatchToProps = {
    login : userActions.signIn,
    signup : userActions.addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
