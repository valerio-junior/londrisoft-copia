import { ButtonPesquisar } from "./style"

function ButtonPesquisa({children, ...props}) {
    return(
        <ButtonPesquisar {...props}>{children}</ButtonPesquisar>
    )
    
}

export default ButtonPesquisa