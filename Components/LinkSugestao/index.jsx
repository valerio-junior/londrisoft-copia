import { Sugestao } from "./style"
function BotaoSugestao({children}) {
    return(
        <Sugestao>
            <a>{children}</a>
        </Sugestao>
    )
}

export default BotaoSugestao