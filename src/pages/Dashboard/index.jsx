import { Icon } from '~/Components'

export function Dashboard() {
    return (
        <div className=''>
            <div className=" bg-red-500 space-y-6 text-white" >
                <header className="flex justify-center">
                    <div className="container max-w-5xl flex justify-between items-center p-4">
                        <a href="/">
                            <img src="./src/assets/assets-natrave/logo/logo-fundo-vermelho.svg" alt="logo NaTrave" className="w-28 md:w-40" />
                        </a>
                        <a href="/profile">
                            <Icon name="profile" className="w-10" />
                        </a>
                    </div>
                </header>

                <main className="">
                    <section id="header" className=" bg-red-500 text-white flex justify-center ">
                        <div className=" container max-w-5xl space-y-2 flex flex-col flex items-start p-4">
                            <span>Olá Jhonson</span>
                            <h3 className="font-bold text-2xl ">Qual é o seu palpite?</h3>
                        </div>
                    </section>
                </main>
            </div>

            <section class="sessão_jhonson" id="content" className="flex flex-col">
                <div className="flex justify-center p-8 space-x-6 text-red-500">
                    <a href="/dashboard">
                        <Icon name="arrowleft" className="w-6" />
                    </a>
                    <h4 className="font-bold text-black">20 de novembro</h4>
                    <a href="/dash2">
                        <Icon name="arrowright" className="w-6" />
                    </a>
                </div>

                <div class="divisoes-jogos" className="flex flex-col space-y-4">
                    <div className=" flex justify-center ">
                        <div className="flex flex-col justify-center space-y-6 border border-grey-300 px-2 sm:px-20 md:px-40 lg: py-5 rounded-xl">
                            <div className="flex flex-row justify-center">
                                <span className=" text-grey-700 font-bold">13:00</span>
                            </div>
                            <div className="flex flex-row space-x-6 justify-center items-center">
                                <h5>CAT</h5>
                                <img src="./src/assets/assets-natrave/bandeiras/cat.png" alt="" />
                                <input className="text-white font-bold text-center bg-red-300 w-10 py-1" type="number"></input>
                                <span> X </span>
                                <input className="text-white font-bold text-center bg-red-300 w-10 py-1" type="number"></input>
                                <img src="./src/assets/assets-natrave/bandeiras/equ.png" alt="" />
                                <h5>EQU</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}