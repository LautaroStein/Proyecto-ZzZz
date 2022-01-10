import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home"
import { withRouter } from './utils/withRouter';
import Form from './pages/Form'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux"

const Forms = withRouter(Form)

function App(props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

        {
          !props.user.userID && 
          <>
            <Route path="/SignIn" element={<Forms/>}/>
            <Route path="/SignUp" element={<Forms/>}/>
          </>
        }
        <Route path="*" element={<Home/>} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user : state.userReducers.user
  }
}

export default connect(mapStateToProps, null)(App);
