import { Header } from "../../components/Header"
import { StyleMain } from "./styled"
import imgCapa from "../../assets/imgHome.svg"

export const HomePage =()=>{
    return(
        <>
        <Header rota1="/login" nameRota1="Login" rota2="/Register" nameRota2="Cadastrar"/>
        <StyleMain>
            <div>
                <img src={imgCapa} alt="imagem de capa" />
            <fieldset>
                <p>Em uma era onde a tecnologia é extremamente presente, é dificil ficar longe do computador e do
celular, e ler um bom livro acaba sendo apenas um sonho em meio a rotina, então criamos a Li-Marus
onde recomendamos você leitor a conhecer livros
e se aventurar em suas páginas.</p>
                <p>Deixe a imaginação fluir.</p>
            </fieldset>
            </div>
        </StyleMain>
        </>
    )
}