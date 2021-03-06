import {FC} from 'react'
import styled from '@emotion/styled'
import Card from '../components/Card'


type Song = {
    id: number
    title: string
    artistId: number,
    artistName: string
}

type Props = {
    songs: Song[]
}

const Cards: FC<Props> = ({songs}) => {
    // console.log(songs)
    return (
        <CardsS>
            {songs.map((song: Song) => (
                <Card key={song.id} song={song} />
            ))}
        </CardsS>
    )}

const CardsS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default Cards
