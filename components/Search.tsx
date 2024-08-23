'use client'

import {useEffect, useRef, useState} from 'react'
import {useRouter} from 'next/navigation'
import {useDebounce} from 'use-debounce'

const Search = ({searchFilter}: { searchFilter?: string }) => {
    const router = useRouter()
    const initialRender = useRef(true)

    const [text, setText] = useState(searchFilter || '')
    const [query] = useDebounce(text, 500)

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }

        if (!query) {
            router.push(`/`)
        } else {
            router.replace(`/?searchFilter=${query}`)
        }
    }, [query])


    return (
        <input
            value={text}
            placeholder='Search Miniatures...'
            onChange={e => setText(e.target.value)}
            className='flex bg-gray-800 w-full h-12 text-lg rounded-md scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:bg-gray-700 transition duration-200'
        />
    )
}

export default Search