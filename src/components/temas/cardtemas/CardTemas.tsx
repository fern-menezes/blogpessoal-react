import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}
function CardTemas({ tema }: CardTemasProps) {
    
    return (
        <div className=' flex flex-col rounded-2xl overflow-hidden justify-between ml-10'>
            <header className='py-2 px-6 bg-cyan-800 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-2xl bg-gray-50 h-full pl-4'>{tema.descricao}</p>
            
            <div className="flex">
            <Link to={`/editartema/${tema.id}`}
	            className='w-full text-white bg-cyan-500 hover:bg-cyan-800 
                flex items-center justify-center py-2'>
	            <button>Editar</button>
            </Link>

            <Link to={`/deletartema/${tema.id}`} 
	            className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		            flex items-center justify-center'>
	            <button>Deletar</button>
            </Link>
            </div>

        </div>
    )
}

export default CardTemas