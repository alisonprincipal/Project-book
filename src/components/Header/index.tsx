import { Link } from "react-router-dom"
import { StyleHeader } from "./styled"
interface iRoutes{
    rota1:string;
    rota2:string;
    nameRota1:string;
    nameRota2:string;
}

export const Header =({rota1,rota2,nameRota1,nameRota2}:iRoutes)=>{
    return(
        <StyleHeader>
            <h1>Li-Marus</h1>
            <div>
                <Link to={rota1}>{nameRota1}</Link>
                <Link to={rota2}>{nameRota2}</Link>
            </div>
        </StyleHeader>
    )
}