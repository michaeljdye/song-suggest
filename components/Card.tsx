import {FC} from 'react'
import styled from '@emotion/styled'

type Props = {
    category: {
        id: string
        name: string
    }
} 

const Card: FC<Props> = ({category: {id, name}}) => {
    return (
        <CardS background="">
            <h2>{name}</h2>
        </CardS>
    )
}

type CardSProps = {
    background: string
}

const CardS = styled.div<CardSProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${({background = ''}) => background})  no-repeat center center / cover;
    width: 33.33%;
    height: 400px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.6);
`

export default Card
