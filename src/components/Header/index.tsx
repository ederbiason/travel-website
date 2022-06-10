import { Button } from '../Button';
import * as C from './styles';

export function Header() {
    return (
        <C.Container>
            <C.Nav>
                <C.NavName>Eco Adrenaline</C.NavName>
                <C.NavList>
                    <C.NavItem><a href="#home">Home</a></C.NavItem>
                    <C.NavItem><a href="#pacotes">Pacotes</a></C.NavItem>
                    <C.NavItem><a href="#servicos">Serviços</a></C.NavItem>
                    <C.NavItem><a href="#contato">Contato</a></C.NavItem>
                </C.NavList>
            </C.Nav>

            <C.MainContent>
                <C.MainTitleTop>Eco</C.MainTitleTop>
                <C.MainTitleBottom>Adrenaline</C.MainTitleBottom>
                <C.MainDescription>Conheça as belezas naturais do Sul do Brasil, paisagens encantadoras e inesquecíveis! Tenha a melhor experiência conosco.</C.MainDescription>
                <Button />
            </C.MainContent>
        </C.Container>
    )
}