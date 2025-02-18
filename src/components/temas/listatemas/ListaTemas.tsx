import { useContext, useEffect, useState } from "react";
import CardTemas from "../cardtemas/CardTemas"
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

function ListaTemas() {
    const navigate = useNavigate();
    const [temas, setTemas] = useState<Tema[]>([])
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    //função que busca os temas lá do back end
    async function buscarTemas(){
        try{
            await buscar('/temas', setTemas, {
                //cabeçalho com o token, o que faziamos no insomnia, agr utilizando o axios
                headers: {Authorization: token}
            })
        }catch(error: any){
            //converter o erro para string, para verificar se ele vai sair ou continuar logado na aplicação
            if(error.toString().includes('401')){
                //handle logout zera o token, precisa fazer o login novamente
                handleLogout()
            }
        }
    }

    //use effect para executar a verificação dos temas 1 relacionado ao token, 2 busca de dados

    useEffect(() =>{
        if(token === ''){
            alert('Você precisa estar logado!')
            navigate('/')
        }
    },[token])

    useEffect(() => {
        buscarTemas()
    }, [CardTemas.length])
    
    return (
        <>
        {temas.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                                {
                                    temas.map((tema) => (
                                        <CardTemas key={tema.id} tema={tema}/>
                                    ))
                                }
                            
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaTemas;