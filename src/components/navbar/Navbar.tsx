import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }
    return (
        <>
            <div className='w-full flex justify-center py-4
            			  bg-cyan-900 text-white pl-4'>
            
                <div className="container flex justify-between text-lg ">
                <Link to="/home" className="text-white hover:text-cyan-500"> Blog Pessoal</Link>
                    

                    <div className='flex gap-8 pr-4'>
                        <p>Postagens</p>
                        <Link to='/temas' className='hover:text-cyan-500'>Temas</Link>
                        <p>Cadastrar Tema</p>
                        <p>Perfil</p>
                        <Link to= '' onClick={logout} className="text-white hover:text-cyan-500 "> Sair → </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar