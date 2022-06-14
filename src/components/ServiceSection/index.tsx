import { ServiceCard } from './ServiceCard';
import * as C from './styles';
import { MapMarkedAlt } from '@styled-icons/fa-solid';
import { FirstAid } from '@styled-icons/foundation';
import { TravelBus } from '@styled-icons/zondicons';

export function ServiceSection() {
    return (
        <C.Container>
            <C.Title>Nossos Serviços</C.Title>

            <C.ServiceWrapper>
                <ServiceCard 
                    title="Tours guiados"
                    description="As aventuras são realizadas com auxílio de um ou mais guias, que além de fornecerem informações sobre o local, vão conduzir os aventureiros ao longo de todo o trajeto, ajudando sempre que for preciso e promovendo a intereção e diversão com os turistas."
                    icon={<MapMarkedAlt size="60px"/>}
                />

                <ServiceCard 
                    title="Assistência médica"
                    description="Possuímos assistência médica durante toda a viagem, um ou mais especialistas na área participam da aventura junto com os demais para em caso de emergência, prestarem socorro imediato."
                    icon={<FirstAid size="60px"/>}
                />

                <ServiceCard 
                    title="Transporte"
                    description="O transporte de ida e volta do destino fica por nossa responsabilidade, todos os pacotes possuem o transporte incluso."
                    icon={<TravelBus size="60px"/>}
                />
            </C.ServiceWrapper>
        </C.Container>
    )
}