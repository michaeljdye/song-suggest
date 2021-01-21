import {FC, useState, useEffect} from 'react'
import style from '@emotion/styled'

type Props = {
    search: ({variables: {artist: string}}) => {},
    query: string,
    setQuery: (query: string) => {}
}

const SearchForm: FC<Props> = ({search, setQuery, query }) => {
    const handleSubmit = e => {
        e.preventDefault()

        search({variables: {artist: query} })
    }

    return (
        <SearchFormS>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" value={query} onChange={e => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </SearchFormS>
    )
}

const SearchFormS = style.div`
    input {
        height: 1.4rem;
    }

    button {
        background: var(--colorPrimary);
        padding: 0.4rem 0.7rem;
        border: none;
        font-weight: 500;
    }
`

export default SearchForm
