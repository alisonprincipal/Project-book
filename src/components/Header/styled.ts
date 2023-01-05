import styled from "styled-components";

export const StyleHeader = styled.header`
    width: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    background:  #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   

    @media(max-width:321px){
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center; 
    }

    h1{
            font-weight: 400;
            font-size: 22px;
            line-height: 27px;
            color: #181EBE;
        }
    div{
        display: flex;
        width: 170px;
        justify-content: space-between;
        a{
            text-decoration: none;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #000000;

            :hover{
                font-size: 20px;
                text-decoration: underline;
            }
        }
    }
`