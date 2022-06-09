export function Header() {
    return (
        <header className="h-[calc(100vh-150px)] bg-header-image bg-no-repeat bg-center bg-cover">
            <nav className="flex justify-between mx-[30px]">
                <p>Eco Adrenaline</p>
                <ul className="flex gap-[15px]">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#pacotes">Pacotes</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>

            <div className="w-[400px] my-[120px] mx-auto text-center">
                <h1 className="h-[160px] font-header text-[10em] m-0 bg- bg-clip-text text-transparent">Eco</h1>
                <h1 className="font-header mb-[10px] text-[3.5em]">Adrenaline</h1>
                <p>Conheça as belezas naturais do Sul do Brasil, paisagens encantadoras e inesquecíveis! Tenha a melhor experiência conosco.</p>
                <button>Saiba mais</button>
            </div>
        </header>
    )
}