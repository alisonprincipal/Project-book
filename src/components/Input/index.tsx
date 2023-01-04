import { StyledDivInput } from "./styled"

export const Input =()=>{
    return(
        <StyledDivInput>
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="pra cima deles" />
        </StyledDivInput>
    )
}