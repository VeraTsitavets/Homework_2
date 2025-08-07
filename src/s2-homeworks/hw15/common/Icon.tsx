import {CSSProperties} from 'react'
import iconSprite from '../../../assets/IconSprite.svg'

type Props = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    color?: string,
}

export const Icon = ({iconId, color, height, viewBox, width}: Props) => (
    <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={'none'}
        color={color}
        xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${iconSprite}#S{iconId}`}/>
    </svg>
)