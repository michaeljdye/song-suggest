import {FC} from 'react'
import styled from '@emotion/styled'
import Card from '../components/Card'

const CardContainer: FC = () => {
    type Song = {
        id: number
        title: string
        artist: string
    }

    const songs = [
        {
            id: 1,
            title: "Through Struggle",
            artist: 'As I Lay Dying'
        },
        {
            id: 2,
            title: "Barbarian",
            artist: 'August Burns Red'
        },
        {
            id: 3,
            title: "Rose of Sharon",
            artist: 'Killswitch Engage'
        }
    ]
    return (
        <CardsS>
            {songs.map((song: Song) => (
                <Card key={song.id} song={song} />
            ))}
        </CardsS>
    )
}

const CardsS = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default CardContainer
