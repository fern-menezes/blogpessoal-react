import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Homes() {
    return (
        <>
        <div className="flex justify-center bg-cyan-900">
            <div className="container grid grid-cols-2 text-white">
                
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                    <p className="text-xl">
                        Expresse aqui seus pensamentos e
                        opiniões
                    </p>
                    <div className="flex justify-around gap-4">
                    <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                <div className="flex justify-center">
                    <img
                        className="rounded-tl-md"
                        src="https://i.pinimg.com/originals/6b/71/e0/6b71e0c74e6b42f53de0cefb7884f704.gif"
                        alt="Imagem da Página Home"
                    />
                </div>
            </div>
        </div>
        <ListaPostagens />
        </>
    )
}
 
export default Homes;