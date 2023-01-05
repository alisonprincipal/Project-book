import styled from "styled-components";

export const StyleMain = styled.main`
    width: 100%;
    min-height: 92.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #DCDBDB;
    padding: 1.875rem;

    margin-top: 65px;

    @media (max-width: 19.6875rem){
        padding: 1.875rem 0.625rem;
        align-items: baseline;
        margin-top: 105px;
    } 
    div{
        width: 100%;
        max-width: 1200px;
        height: 700px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;   
              
        @media(max-width: 375px){
            height: 550px;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1.25rem;
        }
        .artigoLei{
        width: 95%;
        max-width: 45.5rem;
        max-height: 400px;

        position: absolute;

        background: rgba(24, 30, 190, 0.7);
        border-radius: 1.25rem;
        text-align: center;
        
        display: flex;
        flex-direction: column;
        gap: 15px;
       

        padding: 1.875rem;
        p{
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 155%;
            color: #FFFFFF;

            @media (max-width: 21.875rem){
                 font-size: 0.9375rem;
        }
            
        }
     }
    }

`