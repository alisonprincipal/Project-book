import styled from "styled-components";

export const StyledDivInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    label{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }
    input{
        height: 34px;
        background: #C4D3F1;
        border: 1px solid #D62424;
        border-radius: 4px;
        padding-left: 15px;
    }
    input::placeholder{     
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: rgba(193, 48, 48, 0.5); 
    }

`