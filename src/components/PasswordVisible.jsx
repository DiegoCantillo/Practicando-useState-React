import { useState } from "react"


const PasswordVisible = () =>{


    const [isActive, setIsActive] = useState(false)

    const lookAt= () => {
        setIsActive(!isActive)
    }
 
    return(

        <div className="contain-password">
            <h1>Iniciar sesión</h1>
            <form>
                <label htmlFor="user" >Usuario</label>
                <input type="email" id="user" placeholder="Registra tú Email"/>
                <label htmlFor="Contraseña">Contraseña</label>
                <input type={isActive? "text" : "password"} id="Contraseña" placeholder="Tú Contraseña"/>
            </form>
            <button onClick={lookAt}>Mostrar 👁️‍🗨️</button>
        </div>
    )
}

export default PasswordVisible