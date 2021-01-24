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
        <div className="bg-white shadow-md rounded px-2 pt-6 pb-8 my-4 flex flex-col my-2 max-w-xl mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-center">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <input type="text" name="query" value={query} onChange={e => setQuery(e.target.value)} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4" />
                    </div>
                    <button className="bg-blue-500 text-white px-3 py-3" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}


export default SearchForm
