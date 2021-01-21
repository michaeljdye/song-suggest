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
            <div>
                <h2>{title}</h2>
                <p>{artistName}</p>
                <a href={`http://www.songsterr.com/a/wa/song?id=${id}`} target="_blank" rel="noreferrer noopener">View Tab</a>
            </div>
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

    > div {
        margin-left: 2.5rem;
    }

    a {
        display: block;
        background: var(--colorPrimary);
        width: fit-content;
        margin: 0.5rem 0 0 0;
        padding: 0.4rem 0.7rem;
        border-radius: 3px;
        text-decoration: none;
        color: var(--colorDark);
    }
`

export default Card
