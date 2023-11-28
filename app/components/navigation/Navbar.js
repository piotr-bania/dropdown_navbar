'use client'

import './navbar.scss'
import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import Desert_Dusk from "../experience/Desert_Dusk"
import Mystic_Forest from '../experience/Mystic_Forest'

const environmentMap = {
    '/': './environments/secluded_beach_2k.hdr',
    '/desert_dusk': './environments/kloofendal_38d_partly_cloudy_2k.hdr',
    '/mystic_forest': './environments/woods_2k.hdr',
    '/winter_forest': './environments/snowy_forest_path_01_2k.hdr',
    '/tropical_paradise': './environments/venice_sunset_2k.hdr',
}

const Navbar = () => {
    const router = useRouter()
    const [currentEnvironment, setCurrentEnvironment] = useState(environmentMap['/'])
    const [currentRoute, setCurrentRoute] = useState('/')

    const handleRouteChange = (newRoute) => {
        setCurrentRoute(newRoute)
        router.push(newRoute)
        console.log('New Route:', newRoute)
    }

    useEffect(() => {
        const newEnvironment = environmentMap[currentRoute] || environmentMap['/']
        setCurrentEnvironment(newEnvironment)
    }, [currentRoute])

    return (
        <div className='canvas'>
            <Canvas>
                <PerspectiveCamera makeDefault position={[2, 1, 3]} />
                <Environment files={currentEnvironment} background />
                <Desert_Dusk onRouteChange={() => handleRouteChange('/desert_dusk')} />
                <Mystic_Forest onRouteChange={() => handleRouteChange('/mystic_forest')} />
                <OrbitControls />
            </Canvas>

            {/* <Link href='/'>Home</Link>
            <Link href='/urban_twilight'>Urban Twilight</Link>
            <Link href='/mystic_forest'>Mystic Forest</Link>
            <Link href='/winter_forest'>Winter Forest</Link>
            <Link href='/tropical_paradise'>Tropical Paradise</Link> */}
        </div>
    )
}

export default Navbar