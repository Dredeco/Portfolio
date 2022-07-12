import Projeto1 from '../assets/Projeto1.png'
import Projeto2 from '../assets/Projeto2.png'
import Projeto3 from '../assets/Projeto3.png'
import Projeto4 from '../assets/Projeto4.png'
import Projeto5 from '../assets/Projeto5.png'
import Projeto6 from '../assets/Projeto6.png'

export function Projects() {

    return (
        <div className="relative w-full h-[900px] bg-gradient-to-b from-green-700 to-black px-20">
            <div className="relative flex flex-col w-full justify-around h-full pb-20 bg-opacity-40 bg-black">
                <p className="flex relative justify-center text-4xl pt-5 -mb-10 w-full">Projetos</p>
                <div className="flex flex-row w-full justify-between h-auto items-center px-20">
                    <div className='flex items-center flex-col px-2'>
                        <img src={Projeto1} className="flex h-48 w-auto border-2 border-green-800  bg-white hover:scale-150" />
                        <p className='flex pt-3 h-1'>Landing Page - Curso Danki Code</p>
                    </div>

                    <div className='flex items-center flex-col px-2'>
                        <img src={Projeto2} className="flex h-48 w-auto border-2 border-green-800  bg-white hover:scale-150" />
                        <p className='flex pt-3 h-1'>Landing Page - Imobiliária</p>
                    </div>

                    <div className='flex items-center flex-col px-2'>
                        <img src={Projeto3} className="flex h-48 w-auto border-2 border-green-800  bg-white hover:scale-150" />
                        <p className='flex pt-3 h-1'>Landing Page - Curso Danki Code 2</p>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-between h-auto items-center px-20">
                    <div className='flex items-center flex-col px-2'>
                        <img src={Projeto4} className="flex h-48 w-auto border-2 border-green-800  bg-white hover:scale-150" />
                        <p className='flex pt-3 h-1'>Landing Page - Dentista</p>
                    </div>

                    <div className='flex items-center  flex-col px-2'>
                        <img src={Projeto5} className="flex h-48 w-auto border-2 border-green-800  bg-white hover:scale-150" />
                        <p className='flex pt-3 h-1'>Site de vendas de automóveis</p>
                    </div>

                    <div className='flex items-center  flex-col px-2'>
                        <img src={Projeto6} className="flex h-48 w-auto border-2 border-green-800  bg-white hover:scale-150" />
                        <p className='flex pt-3 h-1'>Landing Page - Desenvolvimento de Sites</p>
                    </div>
                </div>
            </div>
        </div>
    )
}