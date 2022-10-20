import { useState } from "react"

const Bombilla = () => {

    const [isActive, setIsActive] = useState(true)


    const accionar = () => {
        setIsActive(!isActive)
    }

    return(
        <>
         <div className="bombilla">
            <div className="foco" style={{backgroundColor: isActive? "gray" : "yellow"}}/>
            <button onClick={accionar}>Off - On</button>
         </div>
         
        </>
        
    )
    
}

export default Bombilla