import { Container, ContainerFlex ,InputAndLabel,ContainerEsquerdo,
    ContainerDireito,ContainerButton,Button,
    ContainerLogoInfo,
    ContainerLogo

} from "./style"
import Toastify from 'toastify-js'
import Elisa from "../../assets/phportalfuncionario-baner.png"
import { useRef } from "react"

export const Login=()=>{
    const inputEmail=useRef(null)
    const inputSenha=useRef(null)

    function deletarCamposEmailSenha(){
        inputSenha.current.style.borderBottom=""
        inputEmail.current.style.borderBottom=""
        inputEmail.current.value=""
        inputSenha.current.value=""
        return
    }
    const handerLogin=()=>{
        const validInputEmail=inputEmail.current.value.includes("@petrohost.ao")
        const email=inputEmail.current.value
        const senha=inputSenha.current.value
        if(!email){
            Toastify({
                text: "E-mail não podem esta vazio",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #f43f5e, #e11d48)",
                }
              }).showToast();
              inputEmail.current.style.borderBottom="3px solid #e11d48"
              return
        }
        if(!senha){
            Toastify({
                text: "Senha  não podem estar vazio",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #f43f5e, #e11d48)",
                }
              }).showToast();
              inputSenha.current.focus()
              inputSenha.current.style.borderBottom="3px solid #e11d48"
              return
        }
        if(!validInputEmail){
            Toastify({
                text: "E-mail com domínio de terceiros não permitido!",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #f43f5e, #4f46e5)",
                }
              }).showToast();
              inputEmail.current.style.borderBottom="3px solid #e11d48"
              return
        }
        if(validInputEmail || email) inputEmail.current.style.borderBottom="none";
        if(senha)inputSenha.current.style.borderBottom="none";
        
        console.log({
            email,
            senha
        })
        deletarCamposEmailSenha()
    }


    return(
        <Container>
            <ContainerFlex>
                <ContainerEsquerdo>
                    <img src={Elisa} />
                </ContainerEsquerdo>
                <ContainerDireito>
                    <ContainerLogo>
                        <img  width={200} src="https://www.petrohost.ao/resources/uploads/logo/2024-01-04/petrohost-hospedagem-de-sites-seu-negocio-na-internet-2.png" />
                    </ContainerLogo>
                    <ContainerLogoInfo>
                        <h4  style={{fontSize:20,color:"white"}} >PORTAL DO </h4>
                        <h4  style={{fontSize:20,color:"darkkhaki"}}>FUNCIONÁRIO</h4>

                    </ContainerLogoInfo>
                    <InputAndLabel>
                        <label>E-mail</label>
                        <input ref={inputEmail} required   type="email" placeholder="email@petrohost.ao"  />
                    </InputAndLabel>
                    <InputAndLabel>
                        <label>Senha</label>
                        <input ref={inputSenha}   required type="password"    placeholder="*************"  security="true"  />
                    </InputAndLabel>
                    <ContainerButton>
                        <Button  onClick={handerLogin} >Entrar</Button>
                    </ContainerButton>
                </ContainerDireito>
            </ContainerFlex>
        </Container>
    )
}