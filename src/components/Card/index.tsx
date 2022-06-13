import * as C from './styles';


type Props = {
    title: string;
    imageSrc: string;
    alt: string;
    value: string;
    date: string;
    firstInfo: string;
    secondInfo: string;
}

export function Card({title, imageSrc, alt, value, date, firstInfo, secondInfo}: Props) {
    return (
        <C.Card>
            <C.CardTagTop></C.CardTagTop>
            <C.CardTagBottom>{value}</C.CardTagBottom>

            <img src={imageSrc} alt={alt} />
            <C.CardContent>
                <C.CardTitle>{title}</C.CardTitle>
                
                <C.CardDescription>
                    <C.CardDescriptionItem>{date}</C.CardDescriptionItem>
                    <C.CardDescriptionItem>{firstInfo}</C.CardDescriptionItem>
                    <C.CardDescriptionItem>{secondInfo}</C.CardDescriptionItem>
                </C.CardDescription>
            </C.CardContent>
        </C.Card>
    )
}