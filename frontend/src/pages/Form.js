import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

const Form = (props) => {
    
    console.log(props.location.pathname)

    return (
        <>
            {props.location.pathname === "/SignIn" ? <SignIn/>: null}
            {props.location.pathname === "/SignUp" ? <SignUp/>: null}
        </>
    )
}
export default Form
