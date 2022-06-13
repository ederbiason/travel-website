import * as C from './styles';
import { Restaurant } from '@styled-icons/boxicons-regular';
import { Tent } from '@styled-icons/fluentui-system-filled';
import { Calendar } from '@styled-icons/icomoon';

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
                    <C.CardDescriptionItem>
                        <Calendar size="16"/>
                        {date}
                    </C.CardDescriptionItem>

                    <C.CardDescriptionItem>
                        <Tent size="18" />
                        {firstInfo}
                    </C.CardDescriptionItem>

                    <C.CardDescriptionItem>
                        <Restaurant size="18" />
                        {secondInfo}
                    </C.CardDescriptionItem>
                </C.CardDescription>
            </C.CardContent>
        </C.Card>
    )
}