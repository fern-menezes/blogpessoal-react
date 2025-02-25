import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlert";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

    
    let component: ReactNode

    if (usuario.token !== "") {

    component = (
        <div className='w-full flex justify-center py-4
            			  bg-cyan-900 text-white pl-4'>
            
                <div className="container flex justify-between text-lg ">
                <Link to="/#" className="text-white hover:text-cyan-500"> Blog Pessoal Fern 🌱</Link>
                    

                    <div className='flex gap-8 pr-4'>
                        <Link to='/postagens' className='hover:text-cyan-500'>Postagens</Link>
                        <Link to='/temas' className='hover:text-cyan-500'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:text-cyan-500'>Cadastrar tema</Link>
                        <Link to='/perfil' className='hover:text-cyan-500'>Perfil</Link>
                        <Link to= '' onClick={logout} className="text-white hover:text-cyan-500 "> Sair 🚪</Link>
                    </div>
                </div>
            </div>
    )
}
    return (
        <>
            { component }
        </>
    )
}


export default Navbar