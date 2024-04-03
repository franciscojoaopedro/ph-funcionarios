import styled from "styled-components"
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
    font-weight: 600;
    font-size: 20px;
}

input{
    border: 1px solid red;
    padding: 10px;
    background: #f1f5f9;
    border-radius: 8px;
    width: 400px;
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

img{
    
    height: 800px;
}
`

export const  ContainerDireito=styled.div`
padding: 10px;
background:#1e569d;
width:50%;

height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`