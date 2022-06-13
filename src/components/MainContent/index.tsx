import { Card } from '../Card';
import * as C from './styles';
import peakPR from '../../assets/images/pico-parana.jpg'
import peakCaratuva from '../../assets/images/pico-caratuva.jpg'
import peakAgudo from '../../assets/images/pico-agudo.jpg'
import waterfallSenges from '../../assets/images/cachoeira-senges.jpg'
import waterfallJaguaraiva from '../../assets/images/cachoeira-jaguaraiva.jpg'
import waterfallPadre from '../../assets/images/cachoeira-padre.png'

export function MainContent() {
    return (
        <C.Container>
            <C.MainTitle>
                Conheça nossos pacotes
            </C.MainTitle>

            <C.Category>⛰ Picos</C.Category>

            <C.CardWrapper>
                <Card
                    title="Pacote Pico Paraná"
                    imageSrc={peakPR}
                    alt="Imagem do Pico Paraná"
                    value="R$ Valor"
                    date="(Dia) e (Dia) de (Mês)"
                    firstInfo="Altitude 1.877 metros"
                    secondInfo="Dificuldade avançado"
                />
                <Card
                    title="Pacote Pico Caratuva"
                    imageSrc={peakCaratuva}
                    alt="Imagem do Pico Caratuva"
                    value="R$ Valor"
                    date="(Dia) e (Dia) de (Mês)"
                    firstInfo="Altitude 1.860 metros"
                    secondInfo="Dificuldade avançado"
                />
                <Card
                    title="Pacote Pico Agudo"
                    imageSrc={peakAgudo}
                    alt="Imagem do Pico Agudo"
                    value="R$ Valor"
                    date="(Dia) e (Dia) de (Mês)"
                    firstInfo="Altitude 1.200 metros"
                    secondInfo="Dificuldade intermediário"
                />
            </C.CardWrapper>

            <C.Category>🏞 Cachoeiras</C.Category>

            <C.CardWrapper>
                <Card
                    title="Pacote Sengés"
                    imageSrc={waterfallSenges}
                    alt="Imagem da cachoeira Sengés"
                    value="R$ Valor"
                    date="(Dia) e (Dia) de (Mês)"
                    firstInfo="Altitude 1. metros"
                    secondInfo="Dificuldade avançado"
                />
                <Card
                    title="Pacote Jaguaraíva"
                    imageSrc={waterfallJaguaraiva}
                    alt="Imagem da cachoeira Jaguaraíva"
                    value="R$ Valor"
                    date="(Dia) e (Dia) de (Mês)"
                    firstInfo="Altitude 1.877 metros"
                    secondInfo="Dificuldade avançado"
                />
                <Card
                    title="Pacote Buraco do Padre"
                    imageSrc={waterfallPadre}
                    alt="Imagem da cachoeira Buraco do Padre"
                    value="R$ Valor"
                    date="(Dia) e (Dia) de (Mês)"
                    firstInfo="Altitude 1.877 metros"
                    secondInfo="Dificuldade avançado"
                />
            </C.CardWrapper>
        </C.Container>
    )
}