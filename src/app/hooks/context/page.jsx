'use client'

import { useContext, useEffect, useState } from "react"
import { MyContext, MyP } from "./context";

const page = () => {

    const [state, setState] = useState(0);
    const { num, inc, dec } = useContext(MyContext)

    return (
        <div>
            {num}
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}

export default page 