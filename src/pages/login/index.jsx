import { Container, ContainerFlex ,InputAndLabel,ContainerEsquerdo,ContainerDireito,ContainerButton,Button} from "./style"

import Elisa from "../../assets/phportalfuncionario-baner.png"

export const Login=()=>{
    return(
        <Container>
            <ContainerFlex>
                <ContainerEsquerdo>
                    <img src={Elisa} />
                </ContainerEsquerdo>
                <ContainerDireito>
                    <div>
                        <img  width={200} src="https://www.petrohost.ao/resources/uploads/logo/2024-01-04/petrohost-hospedagem-de-sites-seu-negocio-na-internet-2.png" />
                    </div>
                    <div style={{marginTop:14}}>
                        <h4  style={{fontSize:20,color:"white"}} >PORTAL DO </h4>
                        <h4  style={{fontSize:20,color:"darkkhaki"}}>FUNCIONÁRIO</h4>

                    </div>
                    <InputAndLabel>
                        <label>E-mail</label>
                        <input type="email"  />
                    </InputAndLabel>
                    <InputAndLabel>
                        <label>Senha</label>
                        <input type="password" security  />
                    </InputAndLabel>
                    <ContainerButton>
                        <Button>Entrar</Button>
                    </ContainerButton>
                </ContainerDireito>
            </ContainerFlex>
        </Container>
    )
}