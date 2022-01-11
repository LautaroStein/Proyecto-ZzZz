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
        profilePhoto: props.user.userImg
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

    console.log(modifyUser)

    return (


        <div className="user-cont">
            <div className="user-container">
                <div className="user-header-container">
                    <div>
                        <h1>Tu perfil</h1>
                        <div className="edit-user">Editar</div>
                        <div className="edit-user" onClick={()=>props.logout()}>Cerrar sesión</div>
                    </div>
                    
                    {!props.user && <div className="user-img" style={{backgroundImage: `URL("https://www.batiburrillo.net/wp-content/uploads/2019/07/Ampliacio%CC%81n-de-imagen-en-li%CC%81nea-sin-perder-calidad.jpg")`}}></div>}
                    {props.user && <div className="user-img" style={{backgroundImage: `URL(${modifyUser.profilePhoto})`}}></div>}
                </div>
                <div className="user-info-container">
                    <div><span>Nombre:</span><div className="user-info-label">{modifyUser.name}</div></div>
                    <div><span>Apellido:</span><div className="user-info-label">{modifyUser.lastName}</div></div>
                    <div><span>Correo:</span><div className="user-info-label">{modifyUser.email}</div></div>
                    <div><span>Telefono:</span><div className="user-info-label">{modifyUser.phone}</div></div>
                    <div><span>Nombre:</span><div className="user-info-label">NOMBRE</div></div>
                    <div><span>Imagen:</span><div className="user-info-label">{modifyUser.profilePhoto}</div></div>
                </div>
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
    editUser: userActions.updateUser,
    logout: userActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
