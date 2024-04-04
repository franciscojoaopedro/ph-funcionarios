import styled from "styled-components";
import {devices} from "../../breakpoints/divice"
export const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
export const ContainerFlex=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;




`

export const InputAndLabel=styled.div`
display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
margin-bottom:15px;

label{
    color: #fff;
    font-weight: 400;
    font-size: 20px;
}

input{
    outline: none;
    border: none;
    padding: 10px;
    background: transparent;
    width: 400px;
    border-bottom:  2px solid #fff;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    
    
}
input::placeholder{
        color: #fff;
        font-size: 12px;
    }

    

`

export const ContainerEsquerdo=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 100vh;
padding: 10px;
background:#e2e8f0;
box-shadow:  -3px -1px -4px  inset #121212;
position: relative;
img{
    width: 1500px;
    height: 90vh;
    display: block;
    justify-content: flex-end;
    align-items: center;
    margin-top: 98px;
   
   image-orientation: flip;
   image-rendering: auto;

}



`

export const  ContainerDireito=styled.div`
padding: 10px;
background:#1e569d;
width:50%;
height: 100vh;
max-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow:  3px 1px 4px  inset #121212;
`



export const ContainerButton=styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const Button=styled.div`
background: transparent;
padding: 8px 32px;
color: #fff;
font-size:18px;
transition: 0.4s ;
cursor: pointer;
border: 2px solid #fff;


    &:hover{
        transform: scale(0.7);
        background: #5eead4;
    }






`


export const ContainerLogoInfo=styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items:start;
margin-top: 25px;
margin-bottom: 25px;

h4{
    margin-left: 10px;
}

`;
export const ContainerLogo=styled.div`




img{
    width: 200px;
}
`


