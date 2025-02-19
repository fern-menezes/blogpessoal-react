import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-cyan-900 text-white">
                <div className="container flex flex-col items-center py-5">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Fern 🪴 | All Rights Reserved {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-3'>
                        <LinkedinLogo size={32} weight='light' />
                        <InstagramLogo size={32} weight='light' />
                        <FacebookLogo size={32} weight='light' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer