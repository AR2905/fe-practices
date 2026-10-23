'use client'
import { useMemo, useState } from 'react';

const useDebounce = (func, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer); // Now this will successfully clear the previous timer!
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const Page = () => {
    const [search, setSearch] = useState([]);

    const searchAPI = (value) => {
        setSearch((prev) => [...prev, value]);
    };

    // FIX: Wrap it in useMemo so the same function instance (and its timer closure) persists
    const debouncedSearch = useMemo(() => useDebounce(searchAPI, 500), []);

    const handleSearch = (e) => {
        const value = e.target.value;
        debouncedSearch(value);
    };

    return (
        <>
            <input type="search" placeholder="search here" onChange={handleSearch} />
            <ul>
                {search?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default Page;
