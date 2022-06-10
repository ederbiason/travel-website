import { Card } from '../Card';
import * as C from './styles';
import peakPR from '../../assets/images/pico-parana.jpg'

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
                    src="Imagem do Pico Paraná"
                    value="R$ Valor"
                    date="(Dia) e (Dia) de (Mês)"
                    firstInfo="Altitude 1.877 metros"
                    secondInfo="Dificuldade avançado"
                />
                <Card
                    title="Pacote Pico Paraná"
                    imageSrc={peakPR}
                    src="Imagem do Pico Paraná"
                    value="R$ Valor"
                    date="(Dia) e (Dia) de (Mês)"
                    firstInfo="Altitude 1.877 metros"
                    secondInfo="Dificuldade avançado"
                />
                <Card
                    title="Pacote Pico Paraná"
                    imageSrc={peakPR}
                    src="Imagem do Pico Paraná"
                    value="R$ Valor"
                    date="(Dia) e (Dia) de (Mês)"
                    firstInfo="Altitude 1.877 metros"
                    secondInfo="Dificuldade avançado"
                />
            </C.CardWrapper>
        </C.Container>
    )
}