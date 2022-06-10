import * as C from './styles';

export function Header() {
    return (
        <header>
            <nav>
                <p>Eco Adrenaline</p>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#pacotes">Pacotes</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>

            <div>
                <h1>Eco</h1>
                <h1>Adrenaline</h1>
                <p>Conheça as belezas naturais do Sul do Brasil, paisagens encantadoras e inesquecíveis! Tenha a melhor experiência conosco.</p>
                <button>Saiba mais</button>
            </div>
        </header>
    )
}