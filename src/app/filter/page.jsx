'use client'

import { list } from "@/utils/const"
import { useState, useMemo } from "react"

// Your custom debounce function works perfectly here
const useDeb = (fn, delay) => {
    let timer

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

const Page = () => {

    // FIX 1: Two separate states
    // 'inputValue' handles the physical typing instantly so the input isn't frozen
    // 'search' handles the actual filtering after the 1-second delay
    const [inputValue, setInputValue] = useState('')
    const [search, setSearch] = useState('')

    // FIX 2: Wrapped in useMemo so the same timer instance is remembered across renders
    const debouncedSearch = useMemo(() =>
        useDeb(
            (val) => { setSearch(val) },  // fn
            1000 // delay
        ),
        []
    )

    const handleChange = (e) => {
        const val = e.target.value
        setInputValue(val)       // 1. Update text box instantly
        debouncedSearch(val)     // 2. Queue up the filtered list update
    }

    return (
        <div className="w-[100vw] h-[100vh] bg-black text-white p-20">
            <input
                className="border-2 border-gray-200 rounded-md text-white px-2 py-1"
                type="search"
                value={inputValue}
                onChange={handleChange}
            />

            <ul className="mt-4">
                {
                    list
                        .filter(item => item.toLowerCase().includes(search.toLowerCase()))
                        .map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default Page
