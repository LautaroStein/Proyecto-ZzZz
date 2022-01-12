import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import userActions from '../../redux/actions/userActions'

const User = (props) => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, []);

    const [modify, setModify] = useState(false)

    const [modifyUser, setModifyUser] = useState({
        name: props.user.name,
        lastName: props.user.lastName,
        email: props.user.email,
        phone: props.user.phone,
        userImg: props.user.userImg,
    })

    const handleInputChange = (e) => {
        setModifyUser({
            ...modifyUser,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setModify(!modify)
        await props.editUser(props.user._id, modifyUser)
    }

    return (


        <div className="user-cont">
            <div className="user-container">
                <div className="user-header-container">
                    <div>
                        <div className="edit-user" onClick={() => setModify(!modify)}>Editar</div>
                        <div className="edit-user" onClick={()=>props.logout()}>Cerrar sesión</div>
                    </div>
                    
                    {!props.user && <div className="user-img" style={{backgroundImage: `URL("https://www.batiburrillo.net/wp-content/uploads/2019/07/Ampliacio%CC%81n-de-imagen-en-li%CC%81nea-sin-perder-calidad.jpg")`}}></div>}
                    {props.user && <div className="user-img" style={{backgroundImage: `URL(${props.user.userImg})`}}></div>}
                </div>

                {modify ? 
                
                <form onSubmit={handleRegister}>
                    <div className="user-info-container">
                        <div><label>First Name:</label><input type="text" placeholder="Name" name="name" defaultValue={modifyUser.name} onChange={handleInputChange} className="user-info-label"/></div>
                        <div><label>Last Name:</label><input type="text" placeholder="Last Name" name="lastName" defaultValue={modifyUser.lastName} onChange={handleInputChange} className="user-info-label"/></div>
                        <div><label>Email:</label><input type="text" placeholder="Email" name="email" defaultValue={modifyUser.email} onChange={handleInputChange} className="user-info-label"/></div>
                        <div><label>Phone:</label><input type="text" placeholder="Phone" name="phone" defaultValue={modifyUser.phone} onChange={handleInputChange} className="user-info-label"/></div>
                        <div><label>Image:</label><input type="text" placeholder="Image" name="userImg" defaultValue={modifyUser.userImg} onChange={handleInputChange} className="user-info-label"/></div>
                    </div>
                    <button type="submit" className="edit-user">Enviar</button>
                </form>

                : 
                
                <div className="user-info-container">
                    <div><span>First Name:</span><div className="user-info-label">{props.user.name}</div></div>
                    <div><span>Last Name:</span><div className="user-info-label">{props.user.lastName}</div></div>
                    <div><span>Email:</span><div className="user-info-label">{props.user.email}</div></div>
                    <div><span>Phone:</span><div className="user-info-label">{props.user.phone}</div></div>
                    {/* <div><span>Image:</span><div className="user-info-label">{props.user.userImg}</div></div> */}
                </div>

                }

                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.userReducers.user)
    return{
        user: state.userReducers.user
    }
}

const mapDispatchToProps = {
    editUser: userActions.editUser,
    logout: userActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
