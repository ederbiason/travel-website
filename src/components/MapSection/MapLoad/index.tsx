import { useLoadScript } from "@react-google-maps/api"
import { MapMap } from "../Map";

import { Map } from '@styled-icons/boxicons-regular';
import { Instagram } from "@styled-icons/boxicons-logos";
import { Telephone } from "@styled-icons/bootstrap";
import { MailSend } from "@styled-icons/boxicons-regular"

import * as C from './styles';

interface Props {
    libraries: ["places"]; 
}

export function MapLoad({libraries}: Props) {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_API_KEY,
        libraries
    })

    if(!isLoaded) return <div>Loading...</div>;
    if(loadError) return <div>Error in loading mpa...</div>

    return (
        <C.Wrapper>
            <C.ContactTitle>Contato</C.ContactTitle>

            <C.ContactCard>
                <C.Title>Entre em contato</C.Title>

                <C.Content>
                    <C.Item>  
                        <C.Icon><Map size="25px"/></C.Icon>                       
                        <C.Info href="https://goo.gl/maps/CLg7UGbAeY1jc7Fx9" target="_blank">
                            Agência em Maringá-PR, Brasil
                        </C.Info> 
                    </C.Item>

                    <C.Item>
                        <C.Icon><Instagram size="25px" /></C.Icon>
                        <C.Info href="https://www.instagram.com/eco_adrenaline/?hl=pt-br" target="_blank">
                            eco_adrenaline
                        </C.Info>
                    </C.Item>

                    <C.Item>
                        <C.Icon><Telephone size="22px" /></C.Icon>
                        <C.Info href="tel:43 98858-4433">
                            (43) 98858-4433
                        </C.Info>
                    </C.Item>

                    <C.Item>
                        <C.Icon><MailSend size="25px" /></C.Icon>
                        <C.Info href="mailto:eco_adrenaline@hotmail.com" target="_blank">
                            eco_adrenaline@hotmail.com
                        </C.Info>
                    </C.Item>
                </C.Content>
            </C.ContactCard>

            <MapMap />
        </C.Wrapper>
    )
}