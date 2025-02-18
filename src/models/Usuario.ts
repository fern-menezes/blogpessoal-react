import Postagem from "./Postagem"

export default interface Usuario{
    //inserir o modelo de dados
    id: number
    nome: string
    usuario: string
    senha: string
    foto: string
    postagem?: Postagem | null
}