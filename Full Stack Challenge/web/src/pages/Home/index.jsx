
export function Home() {
  return (
    <div className="min-h-screen bg-red-700 text-white p-4 flex flex-col items-center space-y-6">

      <header className="container flex justify-center max-w-5xl p-4 " >
        <img src="./src/assets/assets-natrave/logo/logo-fundo-vinho.svg" alt="logo NaTrave" className="w-40" />
      </header>

      <body className="container p-4 flex-1 flex flex-col items-center md:flex-row spacey-4">

        <div className="md:flex-1 flex justify-center">
          <img src="./src/assets/assets-natrave/imagem/img.png" alt="Duas pessoas com camisa da seleção" className="w-full max-w-md" />
        </div>

        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-3xl text-white text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>
          <a href="/signup" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
            Criar minha conta
          </a>

          <a href="/login" className="text-center text-white border border-white text-xl px-8 py-4 rounded-xl">
            Fazer Login
          </a>
        </div>
      </body>
    </div>
  )
}

