export function Skills() {   

    let skillItems =[
    {name:"HTML5",rate:"Avançado"},
    {name:"CSS3",rate:"Avançado"},
    {name:"JavaScript",rate:"Itermediário"},
    {name:"React Js",rate:"Itermediário%"},
    {name:"Tailwind CSS",rate:"Itermediário%"},
  ];

    return (
        <div className="flex relative justify-center h-[900px] w-full pb-20 bg-gradient-to-b from-black to-green-700">
            
            
            
            <ul className='flex relative flex-col h-full w-full bg-black bg-opacity-40 m-20 pb-14'>
            <p className="flex relative justify-center text-4xl py-10">Habilidades</p>
                {
                skillItems.map((skills)=>(
                   <li key={skills.name} className='lg:flex-row flex-col relative h-1/6 py-2 w-full flex items-center px-20'>
                        <p className='relative lg:w-[20%] w-[100%] text-3xl lg:pr-28 pb-4'>{skills.name}</p>
                        <div key={skills.name} className="flex relative h-2 w-full">
                            <div className={`h-full bg-green-500 z-10 border ${skills.rate === 'Avançado' ? 'w-full' : 'w-[50%]'}`} />
                            <ul className="absolute flex w-full justify-between left-0 top-4">
                                <div className="absolute flex w-[101%] -left-1 justify-between bottom-7 z-20">
                                    <div className="w-5 h-5 bg-green-400 rounded-full border"/>
                                    <div className="w-5 h-5 bg-green-400 rounded-full border"/>
                                    <div className={`w-5 h-5 rounded-full ${skills.rate === 'Avançado' ? 'bg-green-400 border' : 'bg-transparent'}`} />
                                </div>
                                <li>Básico</li>
                                <li className="">Intermediário</li>
                                <li>Avançado</li>
                            </ul>
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}