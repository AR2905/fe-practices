'use client'
import { useEffect, useState } from "react";

const page = () => {
    const [items, setItems] = useState([])
    const [val, setVal] = useState('')
    const [filter, setFilter] = useState('')
    function Add(value) {
        setItems(prev => [...prev, value])
        setVal('')
    }

    return (
        <>

            <input style={{
                'border': '2px solid green',
                'margin': '5rem'
            }} type="text" name="i" id="i" onChange={(v) => setVal(v.target.value)} />
            {val}
            <button onClick={() => Add(val)}>ADD</button>
            {
                items?.map((item, index) => <li key={index}>
                    {item}
                </li>)
            }
            <input style={{
                'border': '2px solid green',
                'margin': '5rem'
            }} type="text" name="f" id="f" onChange={(v) => setFilter(v.target.value)} />
            {
                items?.filter((item) => item?.toLowerCase()?.includes(filter?.toLowerCase())).map((item, index) => <div key={index}>{item}</div>)
            }
        </>
    )
}

export default page;