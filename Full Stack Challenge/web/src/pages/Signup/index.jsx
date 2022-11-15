
import { Icon, Input } from '~/Components'

export function Signup() {
    return (
        <div>
            <header className="flex justify-center p-4 border-b-2 border-red-300" >
                <div className="container max-w-xl flex justify-center  ">
                    <img src="./src/assets/assets-natrave/logo/logo-fundo-branco.svg" alt="logo NaTrave" className="w-32 md:w-40" />
                </div>
            </header>

            <main className=" flex justify-center ">
                <div className="container max-w-xl p-4">
                    <div className="p-4 flex items-center space-x-4">
                        <a href="/">
                            <Icon name="back" className="h-6" />
                        </a>
                        <h2 className="text-xl font-bold">Crie a sua conta</h2>
                    </div>

                    <form className="p-4 space-y-6">

                        <Input
                            type="text"
                            name="name"
                            label="Seu nome"
                            placeholder="Digite seu nome"
                        />

                        <Input
                            type="text"
                            name="username"
                            label="Seu nome de usuário"
                            placeholder="Digite um nome de usuário"
                        />

                        <Input
                            type="text"
                            name="e-mail"
                            label="Seu e-mail"
                            placeholder="Digite seu e-mail"
                        />

                        <Input
                            type="password"
                            name="password"
                            label="Sua senha"
                            placeholder="Digite sua senha"
                        />

                        <a href="/dashboard" className="block w-full text-center text-white bg-red-700 px-6 py-3 rounded-xl ">
                            Criar minha conta
                        </a>

                    </form>
                </div>
            </main>
        </div>
    )
}