import {FC} from 'react'
import styled from '@emotion/styled'
import Card from '../components/Card'


type Category = {
    id: string
    name: string
}

type Props = {
    categories: Category[]
}

const CardContainer: FC<Props> = ({categories}) => {
    console.log(categories.forEach(({id}) => {
        console.log(id)
    }))
    return (
        <CardsS>
            {categories.map((category: Category) => (
                <Card key={category.id} category={category} />
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
