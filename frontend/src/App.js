import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home"
import { withRouter } from './utils/withRouter';
import Form from './pages/Form'

const Forms = withRouter(Form)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignIn" element={<Forms/>}/>
        <Route path="/SignUp" element={<Forms/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
