import styled from "styled-components";

export const StyleMain = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #A25858;
    padding: 1.875rem;

    @media (max-width: 19.6875rem){
        padding: 1.875rem 0.625rem;
        align-items: baseline;
    } 
    div{
        width: 100%;
        max-width: 50rem;
        height: 85%;

        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1.25rem;
        }
    }

     fieldset{
        width: 95%;
        max-width: 37.5rem;

        position: absolute;

        background: rgba(232, 77, 77, 0.65);
        border-radius: 1.25rem;
        transform: rotate(-0.12deg);
        text-align: center;

        padding: 1.875rem;
        p{
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 150%;
            color: #FFFFFF;

            @media (max-width: 21.875rem){
                 font-size: 0.9375rem;
        }
            
        }
     }

`