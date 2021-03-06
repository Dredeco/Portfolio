export function Contact() {
    let adressInfo =[
        {name:'Endereço', info:'Rua Maestro Lourenço Soares, 209 - IPS - Campos dos Goytacazes / RJ'},
        {name:'Celular', info:'(22) 99797-1144'},
        {name: 'E-mail', info:'andrefersouza@gmail.com'},
    ];

    return (
        <div className="flex flex-col relative w-full h-[900px] bg-black -mb-28">
            <p className="flex mt-32 w-full justify-center text-4xl">Contato</p>
            <div className="w-full px-20">
                <ul className="flex flex-col text-start text-lg w-full pt-20">
                {
                    adressInfo.map((link)=>(
                        <li key={link.name} className='flex flex-row'>
                        <p className='pr-3'>{link.name}:</p>
                        <p className=''>{link.info}</p>
                        </li>
                    ))
                }
                </ul>
            </div>

            <div className="flex flex-col w-full pt-12 px-20">
                <p className="flex text-lg pb-2">Entre em contato!</p>

                <div className="flex flex-row w-full justify-between items-center text-black">
                    <textarea placeholder="Nome" className="w-[48%] items-center resize-none border-2 border-green-500"></textarea>
                    <textarea placeholder="Telefone" className="w-[48%] resize-none border-2 border-green-500"></textarea>
                </div>

                <textarea placeholder="E-mail" className="w-full my-10 text-black resize-none border-2 border-green-500"></textarea>
                <textarea placeholder="Mensagem" className="w-full text-black resize-y border-2 border-green-500"></textarea>

                <button type="submit" className="w-20 h-10 bg-green-600 mt-10 rounded">Enviar</button>
            </div>
        </div>
    )
}