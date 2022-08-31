import * as C from './style';
import { PersonagemSides } from '../../types/PersonagemSides';


type Props = {
    x: number;
    y: number;
    side: PersonagemSides;
    name: string;
}

export const Personagem = ({ x, y, side, name }: Props) => {
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            sidePos={sides[side] ?? 0}
        >
            <C.NameBox>{name}</C.NameBox>
        </C.Container>
    );
}