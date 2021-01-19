import {FC} from 'react'
import styled from '@emotion/styled'

type Props = {
    song: {
        id: number
        title: string
        artistId: number
        artistName: string
    }
} 

const Card: FC<Props> = ({song: {id, title, artistId, artistName}}) => {
    return (
        <CardS background="">
            <h2>{title}</h2>
            <p>{artistName}</p>
            <a href={`http://www.songsterr.com/a/wa/song?id=${id}`} target="_blank" rel="noreferrer noopener">View Tab</a>
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
    background: url(${({background = ''}) => background})  no-repeat center center / cover;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.6);
    padding: 20px 0;

    * {
        margin-left: 40px;
    }

    a {
        background: rebeccapurple;
        width: fit-content;
        border: 1px solid #000;
        border-radius: 3px;
        padding: 5px 10px;
        text-decoration: none;
        color: white;
    }
`

export default Card
