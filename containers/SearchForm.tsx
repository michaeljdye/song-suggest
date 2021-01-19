import {FC, useState, useEffect} from 'react'

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" value={query} onChange={e => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm
