import { Icon, Card, DataSelect } from '~/Components'

export function Profile () {
    return (
        <>
            
            <div className="" >

                <header className="bg-red-500 flex justify-center">
                    <div className="container max-w-5xl flex justify-between items-center p-4">
                        <a href="/">
                            <img src="./src/assets/assets-natrave/logo/logo-fundo-vermelho.svg" alt="logo NaTrave" className="w-28 md:w-40" />
                        </a>
                    </div>
                </header>

                <main className="">

                    <section id="header" className=" bg-red-500 text-white flex justify-center ">

                        <div className=" container max-w-5xl space-y-4 flex flex-col items-start p-4">

                            <a href="/dashboard">
                                <Icon name="back" className="w-5"></Icon>
                            </a>
                            <span className="font-bold text-2xl capitalize ">jhonson marlon</span>

                        </div>

                    </section>

                    <div className='flex justify-center'>
                        <h2 className='text-red-500 font-bold text-xl py-5'>Seus Palpites</h2>
                    </div>

                </main>

            </div>

            <main className=" flex flex-col justify-center items-center ">


                <section className="">

                    <DataSelect />
                    
                </section>


                <section className=" p-4 space-y-4 ">
                        
                    <Card 
                        timeA={{ slug: 'cat'}}
                        timeB={{ slug: 'equ'}}
                        match={{ time: '7:00'}}
                    />

                    <Card 
                        timeA={{ slug: 'bra'}}
                        timeB={{ slug: 'ale'}}
                        match={{ time: '12:00'}}
                    />

                    <Card 
                        timeA={{ slug: 'esp'}}
                        timeB={{ slug: 'jap'}}
                        match={{ time: '15:00'}}
                    />

                </section>
            </main>
        </>
    )
}