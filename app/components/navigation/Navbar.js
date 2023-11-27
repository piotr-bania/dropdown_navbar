'use client'

import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <Link href='/'>Home</Link>
            <Link href='/urban_twilight'>Urban Twilight</Link>
            <Link href='/mystic_forest'>Mystic Forest</Link>
            <Link href='/winter_forest'>Winter Forest</Link>
            <Link href='/tropical_paradise'>Tropical Paradise</Link>
        </>
    )
}

export default Navbar