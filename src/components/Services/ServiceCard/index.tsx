import { ReactNode } from 'react';
import { Button } from '../../Button'
import * as C from './styles'

type Props = {
    title: string;
    description: string;
    icon: ReactNode;
}

export function ServiceCard({ title, description, icon }: Props) {
    return (
        <C.Card>
            <C.Icon>{icon}</C.Icon>

            <C.CardContent>
                <C.CardTitle>{title}</C.CardTitle>

                <C.CardDescription>{description}</C.CardDescription>
            </C.CardContent>
            <Button />
        </C.Card>
    )
}