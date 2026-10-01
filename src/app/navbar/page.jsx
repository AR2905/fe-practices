'use client'

import { useState } from "react";

const menuItems = [
    {
        name: "Home",
        dropdown: ["Dashboard", "Profile"],
    },
    {
        name: "Products",
        dropdown: ["Product 1", "Product 2"],
    },
    {
        name: "Services",
        dropdown: ["Web", "App"],
    },
    {
        name: "About",
        dropdown: ["Company", "Contact"],
    },
];

const Navbar = () => {

    const [active, setActive] = useState(0)
    const [hovered, setHover] = useState(null)
    const [open, setOpen] = useState(false)

    const handleClick = (index) => {
        setActive(index)
        setOpen(active === index ? !open : true)
    }

    const highlightIndex = hovered ?? active

    return <div>
        <div className="active-bar flex justify-center gap-2">
            <div className="relative flex">
                <div className="highlighter 
                absolute
                top-0
                bottom-0
                bg-red-200 
                transition-all
                duration-300
                ease
                "
                    style={
                        {
                            width: `${100 / menuItems.length}%`,
                            transform: `translateX(${highlightIndex * 100}%)`
                        }
                    }
                ></div>
                {
                    menuItems.map((item, index) =>
                        <div className="item p-8 cursor-pointer z-10" key={item.name}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(null)}
                            onClick={() => handleClick(index)}
                        >
                            {item.name}
                        </div>
                    )
                }
            </div>

        </div>
    </div>

};

export default Navbar;