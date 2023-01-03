import styled from "styled-components";

export const StyleHeader = styled.header`
    width: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    background: #E0DDDD;

    @media(max-width:300px){
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center; 
    }


    div{
        display: flex;
        gap: 20px;

        a{
            text-decoration: none;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #000000;
        }
    }

`