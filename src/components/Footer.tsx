export function Footer() {
    let navLinks =[
        {name:"Início",link:"/"},
        {name:"Habilidades",link:"/"},
        {name:"Projetos",link:"/"},
        {name:"Contato",link:"/"},
      ];
    let socialLinks =[
        {name: "fa-brands fa-facebook-f", link:"/"},
        {name: "fa-brands fa-twitter", link:"/"},
        {name: "fa-brands fa-instagram", link:"/"},
    ];

    return(
        <div className="flex absolute w-full h-28 px-20 border-t-2 justify-center">
            <div className="flex w-full h-auto items-center">
                <ul className={`lg:flex lg:flex-row hidden relative flex-col w-full h-auto text-lg`}>
                    {
                    navLinks.map((link)=>(
                        <li key={link.name} className='flex h-full justify-between'>
                        <a href={link.link} className='flex pr-10 hover:text-green-600 duration-500'>{link.name}</a>
                        </li>
                    ))
                    }
                </ul>
                <div className="w-full">Todos os direitos reservados.</div>
                <ul className={`flex w-full h-auto justify-end`}>
                    {
                    socialLinks.map((link)=>(
                        <li key={link.name} className='text-center px-8 text-xl'>
                        <a href={link.link} className='hover:text-green-600 duration-500'><i className={link.name} /></a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}